import Form from './src/form'
import { App } from 'vue'

Form.install = (app: App): void => {
  // 注册组件
  app.component(Form.name, Form)
}

export default Form
