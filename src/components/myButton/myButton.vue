<template>
  <button
    class="my-button"
    :class="[type, plain, round, circle, disabled]"
    type="button"
    ref="btn"
    :disabled="props.disabled"
  >
    <!-- <i class="el-icon-loading" v-if="loading"></i>
    <el-icon v-else-if="icon">
      <component :is="icon" />
    </el-icon> -->
    <!-- <i class="el-icon-loading" v-if="loading"></i> -->
    <!-- <i :class="icon" v-if="icon && !loading"></i> -->
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <el-icon v-else :class="loading">
        <component :is="loadingIcon" />
      </el-icon>
    </template>
    <el-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </el-icon>
    <span><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const btn = ref()
const props = defineProps({
  type: String,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  icon: String,
  loading: Boolean,
  loadingIcon: String,
  outline: Boolean,
  disabled: Boolean,
  size: String
})

// const emit = defineEmits(['click'])

const type: any = computed(() => (props.type ? `my-button--${props.type}` : ''))
const plain: any = computed(() => (props.plain ? 'plain' : ''))
const round: any = computed(() => (props.round ? 'round' : ''))
const circle: any = computed(() => (props.circle ? 'circle' : ''))
const loading: any = computed(() => (props.loading ? 'loading' : ''))
const loadingIcon: any = computed(() => (props.loadingIcon ? props.loadingIcon : 'Loading'))
const disabled: any = computed(() => (props.disabled ? 'disabled' : ''))
console.log(props.icon, props.loadingIcon)
</script>

<style scoped lang="less">
.my-button {
  display: inline-flex;
  line-height: 1px;
  vertical-align: middle;
  // box-sizing: border-box;
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
  color: var(--el-button-text-color);
  background-color: var(--el-button-bg-color);
  border: var(--el-border);
  border-color: var(--el-button-border-color);
  padding: 8px 15px;
  font-size: var(--el-font-size-base);
  border-radius: var(--el-border-radius-base);
  box-sizing: border-box;
  font-size: var(--el-font-size-base);
  span {
    display: inline-flex;
    align-items: center;
  }
}
.my-button {
  --el-button-font-weight: var(--el-font-weight-primary);
  --el-button-border-color: var(--el-border-color);
  --el-button-bg-color: var(--el-fill-color-blank);
  --el-button-text-color: var(--el-text-color-regular);
  --el-button-disabled-text-color: var(--el-disabled-text-color);
  --el-button-disabled-bg-color: var(--el-fill-color-blank);
  --el-button-disabled-border-color: var(--el-border-color-light);
  --el-button-divide-border-color: rgba(255, 255, 255, 0.5);
  --el-button-hover-text-color: var(--el-color-primary);
  --el-button-hover-bg-color: var(--el-color-primary-light-9);
  --el-button-hover-border-color: var(--el-color-primary-light-7);
  --el-button-active-text-color: var(--el-button-hover-text-color);
  --el-button-active-border-color: var(--el-color-primary);
  --el-button-active-bg-color: var(--el-button-hover-bg-color);
  --el-button-outline-color: var(--el-color-primary-light-5);
  --el-button-hover-link-text-color: var(--el-color-info);
  --el-button-active-color: var(--el-text-color-primary);
}
.my-button.plain {
  // color: #409eff;
  background-color: #fff;
}

.my-button.round {
  border-radius: 20px;
  padding: 8px 15px;
}
.my-button.circle {
  border-radius: 50%;
  padding: 8px;
}
.my-button.disabled {
  color: var(--el-button-disabled-text-color);
  background-color: var(--el-button-disabled-bg-color);
  border-color: var(--el-button-disabled-border-color);
  /* 鼠标变为禁用 */
  cursor: no-drop;
}
.my-button + .my-button {
  margin-left: 12px;
}

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
.my-button--primary.plain {
  color: #409eff;
  background-color: #ecf5ff;
}
.my-button--info {
  color: #fff;
  background-color: rgb(163, 191, 233);
}
.my-button--info.plain {
  color: #909399;
  background-color: #f4f4f5;
}
.my-button--success {
  color: #fff;
  background-color: rgb(92, 218, 180);
}
.my-button--success.plain {
  color: #67c23a;
  background-color: #f0f9eb;
}
.my-button--warning {
  color: #fff;
  background-color: rgb(221, 219, 77);
}
.my-button--warning.plain {
  color: #e6a23c;
  background-color: #fdf6ec;
}
.my-button--danger {
  color: #fff;
  background-color: rgb(233, 56, 56);
}
.my-button--danger.plain {
  color: #f56c6c;
  background-color: #fef0f0;
}

.el-icon.loading {
  animation: rotating 2s linear infinite;
}
</style>
