import { ExtractPropTypes } from 'vue'

export const colProps = {
} as const

export type ColProps = ExtractPropTypes<typeof colProps>
