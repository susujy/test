<template>
    <div class="page-contain">
        <div class="page-head">
            <div class="left">
                <img src="../../../assets/left.png" alt="">
            </div>
            <span>开封</span>
            <div class="sure">
                <span>确定</span>        
            </div>
        </div>
        <div style="height:80px;"></div>
        <div class="contain">
            
            <div class="product">
                <div>
                    <img class="pImg" src="../../../assets/jiemianru.png" alt="">
                </div>
                <div class="pText">
                    <p class="freeplus">美服芳丝freeplus净润洗面霜</p>
                    <p class="rp">参考价:￥150</p>
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>产品评星:</span>
                </div>
                <div class="sImg">
                    <img src="../../../assets/xingxing.png" alt="">
                    <img src="../../../assets/xingxing.png" alt="">
                    <img src="../../../assets/xingxing.png" alt="">
                    <img src="../../../assets/xingxing.png" alt="">
                    <img src="../../../assets/xingxing.png" alt="">
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>开封时间</span>
                </div>
                <div class="pTime">
                    <span>2019.6.11</span>
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>开封保鲜期</span>
                </div>
                <div class="pTime">
                    <span>6个月</span>
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>保鲜期结束提前提醒</span>
                </div>
                <div class="pTime">
                    <span>1个月</span>
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>购买时间</span>
                </div>
                <div class="pTime">
                    <span>2019.6.11</span>
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>购买价格</span>
                </div>
                <div class="price">
                    <input class="pInput" type="text" value="150.0">
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>购买渠道</span>
                </div>
                <div class="way">
                    <input class="pInput" type="text" placeholder="请选择渠道(选填)">
                </div>
            </div>
            <div class="share">
                <span>分享你的使用感受吧</span>
            </div>
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
/*最外层div*/ 
.page-contain{
    padding-left:12px;
    padding-right:12px;
    font-family: "微软雅黑"
}
/*顶部div*/ 
.page-head{
    padding-right:7px;
    display:flex;
    position:fixed;
    z-index:999;
    width:100%;
    justify-content: space-between;
    align-items:center;
    height:80px;
}
.sure{
    margin-right:15px;
}
.left img{width:25px;}
/*产品图片样式*/ 
.pImg{width:80px}
.product{
    display:flex;
    height:100px;
}
/*产品左侧文本样式*/ 
.freeplus{
margin-bottom:0px;
color:#000;
}
.rp{
    font-size:12px;
}
.pDiv{
    height:50px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    border-bottom:1px solid #ddd;
}
.pText,.pTime{
    font-size:14px;
}

.pDiv{
    display:flex;
}
.share{
    height:80px;
    text-align:center;
    padding-top:50px;
}
.share span{
    font-size:12px;
}
.pInput{
    border:none;
    outline:none;
    margin:0;
    padding-right:0;
    font-size:14px;
    text-align:right;
}
</style>
