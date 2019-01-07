import Vue from 'vue'
import Router from 'vue-router'
import Auth from './views/Auth.vue'

import Analytics from './views/Analytics.vue'
import Profile from './views/Profile.vue'
import Customers from './views/Customers.vue'
import Employees from './views/Employees.vue'
import Projects from './views/Projects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/employees',
      name: 'Employees',
      component: Employees
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
  ]
})
