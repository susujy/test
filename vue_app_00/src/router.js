import Vue from 'vue'
import Router from 'vue-router'
// 引入美妆测评主页面
import Home from './components/test/Home'
import Header from './components/test/common/header.vue'
// 引入登录页面
import login from './components/test/login'
//引入我的页面
import Me from './components/test/common/Me.vue'
//开封
import Using from './components/test/common/Using.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // 美妆测评主页面
    {path:'/',component:Home},
    {path:"/header",component:Header},
    {path:'/login',component:login},
    // // 评论页面
    // {path:"/comment",component:comment},
    // // 分类子组件
    // {path:"/classify",component:classify}
    //我的页面
    {path:'/me',component:Me},
    //开封
    {path:'/using',component:Using}
  ]
})
