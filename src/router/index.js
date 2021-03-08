import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from "../views/Register.vue";
import Stock from "../views/Stock.vue";
import StockCreate from "../views/StockCreate.vue";
import StockEdit from "../views/StockEdit.vue";
import Report from "../views/Report.vue";
import deadline from "../views/deadline.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/stock',
    name: 'stock',
    component: Stock
  },
  // path: "/stock",
  // meta: { isSecured: true },
  // name: "stock",
  // component: Stock
  {
    path: '/deadline',
    name: 'deadline',
    component: deadline
  },
  {
    path: '/stockCreate',
    name: 'stockCreate',
    component: StockCreate
  },
  {
    path: '/stockEdit/:id',
    name: 'stockEdit',
    component: StockEdit
  },

  {
    path: '/report',
    name: 'report',
    component: Report
  },

  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '*',
    redirect: '/login', //page not found
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


