import { ExtractPropTypes, PropType, Ref } from 'vue'
import { EmitType } from '../../types'

export type MenuModeType = 'horizontal' | 'vertical'
export type MenuOnSelect = (e: string) => void
/**
 * menuProps属性是只读的
 */
export const menuProps = {
  defaultIndex: {
    type: String,
    default: ''
  },
  mode: {
    type: String as PropType<MenuModeType>,
    default: 'horizontal'
  },
  onSelect: {
    type: Function as PropType<(e: string) => null>
  }
} as const
export type MenuContext = {
  index: Ref<String>
  onSelect?: MenuOnSelect
}
export type MenuProps = ExtractPropTypes<typeof menuProps>
