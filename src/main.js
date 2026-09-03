import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Font Awesome
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import '@fortawesome/fontawesome-free/js/fontawesome.js';

createApp(App).use(router).mount('#app');
