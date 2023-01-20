import { ExtractPropTypes } from 'vue'
export type { MenuContext } from '../../menu/src/types'
export type MenuOnSelect = (e: string) => void
export const menuItemProps = {
  index: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>
