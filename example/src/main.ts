import { createApp } from 'vue'
import App from './App.vue'
import HareUI from '@hare-ui/hare-ui'
const env = import.meta.env
console.log(env)
createApp(App).use(HareUI).mount('#app')
