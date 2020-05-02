import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Counter'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chat',
      component: Chat
    },
    {
      path: '/contador',
      name: 'contador',
      component: HelloWorld
    },
  ]
})
