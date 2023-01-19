import { computed, defineComponent, toRefs, provide } from 'vue'
import { MenuOnSelect, menuProps, IMenuProvide } from './types'

const NAME = 'h-menu'
export default defineComponent({
  name: NAME,
  props: menuProps,
  setup(props, { slots }) {

    const { activeIndex, mode, onSelect } = toRefs(props)
    const handleClick = (index:number) => {
      activeIndex.value = index
      if (onSelect.value) {
        onSelect.value(index)
      }
    }
    const clickProvide: IMenuProvide = {
      index: activeIndex.value ? activeIndex.value : 0,
      onSelect: handleClick
    }

    provide('index', (index) => {
      handleClick(index)
      console.log(index)
    })

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
