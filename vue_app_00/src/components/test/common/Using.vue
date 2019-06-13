<template>
    <div class="page-contain">
        <div class="page-head">
            <div class="left" @click="back">
                <img src="../../../assets/left.png" alt="">
            </div>
            <span>开封</span>
            <div class="sure" @click="sure">
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
                    <img src="../../../assets/xingxing_1.png" alt="">
                    <img src="../../../assets/xingxing_1.png" alt="">
                    <img src="../../../assets/xingxing_1.png" alt="">
                    <img src="../../../assets/xingxing.png" alt="">
                    <img src="../../../assets/xingxing.png" alt="">
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>开封时间:</span>
                </div>
                <div class="pTime">
                    <span>2019.6.11</span>
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>开封保鲜期:</span>
                </div>
                <div class="pTime">
                    <span>6个月</span>
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>保鲜期结束提前提醒:</span>
                </div>
                <div class="pTime">
                    <span>1个月</span>
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>购买时间:</span>
                </div>
                <div class="pTime">
                    <!-- <span>2019.6.11</span> -->
                    <!-- <input class="pInput" type="date"> -->
                    <mt-datetime-picker ref="picker" type="date" v-model="pickerVisible"></mt-datetime-picker>
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>购买价格:</span>
                </div>
                <div class="price">
                    <input class="pInput" type="text" value="150.0">
                </div>
            </div>
            <div class="pDiv">
                <div class="pText">
                    <span>购买渠道:</span>
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
// import { DatetimePicker } from 'mint-ui';
// Vue.component(DatetimePicker.name, DatetimePicker)
export default {
    data(){
        return {
            value: new Date(),
      startDate: new Date("1900/01/01"), //默认是当前时间前20年，手动设置日期，这样说据说是为了在兼容ios。（还没有验证）
      endDate: new Date()
    }

        
    },
    methods:{
        back(){
            this.$router.push("/");
        },
        sure(){
            this.$router.push("/");
            this.$toast("开封成功")
        },
        openPicker(){
            this.$refs.picker.open();
        },
        checkinCancel() {
            this.$refs.picker.close();
        }

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
    color:#ffa599;
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
    color:#ffa599;
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
