import { computed, ComputedRef, defineComponent, inject, toRefs } from 'vue'
import { FormItemProps, formItemProps } from './types'
import { LabelData } from '../../form/src/types'
const NAME = 'h-form-item'
const ITEM_CLASS = 'h-form__item'
const LABEL_CLASS = 'h-form__label'
export default defineComponent({
  name: NAME,
  props: formItemProps,
  setup(props: FormItemProps, { slots }) {
    // 注入label_data,生成动态样式
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
    return () => (
      <div class={ layoutClasses.value }>
        {/* label */}
        <span class={labelClasses.value}>{ props.label }</span>
        {/* control */}
        {slots.default?.()}
      </div>
    )
  }
})
