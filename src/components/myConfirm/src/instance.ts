import { createVNode, render } from 'vue'
import Confirm from './myConfirm.vue'

export default ({ title, message, submitText, cancelText }: any) => {
  const mask = document.createElement('div')
  mask.setAttribute(
    'style',
    'position: fixed; top:0; background-color: rgba(0, 0, 0, 0.5); width: 100vw; height: 100%; display: flex; justify-content: center; align-items: center'
  )
  mask.setAttribute('key', Date.now().toString())
  document.body.appendChild(mask)

  return new Promise((reslove, reject) => {
    console.log('instance-promise')
    // 封装组件属性方法
    const submitCallBack = () => {
      console.log(456)
      //调用完毕后应该清空节点
      render(null, mask)
      mask.remove()
      reslove(true)
    }

    // 封装组件属性方法
    const cancelCallBack = () => {
      console.log(456)
      //清空节点
      render(null, mask)
      mask.remove()
      reject()
    }

    // 在此处才创建节点并挂载属性
    const VNode = createVNode(Confirm, {
      title,
      message,
      submitText,
      cancelText,
      onCancelCallBack: cancelCallBack,
      onSubmitCallBack: submitCallBack
    })
    render(VNode, mask)
  })
}
