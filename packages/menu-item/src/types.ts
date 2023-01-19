import { ExtractPropTypes } from 'vue'

export const menuItemProps = {
  index: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>
