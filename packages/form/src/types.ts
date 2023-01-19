import { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { Rules } from 'async-validator'
import type { FormItemContext } from '../../form-item/src/types'
export type Layout = 'horizontal' | 'vertical'
export type LabelSize = 'sm' | 'md' | 'lg'
export type LabelAlign = 'start' | 'center' | 'end'
export const formProps = {
  model: {
    type: Object,
    require: true
  },
  layout: {
    type: String as PropType<Layout>,
    default: 'horizontal'
  },
  labelSize: {
    type: String as PropType<LabelSize>,
    default: 'md'
  },
  labelAlign: {
    type: String as PropType<LabelAlign>,
    default: 'start'
  },
  rules: {
    type: Object as PropType<Rules>
  }
} as const
export type LabelData = {
  layout: Layout
  labelSize: LabelSize
  labelAlign: LabelAlign
}
export type FormProps = ExtractPropTypes<typeof formProps>
export type FormContext = {
  model: any
  rules?: Rules
  addItem: (item: FormItemContext) => void
  removeItem: (item: FormItemContext) => void
}

export const formContextToken: InjectionKey<FormContext> =
  Symbol('formContextToken')
