import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import vuetify from './plugins/vuetify'
import 'toastr/build/toastr.min.css'
import 'toastr/build/toastr.min.js'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')