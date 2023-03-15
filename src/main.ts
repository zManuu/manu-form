import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as iconDir from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

// @ts-expect-error
library.add(['ArrowLeft', 'ArrowRight', 'Check', 'Calendar', 'RotateLeft'].map(e => iconDir['fa' + e]))

createApp(App)
    .component('icon', FontAwesomeIcon)
    .use(FloatingVue)
    .mount('#app')
