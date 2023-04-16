<template>
  <button
    class="my-button"
    :class="[type, textOutline, text, outline, disabled, disabledText, disabledOutline, size]"
    @click="handleClick"
  >
    <el-icon v-if="icon">
      <component :is="icon" />
    </el-icon>
    <span><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: String,
  text: Boolean,
  outline: Boolean,
  disabled: Boolean,
  size: String,
  icon: String
})

const emit = defineEmits(['click'])

const type = computed(() => (props.type ? `my-button--${props.type} text-color` : ''))
const textOutline = computed(() => (props.text || props.outline ? `my-button--outline ` : ''))
const text: any = computed(() =>
  props.type && props.text && !props.outline
    ? `my-button--${props.type}--color my-button--color`
    : ''
)
const outline: any = computed(() =>
  props.type && props.outline && props.text ? `my-button--${props.type}--color` : ''
)

const disabled: any = computed(() =>
  props.disabled && props.outline && props.text ? 'my-button--disabled' : ''
)
const disabledText = computed(() =>
  props.disabled && props.text && !props.outline ? 'my-button--disabled--text' : ''
)

const disabledOutline = computed(() =>
  props.disabled && !props.text && !props.outline ? 'my-button--disabled--outline' : ''
)

const size = computed(() => {
  switch (props.size) {
    case 'medium':
      return 'my-button--medium'
    case 'small':
      return 'my-button--small'
    case 'mini':
      return 'my-button--mini'
    default:
      return 'my-button--medium'
  }
})

const icon = computed(() => props.icon ?? '')

function handleClick(evt: any) {
  emit('click', evt)
}
</script>

<style scoped lang="less">
.my-button {
  display: inline-flex;
  /* 设置宽度自适应 */
  width: auto;
  height: 35px;
  /* 将按钮左右边距调大一些显得美观 */
  padding: 0 10px;
  /* 居中 */
  text-align: center;
  justify-content: center;
  align-items: center;
  /* 边框不显示 */
  border: none;
  /* 圆角框 */
  border-radius: 3px;
  /* 盒子阴影 */
  box-shadow: 0px 0px 3px gray;
  font-family: inherit;
  /* 鼠标变为小手标识 */
  cursor: pointer;
  font-size: 14px;
}

.my-button--primary {
  background-color: rgb(74, 130, 212);
}
.my-button--info {
  background-color: rgb(163, 191, 233);
}
.my-button--success {
  background-color: rgb(92, 218, 180);
}
.my-button--warning {
  background-color: rgb(221, 219, 77);
}
.my-button--danger {
  background-color: rgb(233, 56, 56);
}
.text-color {
  color: #000;
}

.my-button--primary--color {
  color: rgb(74, 130, 212);
  border: 1px solid rgb(74, 130, 212);
}
.my-button--info--color {
  color: rgb(163, 191, 233);
  border: 1px solid rgb(163, 191, 233);
}
.my-button--success--color {
  color: rgb(92, 218, 180);
  border: 1px solid rgb(92, 218, 180);
}
.my-button--warning--color {
  color: rgb(221, 219, 77);
  border: 1px solid rgb(221, 219, 77);
}
.my-button--danger--color {
  color: rgb(233, 56, 56);
  border: 1px solid rgb(233, 56, 56);
}
.my-button--color {
  border: none;
  box-shadow: none;
}

.my-button--outline {
  background-color: #fff;
}

.my-button--disabled {
  color: gray;
  /* 鼠标变为禁用 */
  cursor: no-drop;
}
.my-button--disabled--outline {
  color: gray;
  cursor: no-drop;
  border: 1px solid gray;
}
.my-button--disabled--text {
  color: gray;
  cursor: no-drop;
  border: none;
  box-shadow: none;
}

.my-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.my-button--small {
  height: 24px;
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}

.my-button--mini {
  height: 12px;
  padding: 7px 10px;
  font-size: 12px;
  border-radius: 3px;
}
</style>
