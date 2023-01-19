import { computed, defineComponent, toRefs } from 'vue'
import { menuProps } from './types'

const NAME = 'h-menu'

export default defineComponent({
  name: NAME,
  props: menuProps,
  setup (props, { slots }) {
    const { activeIndex, mode, onSelect } = toRefs(props)
    const classes = computed(() => [
      NAME,
      `${ mode.value === 'horizontal' ? ` ${ NAME }--horizontal ` : ` ${ NAME }--vertical ` }`
    ])
    const defaultSlot = slots.default ? slots.default() : ''
    return () => (
      <ul class={classes.value}>
        {defaultSlot}
      </ul>
    )
  }
})
