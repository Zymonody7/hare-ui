import { defineComponent } from 'vue'
import { alertProps } from './types'

const NAME = 'h-alert'

export default defineComponent({
  name: NAME,
  props: alertProps,
  setup (props, { slots }) {
    return () => (
      <div class={ NAME }>
        <div>
          h-alert
        </div>
      </div>
    )
  }
})
