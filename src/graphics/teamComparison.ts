import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './teamComparison/main.vue';
import 'quasar/dist/quasar.css';
import '../tailwindImport.css';

const app = createApp(App);
const head = createHead();
app.use(Quasar, {});
app.use(head);
app.mount('#app');