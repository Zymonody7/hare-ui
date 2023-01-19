import MenuItem from './src/menu-item'
import { App } from 'vue'

MenuItem.install = (app: App): void => {
  // 注册组件
  app.component(MenuItem.name, MenuItem)
}

export default MenuItem
