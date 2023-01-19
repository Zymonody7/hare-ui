import FormItem from './src/form-item'
import { App } from 'vue'

FormItem.install = (app: App): void => {
  // 注册组件
  app.component(FormItem.name, FormItem)
}

export default FormItem
