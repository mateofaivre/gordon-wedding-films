import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueAware from 'vue-aware';
import VueLazyload from 'vue-lazyload'
import VueLazyLoadVideo from 'vue-lazyload-video'

Vue.use(VueAware);
Vue.use(VueLazyload)
Vue.use(VueLazyLoadVideo)


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
