import { computed, defineComponent, provide, toRefs } from 'vue'
import { FormProps, formProps } from './types'

const NAME = 'h-form'

export default defineComponent({
  name: NAME,
  props: formProps,
  setup(props: FormProps, { slots }) {
    // 向下提供label_data
    const labelData = computed(() => ({
      layout: props.layout,
      labelSize: props.labelSize,
      labelAlign: props.labelAlign
    }))
    provide('LABEL_DATA', labelData)
    return () => (
      <div class={NAME}>
        {slots.default?.()}
      </div>
    )
  }
})
