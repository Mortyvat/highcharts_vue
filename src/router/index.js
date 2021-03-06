import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Smartview from '@/pages/Smartview'
import LineChartPage from '@/pages/LineChartPage'
//import PageThreadShow from '@/pages/PageThreadShow'

Vue.use(Router)

export default new Router({
  routes: [
    
    { 
      path: '/', 
      name: 'home',
      component: Home,
     },{ 
      path: '/smartview',
      name: 'Smartview',
      component: Smartview 
    },{
      path: '/line',
      name: 'LineChartPage',
      component: LineChartPage 
    },
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
