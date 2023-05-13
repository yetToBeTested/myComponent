<template>
  <div class="home">
    <router-link to="/button"> button</router-link>
    <router-link to="/input"> input</router-link>
    <router-link to="/message"> message</router-link>
    <router-link to="/test"> test</router-link>
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped lang="less">
@homeHeight: 30px;
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  height: @homeHeight;

  a {
    color: #fff;
    flex: 1;
    height: @homeHeight;
    text-align: center;
    line-height: @homeHeight;
  }
}
.main {
  margin-top: 1px;
  background-color: #333333;
  height: 100vh;
}
</style>
