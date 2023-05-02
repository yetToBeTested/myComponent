<template>
  <my-input v-model="searchData"></my-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import myInput from '@/components/myInput/MyInput.vue'
const searchData = ref({
  keyword: '',
  placeholder: '请输入你想要查询的关键字',
  options: [
    { label: '视频', value: 'video' },
    { label: '文章', value: 'article' },
    { label: '用户', value: 'user' }
  ],
  selectedValue: 'video'
})
</script>

<style scoped lang="less"></style>
