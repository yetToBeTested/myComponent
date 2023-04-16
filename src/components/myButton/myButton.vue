<template>
  <button :class="typeColor" type="button">
    <i v-if="props.left"></i>
    <i v-else-if="props.rigt"></i>
    <span class><slot /></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
  type?: string
  left?: string
  rigt?: string
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'default',
  left: '',
  rigt: ''
})
// border bg-[#409EFF]
const colorMap = new Map()
  .set('default', 'my-button')
  .set('primary', 'my-button my-button--primary')
  .set('success', 'border bg-[#67C23A]')
  .set('info', 'border bg-[#909399]')
  .set('warning', 'border bg-[#E6A23C]')
  .set('danger', 'border bg-[#F56C6C]')

const typeColor = computed(() => colorMap.get(props.type))
</script>

<style scoped lang="less">
.my-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: var(--el-button-text-color);
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  transition: 0.1s;
  font-weight: var(--el-button-font-weight);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  // -webkit-appearance: none;
  background-color: var(--el-button-bg-color);
  border: var(--el-border);
  border-color: var(--el-button-border-color);
  padding: 8px 15px;
  font-size: var(--el-font-size-base);
  border-radius: var(--el-border-radius-base);
}
// .my-button {
//   --el-button-font-weight: var(--el-font-weight-primary);
//   --el-button-border-color: var(--el-border-color);
//   --el-button-bg-color: var(--el-fill-color-blank);
//   --el-button-text-color: var(--el-text-color-regular);
//   --el-button-disabled-text-color: var(--el-disabled-text-color);
//   --el-button-disabled-bg-color: var(--el-fill-color-blank);
//   --el-button-disabled-border-color: var(--el-border-color-light);
//   --el-button-divide-border-color: rgba(255, 255, 255, 0.5);
//   --el-button-hover-text-color: var(--el-color-primary);
//   --el-button-hover-bg-color: var(--el-color-primary-light-9);
//   --el-button-hover-border-color: var(--el-color-primary-light-7);
//   --el-button-active-text-color: var(--el-button-hover-text-color);
//   --el-button-active-border-color: var(--el-color-primary);
//   --el-button-active-bg-color: var(--el-button-hover-bg-color);
//   --el-button-outline-color: var(--el-color-primary-light-5);
//   --el-button-hover-link-text-color: var(--el-color-info);
//   --el-button-active-color: var(--el-text-color-primary);
// }
.my-button--primary {
  --el-button-text-color: var(--el-color-white);
  --el-button-bg-color: var(--el-color-primary);
  --el-button-border-color: var(--el-color-primary);
  --el-button-outline-color: var(--el-color-primary-light-5);
  --el-button-active-color: var(--el-color-primary-dark-2);
  --el-button-hover-text-color: var(--el-color-white);
  --el-button-hover-link-text-color: var(--el-color-primary-light-5);
  --el-button-hover-bg-color: var(--el-color-primary-light-3);
  --el-button-hover-border-color: var(--el-color-primary-light-3);
  --el-button-active-bg-color: var(--el-color-primary-dark-2);
  --el-button-active-border-color: var(--el-color-primary-dark-2);
  --el-button-disabled-text-color: var(--el-color-white);
  --el-button-disabled-bg-color: var(--el-color-primary-light-5);
  --el-button-disabled-border-color: var(--el-color-primary-light-5);
}
</style>
