import { computed, defineComponent, toRefs, inject } from 'vue'
import { menuItemProps } from './types'

const NAME = 'h-menu-item'

export default defineComponent({
  name: NAME,
  props: menuItemProps,
  setup (props, { slots }) {
    const { index, disabled } = toRefs(props)
    const classes = computed(() => [
      NAME,
      `${ disabled.value ? `${ NAME }--disabled` : '' }`
    ])
    const defaultSlot = slots.default ? slots.default() : ''

    return () => (
      <li class={classes.value}>
        {defaultSlot}
      </li>
    )
  }
})
