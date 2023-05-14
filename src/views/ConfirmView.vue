<template>
  <div class="myConfirm">
    <button @click="openMyConfirm">12313213</button>
  </div>
</template>

<script setup lang="ts">
import myConfirm from '@/components/myConfirm'
const openMyConfirm = () => {
  myConfirm({ title: '提示', message: '你好呀', submitText: '你好', cancelText: '我不好' })
    .then(() => {
      console.log('点击确认事件处理')
    })
    .catch(() => {
      console.log('点击取消事件处理')
    })
}
</script>

<style scoped lang="less">
.myConfirm {
  color: red;
}
</style>
