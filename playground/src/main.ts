import { type App, createApp } from 'vue';
import AppPage from './App.vue';
import { setupApp } from './setup';

createApp(AppPage).use(setupApp).mount('#app');
