<template>
<div class="page">
    <div class="icons">
        <div class="icon-item">
            <i class="iconfont icon-fulishe"></i>
            <span class="icon-text">福利社</span>
        </div>
        <i class="iconfont icon-xiangyou"></i>
    </div>    
    <div class="icons">
        <div class="icon-item">
            <i class="iconfont icon-dianzan"></i>
            <span class="icon-text">试用中心</span>
        </div>
        <i class="iconfont icon-xiangyou"></i>
    </div> 
    <div class="icons">
        <div class="icon-item">
            <i class="iconfont icon-dingdan2"></i> 
            <span class="icon-text">我的订单</span>
        </div>
        <i class="iconfont icon-xiangyou"></i>
    </div> 
    <div class="icons">
        <div class="icon-item">
            <i class="iconfont icon-test"></i>
            <span class="icon-text">我的地址</span>
        </div>
        <i class="iconfont icon-xiangyou"></i>
    </div> 
    <div class="icons">
        <div class="icon-item">
            <i class="iconfont icon-yaoqinghaoyou"></i>
            <span class="icon-text">兑换码/邀请码</span>
        </div>
        <i class="iconfont icon-xiangyou"></i>
    </div> 
    <div class="icons">
        <div class="icon-item">
            <i class="icon iconfont icon-xinfeng1"></i>
            <span class="icon-text">意见反馈</span>
        </div>
        <i class="iconfont icon-xiangyou"></i>
    </div> 
</div>
</template>
<script>
export default {
    data(){
        return {}
            
    }
}
</script>
<style scoped>
.page{padding-left:10px;padding-right:10px;}
.icons{
    height:60px;
    display:flex;
    justify-content:space-around;
    align-items: center;
    border-bottom:1px solid #ddd;
    background-color:#fff
}
.icon-item{
    width:300px;

}
.icon-text{
    font-size:14px;
    font-family: "微软雅黑";
    color:#000;
    margin-left:15px
}
/*修改图标的颜色大小*/ 
 .iconfont{font-size:24px;} 
.icon-fulishe{color:rgba(183, 155, 240, 0.986)}
 .icon-dianzan{color:rgb(240, 140, 240);}/*font-size:26px */
.icon-dingdan2{color:orange;}
.icon-test{color:rgb(12, 185, 12)}
.icon-yaoqinghaoyou{color:rgb(95, 194, 240);}
.icon-xinfeng1{color:rgb(248, 112, 70);font-size:18px;}

</style>
