<template>
    <div id="">
        <div class="contain">
            <div class="set">

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
                    <i></i>
                    <p>心得</p>
                </div>
                <div>
                    <i></i>
                    <p>帖子</p>
                </div>
                <div>
                    <i></i>
                    <p>消息</p>
                </div>
            </div>
        </div>
    
    <mt-tab-container v-model="active" class="page-tabbar-container">
    <mt-tab-container-item id="tab1">
        <mt-cell class="icon" >
            <i class="iconfont icon-kefu">
                <span style="margin-left:10px">福利社</span>
            </i>
            <i class="iconfont icon-kefu"></i>        
        </mt-cell>
        <mt-cell >
            <i class="iconfont icon-kefu">
                <span>试用中心</span>
            </i>
            <i></i>
        </mt-cell>
        <mt-cell>
            <i class="iconfont icon-kefu">
                <span>我的订单</span>
            </i>
            <i></i>
        </mt-cell>
        <mt-cell>
            <i class="iconfont icon-kefu">
                <span>我的地址</span>
            </i>
            <i></i>
        </mt-cell>
        <mt-cell>
            <i class="iconfont icon-kefu">
                <span>兑换码/邀请码</span>
            </i>
            <i></i>
        </mt-cell>
        <mt-cell>
            <i class="iconfont icon-kefu">
                <span>意见反馈</span>
            </i>
            <i></i>
        </mt-cell>
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
            active:"tab1"
        }
    },
    components:{
        "setting":Setting
    }
}
</script>
<style scoped>
.contain{
    height:300px;
    padding-left:25px;
    padding-right:25px;
    background-color:pink;
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
    /* box-shadow:; */
}
.icon{
    display:flex;
    justify-content: space-around
}
</style>
