<template>
  <div>
    <my-button>Default</my-button>
    <my-button type="primary">primary</my-button>
    <my-button type="success">success</my-button>
    <my-button type="info">info</my-button>
    <my-button type="warning">warning</my-button>
    <my-button type="danger">danger</my-button>
  </div>
  <div>
    <my-button plain>plain</my-button>
    <my-button plain type="primary">primary</my-button>
    <my-button plain type="success">success</my-button>
    <my-button plain type="info">info</my-button>
    <my-button plain type="warning">warning</my-button>
    <my-button plain type="danger">danger</my-button>
  </div>
  <div>
    <my-button round>round</my-button>
    <my-button round type="primary">primary</my-button>
    <my-button round type="success">success</my-button>
    <my-button round type="info">info</my-button>
    <my-button round type="warning">warning</my-button>
    <my-button round type="danger">danger</my-button>
  </div>

  <div>
    <my-button circle
      ><el-icon><Search /></el-icon
    ></my-button>
    <my-button circle
      ><el-icon><Edit /></el-icon
    ></my-button>
    <my-button circle
      ><el-icon><Check /></el-icon
    ></my-button>
    <my-button circle
      ><el-icon><Message /></el-icon
    ></my-button>
    <my-button circle
      ><el-icon><Star /></el-icon
    ></my-button>
    <my-button circle
      ><el-icon><Delete /></el-icon
    ></my-button>
  </div>

  <!-- <el-button type="primary">primary</el-button> -->
</template>

<script setup lang="ts">
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'
import myButton from '@/components/myButton/myButton.vue'
</script>

<style scoped lang="less">
div {
  margin-bottom: 10px;
  font-size: 32px;
}
</style>
