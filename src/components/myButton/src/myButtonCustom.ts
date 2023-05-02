import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import { useNamespace } from '@/hooks'
import type { ButtonProps } from './button'

export function darken(color: TinyColor, amount = 20) {
  return color.mix('#141414', amount).toString()
}
export function useButtonCustomStyle(props: ButtonProps) {
  const ns = useNamespace('button')
  return computed(() => {
    let styles: Record<string, string> = {}
    const buttonColor = props.color
    console.log(props.color)

    if (buttonColor) {
      const color = new TinyColor(buttonColor)
      const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20)
      if (props.plain) {
        styles = ns.cssVarBlock({
          'bg-color': props.dark ? darken(color, 90) : color.tint(90).toString(),
          'text-color': buttonColor,
          'border-color': props.dark ? darken(color, 50) : color.tint(50).toString(),
          'hover-text-color': `var(${ns.cssVarName('color-white')})`,
          'hover-bg-color': buttonColor,
          'hover-border-color': buttonColor,
          'active-bg-color': activeBgColor,
          'active-text-color': `var(${ns.cssVarName('color-white')})`,
          'active-border-color': activeBgColor
        })
      }
    }
    return styles
  })
}
