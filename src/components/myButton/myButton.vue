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

// const textOutline = computed(() => (props.text || props.outline ? `my-button--outline ` : ''))
// const text: any = computed(() => {
//   if (props.outline || !props.text) {
//     return ''
//   } else {
//     return (props.type ? `my-button--${props.type}--color ` : '') + 'my-button--color'
//   }
// })
// const outline: any = computed(() =>
//   props.type && props.outline && props.text ? `my-button--${props.type}--color` : ''
// )

// const disabled: any = computed(() =>
//   props.disabled && props.outline && props.text ? 'my-button--disabled' : ''
// )
// const disabledText = computed(() =>
//   props.disabled && props.text && !props.outline ? 'my-button--disabled--text' : ''
// )

// const disabledOutline = computed(() =>
//   props.disabled && !props.text && !props.outline ? 'my-button--disabled--outline' : ''
// )

// const size = computed(() => {
//   switch (props.size) {
//     case 'large':
//       return 'my-button--large'
//     case 'small':
//       return 'my-button--small'
//     default:
//       return ''
//   }
// })

// const icon = computed(() => props.icon ?? '')

// function handleClick(evt: any) {
//   emit('click', evt)
// }
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
  color: #606266;
  box-sizing: border-box;
  font-size: 14px;
  span {
    display: inline-flex;
    align-items: center;
  }
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
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
  /* 鼠标变为禁用 */
  cursor: no-drop;
}
.my-button + .my-button {
  margin-left: 12px;
}

.my-button--primary {
  color: #fff;
  background-color: #409eff;
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

// .my-button--primary {
//   background-color: #409eff;
// }
// .my-button--info {
//   background-color: rgb(163, 191, 233);
// }
// .my-button--success {
//   background-color: rgb(92, 218, 180);
// }
// .my-button--warning {
//   background-color: rgb(221, 219, 77);
// }
// .my-button--danger {
//   background-color: rgb(233, 56, 56);
// }
// .text-color {
//   color: #fff;
// }

// .my-button--primary--color {
//   color: #409eff;
//   border: 1px solid rgb(74, 130, 212);
// }
// .my-button--info--color {
//   color: rgb(163, 191, 233);
//   border: 1px solid rgb(163, 191, 233);
// }
// .my-button--success--color {
//   color: rgb(92, 218, 180);
//   border: 1px solid rgb(92, 218, 180);
// }
// .my-button--warning--color {
//   color: rgb(221, 219, 77);
//   border: 1px solid rgb(221, 219, 77);
// }
// .my-button--danger--color {
//   color: rgb(233, 56, 56);
//   border: 1px solid rgb(233, 56, 56);
// }
// .my-button--color {
//   border: none;
//   box-shadow: none;
// }

// .my-button--outline {
//   background-color: #fff;
// }

// .my-button--disabled {
//   color: #fff;
//   background-color: #a0cfff;
//   border-color: #a0cfff;
//   /* 鼠标变为禁用 */
//   cursor: no-drop;
// }
// .my-button--disabled--outline {
//   color: gray;
//   cursor: no-drop;
//   border: 1px solid gray;
// }
// .my-button--disabled--text {
//   color: #a0cfff;
//   // background-color: #a0cfff;
//   // border-color: #a0cfff;
//   cursor: no-drop;
//   border: none;
//   box-shadow: none;
// }

// .my-button--large {
//   height: 40px;
//   padding: 10px 20px;
//   font-size: 14px;
//   border-radius: 4px;
// }

// .my-button--small {
//   height: 24px;
//   padding: 5px 12px;
//   font-size: 12px;
//   border-radius: 3px;
// }
</style>
