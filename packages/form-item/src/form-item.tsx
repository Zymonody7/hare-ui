import { computed, ComputedRef, defineComponent, inject, onMounted, onUnmounted, provide, ref, toRefs } from 'vue'
import { FormItemProps, formItemProps } from './types'
import { formContextToken, LabelData } from '../../form/src/types'
import Validator from 'async-validator'
const NAME = 'h-form-item'
const ITEM_CLASS = 'h-form__item'
const LABEL_CLASS = 'h-form__label'
export default defineComponent({
  name: NAME,
  props: formItemProps,
  setup(props: FormItemProps, { slots }) {
    const errorMsg = ref('')
    const showErrorMsg = ref(false)
    /**
     * 布局
     */
    // 注入label_data,生成动态label样式
    const labelData = inject('LABEL_DATA') as ComputedRef<LabelData>
    const layoutClasses = computed(() => [
      ITEM_CLASS,
      `${labelData.value.layout === 'horizontal' ? `${ITEM_CLASS}--horizontal` : `${ITEM_CLASS}--vertical`}`
    ])
    const labelClasses = computed(() => ({
      [LABEL_CLASS]: true,
      [LABEL_CLASS + '--vertical']: labelData.value.layout === 'vertical',
      [`${LABEL_CLASS}--${labelData.value.labelAlign}`]: labelData.value.layout === 'horizontal',
      [`${LABEL_CLASS}--${labelData.value.labelSize}`]: labelData.value.layout === 'horizontal'
    }))
    /**
     * 表单校验
     */
    // 实现validator方法给下级
    // 做校验用的数据和校验规则由上级(form)提供
    const formCtx = inject(formContextToken)
    const validate = () => {
      if (!formCtx) {
        console.warn('请在h-form中使用h-form-item')
        return Promise.reject('请在h-form中使用h-form-item')
      }
      if (!props.field) {
        console.warn('如果需要对数据进行校验,请设置field属性')
        return Promise.reject('请在h-form中使用h-form-item')
      }
      // 不需要校验
      if (!formCtx.rules) {
        return Promise.resolve({ result: true })
      }
      // 获取每个form-item的校验规则
      const itemRules = formCtx.rules[props.field]
      if (!itemRules) {
        return Promise.resolve({ result: true })
      }
      // 获取数据
      const value = formCtx.model[props.field]
      // 执行校验，返回结果
      const validator = new Validator({ [props.field]: itemRules })
      return validator.validate({ [props.field]: value }, errors => {
        if (errors) {
          /**
           * @todo mode:blur
           */
          // 校验失败，显示错误信息
          showErrorMsg.value = true
          errorMsg.value = errors[0].message || '校验错误'
        } else {
          // 校验通过, 清空校验信息
          showErrorMsg.value = false
          errorMsg.value = ''
        }
      })
    }
    // 将校验函数传到下一级
    const formItemCtx = {
      validate
    }
    provide('FORM_ITEM_CTX', formItemCtx)
    // 挂载后注册到FormCtx中
    onMounted(() => {
      if (props.field) {
        formCtx?.addItem(formItemCtx)
      }
    })
    onUnmounted(() => {
      if (props.field) {
        formCtx?.removeItem(formItemCtx)
      }
    })
    return () => (
      <div class={ layoutClasses.value }>
        {/* label */}
        <span class={labelClasses.value}>{ props.label }</span>
        {/* control */}
        {slots.default?.()}
        {/* 错误信息 */}
        {showErrorMsg.value && (
          <div class="error-message">{ errorMsg.value }</div>
        )}
      </div>
    )
  }
})
