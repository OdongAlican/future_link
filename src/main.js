import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import Customers from './components/Customers'
import Invoices from './components/Invoices/Invoices'
import Products from './components/Products/Products'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Customers },
    { path: '/customer/:id/invoices', component: Invoices },
    { path: '/products', component: Products },
  ],
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
