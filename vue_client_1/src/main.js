import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import HelloWorld from './components/HelloWorld.vue'
Vue.use(VueRouter)

const route = new VueRouter( {
  routes: [
    { path: '/login', component: Login},
    { path: '/', component: HelloWorld}

  ]
})
new Vue({
  render: h => h(App),
  router: route
}).$mount('#app')

