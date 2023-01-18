import { computed, defineComponent } from 'vue'
import { iconProps } from './types'

const NAME = 'h-icon'

export default defineComponent({
  name: NAME,
  props: iconProps,
  setup(props, { slots }) {
    const iconSize = computed(() => {
      return typeof props.size === 'number' ? `${props.size}px` : `${props.size}`
    })
    // 网络图片
    const imgIcon = <img src={ props.name } style={{ width: iconSize.value, verticalAlign: 'middle' }}></img>
    // 字体图片
    const fontIcon = <span style={{ fontSize: iconSize.value, color: props.color }} class={[props.prefix, props.prefix + '-' + props.name]}></span>
    // svg显示
    const svgIcon = <svg class='icon' style={{ width: iconSize.value, height: iconSize.value }}><use xlinkHref={`#${props.prefix}-${props.component}`} fill={props.color}></use></svg>
    const icon = props.component
      ? svgIcon
      : /http|https/.test(props.name)
        ? imgIcon
        : fontIcon
    return () => {
      return (
        icon
      )
    }
  }
})
