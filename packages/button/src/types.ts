import { ExtractPropTypes, PropType } from 'vue'
import { EmitType } from '../../types'
export type IButtonType = 'primary' | 'default' | 'text' | 'error'
export type IButtonSize = 'small' | 'medium' | 'large'

// button中的props定义

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'default'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'button'
  },
  loading: {
    type: Boolean,
    default: false
  },
  attrType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button'
  },
  onClick: {
    type: [Function, Array] as PropType<EmitType<(e: MouseEvent) => void>>
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
