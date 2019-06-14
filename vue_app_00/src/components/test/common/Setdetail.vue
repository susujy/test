<template>
    <div class="page-container">
        <div class="page-head">
            <div class="up" @click="up">
                <img src="../../../assets/left.png" alt="">
            </div>
            <span>设置</span>
        </div>
        <div style="height:75px;"></div>
        <div class="group">
            <div class="btwn" @click="jumplogin">
                <span>登录</span>
                <i class="iconfont icon-xiangyou"></i>
            </div>
            <div class="btwn">
                <span>我的地址</span>
                <i class="iconfont icon-xiangyou"></i>
            </div>
            <div class="btwn">
                <span>兑换码/邀请码</span>
                <i class="iconfont icon-xiangyou"></i>
            </div>
        </div>
        <div class="group">
            <div class="btwn">
                <span>清除缓存</span>
                <i class="iconfont icon-xiangyou"></i>
            </div>
            <div class="btwn">
                <span>意见反馈</span>
                <i class="iconfont icon-xiangyou"></i>
            </div>
        </div>
        <div class="group">
            <div class="btwn">
                <span>关于我们</span>
                <i class="iconfont icon-xiangyou"></i>
            </div>
            <div class="btwn">
                <span>分享给朋友</span>
                <i class="iconfont icon-xiangyou"></i>
            </div>
            <div class="btwn">
                <span>小主，赐个好评吧</span>
                <i class="iconfont icon-xiangyou"></i>
            </div>
            <div class="btwn">
                <span>检测更新(10.0.0)</span>
                <i class="iconfont icon-xiangyou"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        up(){
            this.$router.push("/me")
        },
        jumplogin(){
            this.$router.push("/login")
        }
    }
}
</script>

<style scoped>
.page-container{
    background-color:#f5f5f5;
}
.page-head{
    width:100%;
    height:60px;
    padding-top:15px;
    display:flex;
    position:fixed;
    z-index:999;
    align-items:center;
    background-color:#fff;
}
.page-head span{
    margin-left:140px;
}
.up img{
    width:25px;
}
.group{
    margin-bottom:15px;
}
.btwn{
    padding-left:10px;
    padding-right:10px;
    font-size:15px;
    height:50px;
    background-color:#fff;
    border-bottom:1px solid #ddd;
    display:flex;
    justify-content:space-between;
    align-items:center;

}
</style>
