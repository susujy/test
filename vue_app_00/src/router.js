import Vue from 'vue'
import Router from 'vue-router'
// 引入美妆测评主页面
import Home from './components/test/Home'
import Header from './components/test/common/header.vue'
// 引入登录页面
import login from './components/test/login'
//引入我的页面
import Me from './components/test/common/Me.vue'
import Setdetail from './components/test/common/Setdetail.vue'
import Bag from './components/test/common/Bag.vue'
// 商品详情页面
import product from './components/test/product.vue'
// import banner from './components/test/common/banner'
import Using from './components/test/common/Using.vue'
import goods from './components/test/common/goods'
// import wash from './components/test/Wash'
// import FacewashList from './components/test/common/FacewashList'
import Wash from './components/test/Wash'
import FacewashList from './components/test/common/FacewashList'
import orderlist from  './components/test/common/orderlist'

Vue.use(Router)

export default new Router({
  routes: [
    // 美妆测评主页面
    {path:'/',component:Home},
    {path:"/header",component:Header},
    {path:'/login',component:login},
    {path:"/product",component:product},
    // {path:"/banner",component:banner},
    // {path:"/goods",component:goods},
    // {path:'/wash',component:wash},
    //{path:"/orderlist",component:orderlists},

    // {path:'/bar',component:bar},
    // // 评论页面
    // {path:"/comment",component:comment},
    // // 分类子组件
    // {path:"/classify",component:classify}
    //我的页面
    {path:'/me',component:Me},
    {path:'/setdetail',component:Setdetail},
    {path:'/bag',component:Bag},
    //开封
    {path:'/using',component:Using},
    {path:'/Wash',component:Wash},
    {path:'/FacewashList',component:FacewashList}
  ]
})
