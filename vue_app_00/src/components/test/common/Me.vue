<template>
    <div class="page-head">
        <div class="contain">
            <div class="set">
                <i class="iconfont icon-shezhi1"></i>
            </div>
            <div class="head">
                <div class="headImg" @click="tologin">
                    <!-- <router-link :to="login"> -->
                        <img class="Img" src="../../../assets/girl.png" alt="">
                    <!-- </router-link> -->
                    
                </div>
                <span>你还没有登录哦</span>
            </div>
            <div class="box">
                <div class="infor">
                    <div class="focus">
                        <span>- -</span>
                        <p>关注</p>
                    </div>
                    <div class="fans">
                        <span>- -</span>
                        <p>粉丝</p>
                    </div>
                    <div class="collect">
                        <span>- -</span>
                        <p>被赞/收藏</p>
                    </div>
                </div>
                <div class="sign" @click="tologin">
                    <span>签到</span>
                </div>
            </div>
            <div class="like">
                <div>
                    <i class="iconfont icon-shoucangdetiezi"></i>
                    <p>收藏</p>
                </div>
                <div>
                    <i class="iconfont icon-aixin"></i>
                    <p>心得</p>
                </div>
                <div>
                    <i class="iconfont icon-wodetiezi"></i>
                    <p>帖子</p>
                </div>
                <div>
                    <i class="iconfont icon-xiaoxi-shixin"></i>
                    <p>消息</p>
                </div>
            </div>
        </div>
        <div style="height:300px"></div>
        <!-- <mt-tab-container v-model="active" class="page-tabbar-container"> -->
            <!-- <mt-tab-container-item id="tab1"> -->
                <setting></setting>
            <!-- </mt-tab-container-item> -->
        <!-- </mt-tab-container> -->
        
    </div>
</template>
<script>
//引入子组件
import Setting from './Setting.vue';
export default {
    data(){
        return {
            active:"tab1"
        }
    },
    methods:{
        tologin(){
            this.$router.push("/Login")
        }
    },
    components:{
        "setting":Setting
    }
}
</script >
<style scoped>
span,p{font-family:"黑体";font-weight:lighter}
.contain{
    position:fixed;
    z-index:999;
    width:100%;
    height:300px;
    padding-left:25px;
    padding-right:25px;
    background-color:#fea3cc;
}
.set{
    text-align:right;
    margin-top:15px;
    margin-bottom:15px;

}
.headImg{
    background-color:#fff;
    border-radius:50%;
    margin-right:10px;
}
.Img{
    width:50px;
    /* border-radius:50% */
}
.head{
    color:#fff;
    display:flex;
    align-items:center;
    margin-top:7px;
    margin-bottom:20px;
}
.infor{
    width:200px;
    text-align:center;
    font-size:12px;
    color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.infor p{
    color:#fff;
    font-size:12px;
    /* font-family:"微软雅黑";*/
}
.box{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
}
.sign{
    width:80px;
    height:30px;
    padding-top:5px;
    font-size:14px;
    text-align:center;
    background-color:#fff;
    border-radius:15px;
}
.like{
    font-size:14px;
    height:90px;
    background-color:#fff;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-radius:10px;
    box-shadow:3px 3px 10px 1px #aaa; 
}
.like p{color:#000;margin-top:5px;}
.like div{text-align:center;}
/*修改icon的颜色*/ 
.iconfont{font-size:24px;}
.icon-shezhi1{color:#fff;}
.icon-shoucangdetiezi{color:goldenrod}
.icon-aixin{color:#fea3cc;}
.icon-wodetiezi{color:rgb(243, 50, 50);}
.icon-xiaoxi-shixin{color:rgb(91, 194, 241);font-size:22px;}
</style>
