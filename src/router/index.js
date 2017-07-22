import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    }
  ]
})
