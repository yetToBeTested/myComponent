<template>
  <div>
    <span><button @click="fn('text')">text</button></span>
    <span><button @click="fn('success')">success</button></span>
    <span><button @click="fn1('error')">error</button></span>
    <span><button @click="fn('warning')">warning</button></span>
    <span><button @click="fn('loading')">loading</button></span>
  </div>
</template>

<script setup lang="ts">
import Message from '@/components/myMessage'
import '../components/myMessage/src/Message.scss'
import 'remixicon/fonts/remixicon.css'
const fn = (arr: string) => {
  Message[arr](`this is a ${arr}`)
}
const fn1 = (arr: string) => {
  Message.error({
    content: `this is a ${arr}`,
    duration: 3000,
    close: true
  })
}
</script>

<!-- <style scoped lang="less">
.message {
  color: red;
}
</style> -->
