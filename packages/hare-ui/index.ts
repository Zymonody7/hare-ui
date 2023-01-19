import { App } from 'vue'
import Foo from '@hare-ui/foo'
import Button from '@hare-ui/button'
import Icon from '@hare-ui/icon'
import Menu from '@hare-ui/menu'
import MenuItem from '@hare-ui/menu-item'
// import component end
import '../scss/index.scss'

const components = [Foo, Button, Icon, Menu, MenuItem] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}
