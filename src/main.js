import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import Form from './pages/Form.vue';
import Previous from './pages/Previous.vue';

const app = createApp(App);
const routes = [
  { path: '/', name: 'Form', component: Form },
  { path: '/Previous', name: 'Previous', component: Previous }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(router);
app.use(autoAnimatePlugin);
app.mount('#app');
