<template>
    <div class="page-head">
        <div class="contain">
            <div class="set">
                <i class="iconfont icon-kefu"></i>
            </div>
            <div class="head">
                <div class="headImg">
                    <img class="Img" src="../../../assets/girl.png" alt="">
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
                <div class="sign">
                    <span>签到</span>
                </div>
            </div>
            <div class="like">
                <div>
                    <i class="iconfont icon-bofang"></i>
                    <p>收藏</p>
                </div>
                <div>
                    <i class="iconfont icon-bofang"></i>
                    <p>心得</p>
                </div>
                <div>
                    <i class="iconfont icon-bofang"></i>
                    <p>帖子</p>
                </div>
                <div>
                    <i class="iconfont icon-bofang"></i>
                    <p>消息</p>
                </div>
            </div>
        </div>
        <div style="height:300px"></div>
        <mt-tab-container v-model="active" class="page-tabbar-container">
            <mt-tab-container-item id="tab1">
                <setting></setting>
            </mt-tab-container-item>
        </mt-tab-container>
        
    </div>
</template>
<script>
//引入子组件
import Setting from './Setting.vue'
export default {
    data(){
        return {
            active:"tab1",
            list1:[],
            list2:[{},{},{}]
        
        }
    },
    components:{
        "setting":Setting
    }
}
</script >
<style scoped>
.contain{
    position:fixed;
    z-index: 999;
    width:100%;
    height:300px;
    padding-left:25px;
    padding-right:25px;
    background-color:pink;
}
.set{
    text-align:right;margin:15px;

}
.headImg{
    background-color:#fff;
    border-radius:50%;
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
.infor p{color:#fff}
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
    height:100px;
    background-color:#fff;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-radius:10px;
    box-shadow:0px 2px 10px 1px #aaa; 
}

</style>
