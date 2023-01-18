import { computed, defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './types'
import { call } from '../../utils/src/call'

const NAME = 'h-button'

export default defineComponent({
  name: NAME,
  props: buttonProps,
  setup (props:ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const classes = computed(() => [
      NAME,
      `${NAME}--${type.value}`,
      `${NAME}--${size.value}`,
      {
        [`${NAME}--block`]: block.value
      }
    ])
    const handleClick = (e: MouseEvent) => {
      if (props.loading || props.disabled) return
      if (props.onClick) call(props.onClick, e)
    }
    return () => {
      // const { tag: Component, loading } = props
      const defaultSlot = slots.default ? slots.default() : '按钮'

      return (
        <button
          disabled={disabled.value}
          onClick={handleClick}
          // type={attrType}
          class={classes.value}>
        {defaultSlot }
      </button>)

    }
  }
})
