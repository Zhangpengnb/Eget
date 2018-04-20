import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Hmoe/Home.vue'
import Category from '../pages/Category/Category.vue'
import User from '../pages/User/User.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Classify from '../components/Classify/Classify.vue'
import Brand from '../components/Brand/Brand.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/category',
      component: Category,
      children:[
        {
          path: 'classify',
          component: Classify
        },
        {
          path: 'brand',
          component: Brand
        }
      ]
    },
    {
      path: '/shopping',
      component: Shopping
    }
  ]
})
