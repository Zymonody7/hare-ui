import Menu from './src/menu'
import { App } from 'vue'

Menu.install = (app: App): void => {
  // 注册组件
  app.component(Menu.name, Menu)
}

export default Menu
