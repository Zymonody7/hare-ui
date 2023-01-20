import { computed, defineComponent, toRefs, provide, ref } from 'vue'
import { MenuContext, menuProps } from './types'

const NAME = 'h-menu'
export default defineComponent({
  name: NAME,
  props: menuProps,
  setup(props, { slots }) {
    const { defaultIndex, mode, onSelect } = toRefs(props)
    const menuContext: MenuContext = {
      index: ref(defaultIndex.value),
      onSelect: onSelect.value
    }
    const handleClick = (index: string) => {
      menuContext.index.value = index
      console.log('index', index)
      console.log('menuc', menuContext.index.value)
      // console.log(typeof index)
      if (menuContext.onSelect) {
        menuContext.onSelect(index)
      }
    }
    provide('MENU_CONTEXT',{
      index: menuContext.index,
      onSelect: handleClick
    })
    const classes = computed(() => [
      NAME,
      `${ mode.value === 'horizontal' ? ` ${ NAME }--horizontal ` : ` ${ NAME }--vertical ` }`
    ])
    return () => (
      <ul class={classes.value}>
        {slots?.default()}
      </ul>
    )
  }
})