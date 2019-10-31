import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import * as VueGoogleMaps from '../node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: `${process.env.VUE_APP_GOOG_KEY}`,
    libraries: "places" // necessary for places input
  }
})

Vue.config.productionTip = false

new Vue({
  mounted() {
    console.log("<3");
  },
  render: h => h(App),
}).$mount('#app')
