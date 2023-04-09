import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PerfectScrollbar from 'vue3-perfect-scrollbar'

import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import './assets/css/main.css'

import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const app = createApp(App)

app.use(router)
app.use(hljsVuePlugin)
app.use(PerfectScrollbar, {
  options: {
    suppressScrollX: true
  }
})

app.mount('#app')
