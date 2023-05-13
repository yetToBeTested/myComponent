<template>
  <el-input v-model="model1.keyword" :placeholder="modelValue.placeholder">
    <template #prepend>
      <el-select v-model="model1.selectedValue" placeholder="Select" style="width: 85px">
        <el-option
          v-for="item in modelValue.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </template>
    <template #append>
      <el-button :icon="Search" />
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { computed, type PropType } from 'vue'

interface searchData {
  keyword: ''
  placeholder: '请输入你想要查询的关键字'
  options: [
    { label: '视频'; value: 'video' },
    { label: '文章'; value: 'article' },
    { label: '用户'; value: 'user' }
  ]
  selectedValue: 'video'
}
const props = defineProps({
  modelValue: {
    type: Object as PropType<searchData>,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

// function handleKeywordChange(value: any) {
//   emit('update:modelValue', { ...props.modelValue, keyword: value })
// }
// function handleSelectChange(value: any) {
//   emit('update:modelValue', { ...props.modelValue, selectedValue: value })
// }

// const keyword = computed({
//   get() {
//     return props.modelValue.keyword
//   },
//   set(val) {
//     emit('update:modelValue', { ...props.modelValue, keyword: val })
//   }
// })
// const selectedValue = computed({
//   get() {
//     return props.modelValue.selectedValue
//   },
//   set(val) {
//     emit('update:modelValue', { ...props.modelValue, selectedValue: val })
//   }
// })

const model1 = computed({
  get() {
    return new Proxy(props.modelValue, {
      // get(obj, name: any) {
      //   console.log('get', obj[name])
      //   return obj[name]
      // },
      set(obj, name, val) {
        console.log('emit', val)
        emit('update:modelValue', { ...obj, [name]: val })
        return true
      }
    })
  },
  set() {}
})
</script>

<style scoped lang="less">
.searcher {
  color: red;
}
</style>
