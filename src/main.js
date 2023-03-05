import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import mitt from 'mitt';
const emitter = mitt();

import './assets/css/main.css'

const app = createApp(App)

app.config.globalProperties.emitter = emitter
app.config.globalProperties.axios = axios;
app.use(router).mount('#app')