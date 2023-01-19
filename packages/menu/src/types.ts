import { ExtractPropTypes, PropType } from 'vue'
import { EmitType } from '../../types'

export type MenuModeType = 'horizontal' | 'vertical'
export type MenuOnSelect = (e: number) => void
export interface IMenuProvide {
  index: Number
  onSelect?: MenuOnSelect
}
export const menuProps = {
  activeIndex: {
    type: Number,
    default: 0
  },
  mode: {
    type: String as PropType<MenuModeType>,
    default: 'horizontal'
  },
  onSelect: {
    type: Function as PropType<(e: number) => null>
  }
} as const

export type MenuProps = ExtractPropTypes<typeof menuProps>
