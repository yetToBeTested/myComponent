<script setup lang="ts">
import myButton from './components/myButton/myButton.vue'

function handleClick(data: any) {
  console.log(data)
}
</script>

<template>
  <myButton type="">普通按钮</myButton>
  <myButton type="primary" @click="handleClick">主要按钮</myButton>
  <myButton type="info" icon="Edit">信息按钮</myButton>
  <myButton type="success">成功按钮</myButton>
  <myButton type="warning">警告按钮</myButton>
  <myButton type="danger">危险按钮</myButton>
  <br />
  <br />
  <myButton text type="">普通按钮</myButton>
  <myButton text type="primary">主要按钮</myButton>
  <myButton text type="info">信息按钮</myButton>
  <myButton text type="success">成功按钮</myButton>
  <myButton text type="warning">警告按钮</myButton>
  <myButton text type="danger">危险按钮</myButton>
  <br />
  <br />
  <myButton text outline type="">普通按钮</myButton>
  <myButton text outline type="primary">主要按钮</myButton>
  <myButton text outline type="info">信息按钮</myButton>
  <myButton text outline type="success">成功按钮</myButton>
  <myButton text outline type="warning">警告按钮</myButton>
  <myButton text outline type="danger">危险按钮</myButton>
  <br />
  <br />
  <myButton disabled type="primary">普通禁用</myButton>
  <myButton disabled text type="primary">文字禁用</myButton>
  <myButton disabled text outline type="primary">边框禁用</myButton>
  <br />
  <br />
  <myButton size="medium" type="primary">medium</myButton>
  <myButton size="small" type="primary">主要按钮</myButton>
  <myButton size="mini" type="primary">mini</myButton>
  <br />
  <br />
  <!-- <el-Button size="small" type="primary">Primary</el-Button>
  <el-Button size="mini" type="primary">Primary</el-Button> -->
</template>

<style scoped></style>
