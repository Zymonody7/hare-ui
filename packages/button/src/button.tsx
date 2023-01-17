import { defineComponent } from 'vue'
import { buttonProps } from './types'

const NAME = 'h-button'

export default defineComponent({
  name: NAME,
  props: buttonProps,
  setup (props, context) {
    console.log(props, context)
    return () => (
      <button class={NAME}>
        123
      </button>
    )
  }
})
