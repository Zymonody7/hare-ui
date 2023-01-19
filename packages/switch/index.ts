import Switch from './src/switch'
import { App } from 'vue'

Switch.install = (app: App): void => {
  // 注册组件
  app.component(Switch.name, Switch)
}

export default Switch
