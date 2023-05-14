<template>
  <div class="small-window">
    <div class="upper-tip">
      <span>{{ title }}</span>
    </div>
    <div class="message-content">
      {{ message }}
    </div>
    <div class="button-area">
      <div class="my-button" style="background-color: #11a9ea" @click="handleSubmitBtn">
        {{ submitText }}
      </div>
      <div class="my-button" style="background-color: #cecece" @click="handleCancelBtn">
        {{ cancelText }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string
  message: string
  submitText: string
  cancelText: string
  // cancelCallBack: () => void
  // submitCallBack: () => void
}
withDefaults(defineProps<IProps>(), {
  title: '"提示'
})
const emits = defineEmits(['cancelCallBack', 'submitCallBack'])
const handleSubmitBtn = () => {
  emits('submitCallBack')
}
const handleCancelBtn = () => {
  emits('cancelCallBack')
}
</script>

<style scoped lang="less">
.small-window {
  position: absolute;
  width: 500px;
  height: 350px;
  background-color: white;
  border: 1px solid rgba(169, 169, 169, 0.92);
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  .upper-tip {
    font-size: 18px;
    height: 45px;
    width: 100%;
    font-weight: 700;
  }
  .message-content {
    width: calc(100% - 40px);
    padding: 15px 20px 15px 20px;
    height: 150px;
    text-indent: 32px;
    display: flex;
    justify-content: center;
    font-size: 16px;
  }
  .button-area {
    display: flex;
    justify-content: end;
    width: calc(100% - 40px);
    padding: 15px 20px 15px 20px;

    .my-button {
      width: 68px;
      margin-left: 20px;
      height: 50px;
      cursor: pointer;
    }
  }
}
</style>
