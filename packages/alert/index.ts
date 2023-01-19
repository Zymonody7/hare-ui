import Alert from './src/alert'
import { App } from 'vue'

Alert.install = (app: App): void => {
  // 注册组件
  app.component(Alert.name, Alert)
}

export default Alert
