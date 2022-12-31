import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';

// Setup vueI18n
import { createI18n } from 'vue-i18n';
import localeES from './locale/es.json';

const i18n = createI18n({
    locale: 'es',
    messages: {
        es: localeES,
    },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(i18n);

app.mount('#app');
