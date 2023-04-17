<script setup lang="ts">
import myButton from './components/myButton/myButton.vue'

function handleClick(data: any) {
  console.log(data)
}
</script>

<template>
  <myButton>普通按钮</myButton>
  <myButton type="primary" @click="handleClick">主要按钮</myButton>
  <myButton type="info">信息按钮</myButton>
  <myButton type="success">成功按钮</myButton>
  <myButton type="warning">警告按钮</myButton>
  <myButton type="danger">危险按钮</myButton>
  <br />
  <br />
  <myButton plain>plain</myButton>
  <myButton plain type="primary">主要按钮</myButton>
  <myButton plain type="info">信息按钮</myButton>
  <myButton plain type="success">成功按钮</myButton>
  <myButton plain type="warning">警告按钮</myButton>
  <myButton plain type="danger">危险按钮</myButton>
  <br />
  <br />
  <myButton round>round</myButton>
  <myButton round type="primary">主要按钮</myButton>
  <myButton round type="info">信息按钮</myButton>
  <myButton round type="success">成功按钮</myButton>
  <myButton round type="warning">警告按钮</myButton>
  <myButton round type="danger">危险按钮</myButton>
  <br />
  <br />

  <myButton>普通按钮</myButton>
  <myButton icon="Edit" type="primary" @click="handleClick"
    >主要按钮<el-icon class="el-icon--right"><Upload /></el-icon
  ></myButton>
  <myButton type="info">信息按钮</myButton>
  <myButton type="success">成功按钮</myButton>
  <myButton type="warning">警告按钮</myButton>
  <myButton type="danger">危险按钮</myButton>
  <!-- <myButton text outline type="">普通按钮</myButton>
  <myButton text outline type="primary">主要按钮</myButton>
  <myButton text outline type="info">信息按钮</myButton>
  <myButton text outline type="success">成功按钮</myButton>
  <myButton text outline type="warning">警告按钮</myButton>
  <myButton text outline type="danger">危险按钮</myButton> -->
  <br />
  <br />
  <!-- <myButton disabled type="primary">普通禁用</myButton>
  <myButton disabled text type="primary">文字禁用</myButton>
  <myButton disabled text outline type="primary">边框禁用</myButton> -->
  <br />
  <br />
  <!-- <myButton size="large" type="primary">large</myButton>
  <myButton size="small" type="primary">small</myButton>
  <myButton type="primary">正常</myButton> -->

  <br />
  <br />
  <!-- <myButton icon="Edit" type="primary"></myButton>
  <myButton type="primary">主要按钮</myButton>
  <myButton type="primary">mini</myButton> -->

  <br />
  <br />
  <el-Button round circle>Primary</el-Button>
  <el-Button round circle type="primary">Primary</el-Button>
  <el-Button plain type="success">success</el-Button>
  <el-Button plain loading type="info">info</el-Button>
  <el-Button plain type="warning">warning</el-Button>
  <el-Button plain type="danger">danger</el-Button>
</template>

<style scoped></style>
