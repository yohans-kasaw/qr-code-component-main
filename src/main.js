import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
          light: {
            slate300: '#d6e2f0',
            slate500: '#68778d',
            slate900: '#1f3251', 
          },
        },
      },
})

createApp(App)
    .use(vuetify)
    .mount('#app')
