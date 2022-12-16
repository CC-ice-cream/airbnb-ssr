import { createSSRApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import i18n from './language/i18n'
import ElementPlus, { ElMessage } from 'element-plus'
import Tracker from 'ls-tracker'


const tr = new Tracker({
  requestUrl:"http://localhost:9000/api/tracker",
  historyTracker: true,
  jsError:true
})
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.$message = ElMessage
  app.use(router)
  app.use(i18n)
  app.use(ElementPlus)
  return {app, router}
}