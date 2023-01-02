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

// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faCartShopping,
    faCartPlus,
    faX,
    faTrash,
    faPlus,
    faMinus,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCartShopping, faCartPlus, faX, faTrash, faPlus, faMinus);

import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.use(i18n);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
