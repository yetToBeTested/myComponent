<template>
  <component :is="tag" :class="[ns.b()]" :style="buttonStyle"></component>
</template>

<script setup lang="ts">
import { buttonProps, buttonEmits } from './button'
import { useButtonCustomStyle } from './myButtonCustom'
import '@/theme-chalk/button.scss'
import { useNamespace } from '@/hooks'
import { useButton } from './use-button'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
console.log(props.color, 819)
const buttonStyle = useButtonCustomStyle(props)
const ns = useNamespace('button')
// const { _ref, _size, _type, _disabled, _props, shouldAddSpace, handleClick } =
//   useButton(props, emit)
console.log(buttonStyle.value)
</script>

<!-- <style scoped lang="less">
@import './style/base.less';
</style> -->
