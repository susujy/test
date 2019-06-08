<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <!-- 2.div——保留出标题的48px -->
            <div style="margin-top:48px;"></div>
            <!-- 3.切换面板列表 -->
            <mt-tab-container class="page-tabbar-container" v-model="active">
                <mt-tab-container-item id="message">
                    <messagelist></messagelist>
                </mt-tab-container-item>
            </mt-tab-container>
            <!-- 4.tabbar列表 -->
            <mt-tabbar v-model="active" fixed>
                <mt-tab-item id="message" @click.native="changeState(0)">
                    <tabbaricon :selectedImage="require('../../assets/ic_weixin_selected.png')" :normalImage="require('../../assets/ic_weixin_normal.png')" :focused="currentIndex[0].isSelect"></tabbaricon>微信
                </mt-tab-item>
                <mt-tab-item id="contact" @click.native="changeState(1)">
                    <tabbaricon :selectedImage="require('../../assets/ic_contacts_selected.png')" :normalImage="require('../../assets/ic_contacts_normal.png')" :focused="currentIndex[1].isSelect" ></tabbaricon>通讯录
                </mt-tab-item>
                <mt-tab-item id="find" @click.native="changeState(2)">
                    <tabbaricon :selectedImage="require('../../assets/ic_find_selected.png')" :normalImage="require('../../assets/ic_find_normal.png')" :focused="currentIndex[2].isSelect" ></tabbaricon>发现
                </mt-tab-item>
                <mt-tab-item id="me" @click.native="changeState(3)">
                    <tabbaricon :selectedImage="require('../../assets/ic_me_selected.png')" :normalImage="require('../../assets/ic_me_normal.png')" :focused="currentIndex[3].isSelect" ></tabbaricon>我的
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>
<script>
//引入子组件
//1.引入
import TitleBar from "./common/TitleBar.vue"
import MessageList from "./common/MessageList.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
//2.注册

//3.调用子组件
//4.传值
export default {
    data(){
        return {
            active:"message",
            //创建数组保存图片焦点状态
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false},
            ],

        }
    },
     components:{
        "titlebar":TitleBar ,
        "messagelist":MessageList,
        "tabbaricon":TabBarIcon,
    },
    methods: {
        mysearch(){
            console.log("搜索");
        },
        myadd(){
            console.log("+");
        },
        changeState(n){
            //函数功能：将当前参数下标对应数组值修改为true其他修改为false
            //1.创建循环，循环数组中的内容
            for (var i=0;i<this.currentIndex.length;i++){
                //2.判断如果循环下标与n相等
                if(n==i){//3.当前下标为true
                    this.currentIndex[i].isSelect=true;
                }else{//4.其他元素未false
                     this.currentIndex[i].isSelect=false;
                }
                
                
            }
            
        }
    }
}
</script>
<style scoped>
/* 最外层父元素 */
.page-tabbar{
     overflow:hidden;/*溢出隐藏 */
}
/* 修改tabbat默认文字颜色 */
/* .mint-tabbar > .mint-tab-item{
    color: red;
} */
/* 修改默认tab选中文字样式 */
.mint-tabbar>.mint-tab-item.is-selected{
    background-color:transparent;
    color:#45c018;
}
.page-wrap{
    overflow:auto;/*溢出滚动条*/
    padding-bottom:60px;
}
</style>
