import { ExtractPropTypes, PropType } from 'vue'
import { EmitType } from '../../types'

export type MenuModeType = 'horizontal' | 'vertical'
export type MenuOnSelect = (e: number) => void
interface MenuProject {
  index: Number
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
    type: [Function, Array] as PropType<EmitType<MenuOnSelect>>
  }
} as const

export type MenuProps = ExtractPropTypes<typeof menuProps>
