import Input from './src/input'
import { App } from 'vue'

Input.install = (app: App): void => {
  // 注册组件
  app.component(Input.name, Input)
}

export default Input
