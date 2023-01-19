import { ExtractPropTypes } from 'vue'

export const alertProps = {
} as const

export type AlertProps = ExtractPropTypes<typeof alertProps>
