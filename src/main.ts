import { createSSRApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createSSRRouter } from "./router";
import "element-plus/dist/index.css";
import { createSSRI18n } from "./language/i18n";
import ElementPlus, { ElMessage } from "element-plus";
// import Tracker from "ls-tracker";
import { store } from "@/store/index";

// const tr = new Tracker({
//   requestUrl: "http://localhost:9000/api/tracker",
//   historyTracker: true,
//   jsError: true,
// });
export function createApp() {
  const app = createSSRApp(App);
  const router = createSSRRouter();
  const i18n = createSSRI18n();
  app.config.globalProperties.$message = ElMessage;
  app.use(router);
  app.use(store);
  app.use(i18n);
  app.use(ElementPlus);
  return { app, router, store };
}
