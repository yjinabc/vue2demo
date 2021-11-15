import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard';
import Timestat from '@/pages/Timestat'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },{
      path: '/timestat',
      name: 'timestat',
      component: Timestat
    }
  ]
})
