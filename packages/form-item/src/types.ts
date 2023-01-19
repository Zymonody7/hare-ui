import { ExtractPropTypes } from 'vue'
import { Layout } from '../../form/src/types'
export const formItemProps = {
  label: {
    type: String
  }
} as const

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
