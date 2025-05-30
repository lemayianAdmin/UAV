
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


const vuetify = createVuetify({
    components,
    directives,
})



createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app');


  const createVueApp = async () => {


    const app = createApp(App);

    app.use(router);


    const vuetify = createVuetify({
        components,
        directives,
    })

    app.use(vuetify);



    app.mount('#app');
};

createVueApp();

export default router;
