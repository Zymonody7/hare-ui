import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { EnhanceAppContext } from 'vitepress'
import HareUI from '@hare-ui/hare-ui'
import './iconfont.scss'
export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(HareUI)
    ctx.app.component('demo-preview', AntDesignContainer)
  }
}
