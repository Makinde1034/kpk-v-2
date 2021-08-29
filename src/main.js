import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import Toaster from "@meforma/vue-toaster";

createApp(App).use(router).use(store).use(Toaster).mount('#app');
