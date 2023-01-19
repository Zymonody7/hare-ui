import { defineComponent } from 'vue'
import { colProps } from './types'

const NAME = 'h-col'

export default defineComponent({
  name: NAME,
  props: colProps,
  setup (props, { slots }) {
    return () => (
      <div class={ NAME }>
        <div>
          h-col
        </div>
      </div>
    )
  }
})
