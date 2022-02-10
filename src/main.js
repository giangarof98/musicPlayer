import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VeeValidate from './includes/validation'
import './assets/main.css'
import './assets/tailwind.css'

let app = createApp(App)
app.use(store)
app.use(router)
app.use(VeeValidate)
app.mount('#app')

