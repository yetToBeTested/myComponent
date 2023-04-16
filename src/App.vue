<script setup lang="ts">
import myButton from './components/myButton/myButton.vue'

// const searchData = ref({
//   keyword: '',
//   placeholder: '请输入你想要查询的关键字',
//   options: [
//     { label: '视频', value: 'video' },
//     { label: '文章', value: 'article' },
//     { label: '用户', value: 'user' }
//   ],
//   selectedValue: 'video'
// })

// console.log(searchData.value.keyword)
</script>

<template>
  <!-- <searcher-bar v-model="searchData" />
  <div>{{ searchData.selectedValue }} - {{ searchData.keyword }}</div> -->
  <myButton type="primary">Primary</myButton>
  <el-Button type="primary">Primary</el-Button>
</template>

<style scoped></style>
