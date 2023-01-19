import { ExtractPropTypes } from 'vue'
import { Value } from 'async-validator'
import { Layout } from '../../form/src/types'
export const formItemProps = {
  label: {
    type: String
  },
  field: {
    type: String
  }
} as const
export type FormItemContext = {
  validate: () => Promise<Value>
}
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
