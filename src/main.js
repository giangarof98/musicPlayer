import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VeeValidate from './includes/validation'
import './assets/main.css'
import './assets/tailwind.css'
import {auth} from './includes/firebase'

let app;

auth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App)
        app.use(store)
        app.use(router)
        app.use(VeeValidate)
        app.mount('#app')

    }

})


