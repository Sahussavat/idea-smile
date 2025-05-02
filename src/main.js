// import './assets/main.css'
import './assets/multi_column.css'
import './assets/transition.min.css'
import './assets/loader.css'
import './assets/fonts.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App)
app.use(router).use(VueAxios, axios).mount('#app')
