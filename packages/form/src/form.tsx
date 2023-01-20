import { computed, defineComponent, provide, toRefs } from 'vue'
import { formContextToken, FormProps, formProps } from './types'
import { FormItemContext } from '../../form-item/src/types'
import { Values } from 'async-validator'
const NAME = 'h-form'

export default defineComponent({
  name: NAME,
  props: formProps,
  emits: ['submit'],
  setup(props: FormProps, { slots, emit, expose }) {
    /**
     * 布局
     * @param layout 横向布局和纵向布局
     * @param labelSize 标签大小
     * @param labelAlign 标签对齐方式
    */
    // label属性
    const labelData = computed(() => ({
      layout: props.layout,
      labelSize: props.labelSize,
      labelAlign: props.labelAlign
    }))
    // 向下提供label_data
    provide('LABEL_DATA', labelData)
    // 使用Set存放待校验的items
    const formItems = new Set<FormItemContext>()
    const addItem = (item: FormItemContext) => formItems.add(item)
    const removeItem = (item: FormItemContext) => formItems.delete(item)
    // 提供表单上下文给后代使用
    provide(formContextToken, {
      model: props.model,
      rules: props.rules,
      addItem,
      removeItem
    })
    const submit = (e: Event) => {
      e.preventDefault()
      emit('submit')
    }
    // 表单全局校验方法
    const validate = (callback: (valid: boolean) => void) => {
      const tasks: Array<Promise<Values>> = []
      formItems.forEach(item => tasks.push(item.validate()))
      Promise.all(tasks)
        .then(() => callback(true))
        .catch(() => callback(false))
    }
    // 对外暴露接口
    expose({
      validate
    })
    return () => (
      <form class={NAME} onSubmit={submit}>
        {slots.default?.()}
      </form>
    )
  }
})
