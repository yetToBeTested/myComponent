<template>
  <TransitionGroup class="bp-message-list" name="fademsg" tag="ul">
    <template v-for="v in list" :key="v.id">
      <message
        :id="v.id"
        :type="v.type"
        :content="v.content"
        :duration="v.duration"
        :closeable="v.closeable"
        @close="onClose"
      ></message>
    </template>
  </TransitionGroup>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { MessageItem } from './type'
import message from './Message.vue'

const props = defineProps({
  list: { type: Array as PropType<MessageItem[]>, default: () => [] }
})

console.log(props)

const emits = defineEmits<{
  (e: 'close', id: string | number): void
}>()

const onClose = (id: string | number) => emits('close', id)
</script>

<!-- <style scoped lang="less">
.message {
  color: red;
}
</style> -->
