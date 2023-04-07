import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PerfectScrollbar from 'vue3-perfect-scrollbar'

import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import './assets/css/main.css'

const app = createApp(App)

app.use(router)
app.use(PerfectScrollbar, {
  options: {
    suppressScrollX: true
  }
})

app.mount('#app')
