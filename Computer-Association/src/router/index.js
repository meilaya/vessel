import Vue from 'vue'
import Router from 'vue-router'
import layout from "@/pages/layout"
import newslist from "@/pages/newslist"
import detail from "@/pages/detail"
import introduction from  "@/pages/introduction"



Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'layout',
      component: layout
    },
    {
    	path: '/newslist',
      	name: 'newslist',
      	component: newslist

    },
    {
      path: '/news/detail',
        name: 'detail',
        component: detail

    },
      {
      path: '/introduction',
        name: 'introduction',
        component: introduction

    }
    
    


    ]
   
    
})
