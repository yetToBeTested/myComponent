import type { AppContext } from 'vue'
import _message from './src/MessageList.vue'
import { getComponentsPrefix } from './utils/config'
import MessageManager from './src/Instance'
import type { MessageConfig, MessageType } from './src/type'
import { isString } from './utils/util'

_message.name = getComponentsPrefix() + _message.name
// console.log(_message.name)

let msg: MessageManager
const types = ['text', 'success', 'warning', 'error', 'loading'] as const

const message = types.reduce((pre, value) => {
  pre[value] = (config: string | MessageConfig, appContext?: AppContext) => {
    // 直接传入消息提示内容的情况
    if (isString(config)) {
      config = { content: config as string }
    }

    const _config: MessageConfig = { type: value as MessageType, ...(config as MessageConfig) }

    if (!msg) {
      msg = new MessageManager(appContext)
    }
    const res = msg!.add(_config as MessageConfig)

    return res
  }
  return pre
}, {} as any)
console.log(message, message.text, 'mes')
const Message = Object.assign({
  ...message
  // install: (app: App) => {
  //   console.log('zhix')
  //   app.component(_message.name, _message)
  // }
})

export default Message
