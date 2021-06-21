import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js';
import './assets/css/App.css';

createApp(App).use(store).mount('#app')
