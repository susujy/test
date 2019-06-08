<template>
    <div>
         <!-- 3.切换面板列表 -->
            <mt-tab-container class="page-tabbar-container" v-model="active">
                <mt-tab-container-item id="message">
                    首页
                </mt-tab-container-item>
                <mt-tab-container-item id="contact">
                    <class-item></class-item>
                </mt-tab-container-item>
                <mt-tab-container-item id="discuss">
                    论坛
                </mt-tab-container-item>
                 <mt-tab-container-item id="mine">
                    我的
                </mt-tab-container-item>
            </mt-tab-container>
            <!-- 4.tabbar列表 -->
            <mt-tabbar v-model="active" fixed>
                <mt-tab-item id="message" @click.native="changeState(0)">
                    <tabbaricon :selectedImage="require('../../assets/first(1).png')" :normalImage="require('../../assets/first.png')" :focused="currentIndex[0].isSelect"></tabbaricon>首页
                </mt-tab-item>
                <mt-tab-item id="contact" @click.native="changeState(1)">
                    <tabbaricon :selectedImage="require('../../assets/cao(1).png')" :normalImage="require('../../assets/cao.png')" :focused="currentIndex[1].isSelect" ></tabbaricon>产品
                </mt-tab-item>
                <mt-tab-item id="discuss" @click.native="changeState(2)">
                    <tabbaricon :selectedImage="require('../../assets/pingjia(1).png')" :normalImage="require('../../assets/pingjia.png')" :focused="currentIndex[2].isSelect" ></tabbaricon>论坛
                </mt-tab-item>
                <mt-tab-item id="mine" @click.native="changeState(3)">
                    <tabbaricon :selectedImage="require('../../assets/mine(1).png')" :normalImage="require('../../assets/mine.png')" :focused="currentIndex[3].isSelect" ></tabbaricon>我的
                </mt-tab-item>
            </mt-tabbar>
    </div>
</template>
<script>
import Classify from './common/classify'
import TabBarIcon from "./common/TabBarIcon.vue"
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
        "class-item":Classify,
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
   .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #fff!important;
    color: #ffa599;
   }
   .mint-tabbar > .mint-tab-item{
       color:#666;
   }
</style>