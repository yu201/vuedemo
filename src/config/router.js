import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import recommend from '@/view/home/children/recommend.vue'
import living from '@/view/home/children/living.vue'
import classify from '@/view/classify'
import Class from '@/view/classify/children/class.vue'
import brand from '@/view/classify/children/brand.vue'
import shopping from '@/view/shopping'
import user from '@/view/user'
import detail from '@/components/details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect:'/home/recommend/20'
    },
    {
      path: '/classify',
      component: classify,
      redirect:'classify/Class',
      children:[
        {
          path: '/classify/Class',
          component: Class
        },
        {
          path: '/classify/brand',
          component: brand
        }
      ]
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/user',
      component: user
    },

    {
      path: '/home',
      component: home,
      redirect:'/home/recommend/20',
      children: [
        {
          path: 'recommend/:id',
          component: recommend
        },
        {
          path: 'living/:id',
          component: living
        }
      ]
    },
    {
      path: '/detail/:ProductID',
      name: 'detail',
      component: detail
    }
  ]
})
