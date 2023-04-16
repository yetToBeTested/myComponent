<template>
  <el-input v-model="modelValue.keyword" :placeholder="modelValue.placeholder" style="width: 500px">
    <template #prepend>
      <el-select v-model="modelValue.selectedValue" placeholder="Select" style="width: 85px">
        <el-option
          v-for="item in modelValue.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </template>
    <template #append>
      <el-button type="primary" icon="Search" />
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
interface Iprops {
  modelValue: {
    keyword: string
    placeholder: string
    options: {
      label: string
      value: string
    }[]
    selectedValue: string
  }
}
const prop = defineProps<Iprops>()
const { modelValue } = toRefs(prop)

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: true
//   }
// })
// const emit = defineEmits(['update:modelValue'])

// function handleKeywordChange(value: any) {
//   emit('update:modelValue', { ...props.modelValue, keyword: value })
// }
</script>

<style scoped lang="less">
.searcher {
  color: red;
}
</style>
