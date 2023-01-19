import { ExtractPropTypes } from 'vue'

export const switchProps = {
} as const

export type SwitchProps = ExtractPropTypes<typeof switchProps>
