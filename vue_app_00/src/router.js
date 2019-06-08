import Vue from 'vue'
import Router from 'vue-router'
// 引入美妆测评主页面
import Home from './components/test/Home'
// 引入评论功能
import comment from './components/test/common/comment.vue'
// 分类子组件
import classify from './components/test/common/classify.vue'
// import HelloContainer from "./components/HelloWorld.vue"
// import Exam01 from "./components/Exam01.vuesssss"
// import ExamMessageBox02 from "./components/ExamMessageBox02"
// import ExamField03 from "./components/ExamField03"
// import Login04 from "./components/Login04"
// import MyField_taobao05 from "./components/MyField_taobao05"
// import ExamForm06 from "./components/ExamForm06"
// import ExamContainer from "./components/ExamContainer"
// import ExamTabbar from "./components/ExamTabbar"
// import F from "./components/F"
// import Home from "./components/weixin/Home"
// import MessageList from "./components/weixin/common/MessageList"
// import Login from "./components/xz/Login"
Vue.use(Router)

export default new Router({
  routes: [
    // 美妆测评主页面
    {path:'/',component:Home},
    // 评论页面
    {path:"/comment",component:comment},
    // 分类子组件
    {path:"/classify",component:classify},
    // {path:'/Exam01',component:Exam01},
    // {path:'/ExamMessageBox02',component:ExamMessageBox02},
    // {path:'/ExamField03',component:ExamField03},
    // {path:"/Login04",component:Login04},
    // {path:"/MyField_taobao05",component:MyField_taobao05},
    // {path:'/ExamForm06',component:ExamForm06},
    // {path:'/ExamContainer',component:ExamContainer},
    // {path:'/ExamTabbar',component:ExamTabbar},
    // {path:'/F',component:F},
    // {path:'/Home',component:Home},
    // {path:"/MessageList",component:MessageList},
    // {path:'/Login',component:Login}
  ]
})
