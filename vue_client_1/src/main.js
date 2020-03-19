import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue'
Vue.config.productionTip = false
const Login = {
  template: '<div> Click to log in. </div>',
}

const route = new VueRouter( {
  routes: [
    { path: '/login', component: Login}
  ]
})
new Vue({
  render: h => h(App),
  router: route
}).$mount('#app')

