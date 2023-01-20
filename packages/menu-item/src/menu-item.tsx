import { computed, defineComponent, toRefs, inject, Ref } from 'vue'
import { MenuContext, menuItemProps } from './types'

const NAME = 'h-menu-item'
const CLASSNAME = 'h-menu__item'
export default defineComponent({
  name: NAME,
  props: menuItemProps,
  setup (props, { slots }) {
    const { index, disabled } = toRefs(props)
    const menuContext = inject('MENU_CONTEXT') as MenuContext
    const handleClick = () => {
      if (menuContext.onSelect && !disabled.value) {
        menuContext.onSelect(index.value)
        console.log('context.index', menuContext.index)
        console.log('index.value', index.value)
      }
    }
    const classes = computed(() => [
      CLASSNAME,
      `${disabled.value ? `${CLASSNAME}--disabled` : ''}`,
      `${menuContext.index.value === index.value ? `${CLASSNAME}--active` : ''}`
    ])
    return () => (
      <li class={classes.value} onClick={handleClick}>
        {slots?.default()}
      </li>
    )
  }
})
