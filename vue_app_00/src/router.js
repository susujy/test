import Vue from 'vue'
import Router from 'vue-router'
// 引入美妆测评主页面
import Home from './components/test/Home'

Vue.use(Router)

export default new Router({
  routes: [
    // 美妆测评主页面
    {path:'/',component:Home},
    // // 评论页面
    // {path:"/comment",component:comment},
    // // 分类子组件
    // {path:"/classify",component:classify}
  ]
})
