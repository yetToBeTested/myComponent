import type { ExtractPropTypes } from 'vue'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  /**
   * @deprecated
   * Text type will be deprecated in the next major version (3.0.0)
   */
  'text',
  ''
] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const

export const buttonProps = {
  size: String,
  type: {
    type: String,
    values: buttonTypes,
    default: ''
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: 'button'
  },
  loading: Boolean,
  tag: {
    default: 'button'
  },
  color: String,
  dark: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: undefined
  }
}

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type ButtonEmits = typeof buttonEmits

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonType = ButtonProps['type']
export type ButtonNativeType = ButtonProps['nativeType']
