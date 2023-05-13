<!-- <template>
  <div class="test" id="test">
    <h2>{{ num }}</h2>
  </div>
</template>

<script setup lang="ts">
import { createVNode, onMounted, ref, render } from 'vue'
let num = ref(0)
const changeNum = () => {
  num.value++
  console.log(num.value)
}
onMounted(() => {
  const mask = document.createElement('div')
  const div1 = document.getElementById('test')
  //   console.log(div1)
  render(vm, mask)
  div1?.appendChild(mask)
})

// mask.setAttribute('class', `bp-mask-message`)
// this.container = mask
const vm = createVNode(
  // 1. 要渲染的标签名称：第一个参数【必需】
  'button',
  // 2. 渲染标签的属性：第二个参数【可选】
  {
    style: {
      color: '#333',
      border: '1px solid #ccc'
    },
    class: '',
    id: '',
    onClick: changeNum,
    p: num.value
  },
  // 3. 渲染标签的子元素数组：第三个参数【可选】
  num.value
)

// div1.appendChild(mask)
// document.body.appendChild(mask)
</script>

<style scoped lang="less">
.test {
  color: red;
}
</style> -->

<template>
  <div class="test">
    <h2 style="white-space: pre-line">{{ str }}</h2>
  </div>
</template>

<script setup lang="ts">
let str = 'test\nvue'
</script>

<style scoped lang="less">
.test {
  color: red;
}
h2 {
  white-space: pre-line;
}
</style>
