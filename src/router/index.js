import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
//import PageThreadShow from '@/pages/PageThreadShow'

Vue.use(Router)

export default new Router({
  routes: [
    
    { path: '/', component: Home },
    /* other routes */
    { path: '/api'},
    
    /*{
      path: '/thread/:id',
      name: 'ThreadShow',
      component: PageThreadShow,
      props: true
    }*/
  ],
  mode: 'history'
})
