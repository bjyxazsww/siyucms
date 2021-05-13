import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    redirect:'/index',
    component: () => import('@/views/Main.vue'),
    children:[
      {
        path: '/index',
        name: '',
        component: () => import('@/views/Index.vue'),
      },
      {
        path: '/admin/system',
        name: '',
        component: () => import('@/views/System/system.vue'),
      },
      {
        path: '/admin/dictionary',
        name: '',
        component: () => import('@/views/System/dictionary.vue'),
      },
      {
        path: '/admin/dictionaryType',
        name: '',
        component: () => import('@/views/System/dictionaryType.vue'),
      },
      {
        path: '/admin/emali',
        name: '',
        component: () => import('@/views/System/email.vue'),
      },
      {
        path: '/admin/sms',
        name: '',
        component: () => import('@/views/System/sms.vue'),
      },
      {
        path: '/admin/template',
        name: '',
        component: () => import('@/views/System/template.vue'),
      },
      {
        path: '/admin/plugin',
        name: '',
        component: () => import('@/views/System/plugin.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
