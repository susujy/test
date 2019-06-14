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
            <div class="pDiv" @click="openPicker">
                <div class="pText">
                    <span>开封时间:</span>
                </div>
                <div class="pTime">
                    <!-- <span>2019.6.11</span> -->
                    <span>{{this.opendate | formatDate}}</span>
                </div>
            </div>
            <mt-datetime-picker 
                ref="openpicker" type="date" 
                :startDate="startdate" 
                :endDate="enddate"  
                v-model="opendatetime" 
                @confirm="openConfirm">
            </mt-datetime-picker>
            <div class="pDiv" @click="fshowPup">
                <div class="pText">
                    <span>开封保鲜期:</span>
                </div>
                <div class="pTime">
                    <!-- <span>6个月</span> -->
                    <span>{{fmsg}}</span>
                </div>
            </div>
            <mt-popup v-model="fpopupVisible" popup-transition="popup-fade" choseOnClickModal="true" position="bottom">
                <mt-picker :slots="fslots" @change="fonValuesChange" style="width:375px;" showToolbar >
                   <div class="picker-toolbar-title">
                        <div class="usi-btn-cancel" @click="fpopupVisible=!fpopupVisible">取消                         </div> 
                        <div class="">选择时间</div>
                        <div class="usi-btn-sure" @click="fpopupVisible=!fpopupVisible">确定                           </div>
                  </div>
                </mt-picker>
            </mt-popup>
            <div class="pDiv" @click="rshowPup">
                <div class="pText">
                    <span>保鲜期结束提前提醒:</span>
                </div>
                <div class="pTime">
                    <!-- <span>1个月</span> -->
                    <span>{{rmsg}}</span>
                </div>
            </div>
            <mt-popup v-model="rpopupVisible" popup-transition="popup-fade" choseOnClickModal="true" position="bottom">
                <mt-picker :slots="rslots" @change="ronValuesChange" style="width:375px;" showToolbar >
                   <div class="picker-toolbar-title">
                        <div class="usi-btn-cancel" @click="rpopupVisible=!rpopupVisible">取消                         </div> 
                        <div class="">选择时间</div>
                        <div class="usi-btn-sure" @click="rpopupVisible=!rpopupVisible">确定                           </div>
                  </div>
                </mt-picker>
             </mt-popup>
             <div class="pDiv"  @click="buyPicker"><!-- @touchmove.prevent -->
                <div class="pText">
                    <span>购买时间:</span>
                </div>
                <div class="pTime" >
                    <span>{{this.buydate | formatDate}}</span>
                    <!-- <span>{{dateText}}</span> -->
                    <!-- <input class="pInput" type="date"> -->
                </div>
            </div>
            <mt-datetime-picker 
                ref="buypicker" type="date" 
                :startDate="startdate" 
                :endDate="enddate"  
                v-model="buydatetime" 
                @confirm="buyConfirm">
            </mt-datetime-picker>
            <div class="pDiv">
                <div class="pText">
                    <span>购买价格:</span>
                </div>
                <div class="price">
                    <input class="pInput" type="text" value="150.0">
                </div>
            </div>
            <div class="pDiv" @click="wshowPup">
                <div class="pText">
                    <span>购买渠道:</span>
                </div>
                <div class="way">
                    <input class="pInput" type="text" displayed placeholder="请选择渠道(选填)" v-model="wmsg">
                    <!-- <span>{{message}}</span> -->
                </div>
            </div>
            <mt-popup v-model="wpopupVisible" popup-transition="popup-fade" choseOnClickModal="true" position="bottom">
                <mt-picker :slots="wslots" @change="wonValuesChange" style="width:375px;" showToolbar>
                   <div class="picker-toolbar-title">
                        <div class="usi-btn-cancel" @click="wpopupVisible=!wpopupVisible">取消                         </div> 
                        <div class="">请选择购买渠道</div>
                        <div class="usi-btn-sure" @click="wpopupVisible=!wpopupVisible">确定                           </div>
                  </div>
                </mt-picker>
            </mt-popup>
            <div class="share">
                <span>分享你的使用感受吧</span>
            </div>
        </div>
        
        
    </div>
</template>
<script>
export default {
    filters:{
        formatDate(time){
            var date=new Date(time)
            var y=date.getFullYear();
            var m=date.getMonth()+1;
            m=m<10?('0'+m):m;
            var d=date.getDate();
            d=d<10?('0'+d):d;
            return y+'.'+m+'.'+d
        }
    },
    data(){
        return {
            opendate:new Date().toLocaleDateString(),
            buydate:new Date().toLocaleDateString(),
            opendatetime:"",
            buydatetime:"",
            startdate:new Date(2017,0,1), 
            enddate: new Date(),
            showToolbar: true,
            fmsg:"",
            rmsg:"",
            wmsg:"",
            fslots:[{values:["1个月","2个月","3个月","4个月","5个月","6个月","7个月","8个月","9个月","10个月","11个月","12个月"]}],
            rslots:[{values:["1个月","2个月","3个月","4个月","5个月","6个月"]}],
            wslots:[{values:["专柜","天猫","淘宝","京东","美星家","海外代购","其他"]}],
            fpopupVisible: false,
            rpopupVisible: false,
            wpopupVisible: false
            
        }
    },
    methods:{
        back(){
            this.$router.push("/product");
        },
        sure(){
            this.$indicator.open({
                text:"评分上传中...",
                spinnerType: 'snake'
            })
            setTimeout(()=>{
               this.$indicator.close();
                this.$router.push("/product");
                this.$toast({
                    message:"开封成功",
                    className:"toastStyle"
                })
            },1000)
            
        },
        openPicker(){
            this.opendatetime=this.opendate;
            this.$refs.openpicker.open();
        },
        buyPicker(){
            this.buydatetime=this.buydate;
            this.$refs.buypicker.open();
        },
        openConfirm(){
            this.opendate=this.opendatetime;
        },
        buyConfirm(){
            this.buydate=this.buydatetime;
        },
        fshowPup() {
            this.fpopupVisible = true
        },
        rshowPup() {
            this.rpopupVisible = true
        },
        wshowPup() {
            this.wpopupVisible = true
        },
        fonValuesChange(picker, values) {
            if(!this.fpopupVisible){
                this.fmsg="6个月";
            }else{
                this.fmsg= values[0];
            }
            if(values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
         },
        ronValuesChange(picker, values) {
            if(!this.rpopupVisible){
                this.rmsg="1个月";
            }else{
                this.rmsg = values[0];
            }
            if(values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
         },
        wonValuesChange(picker, values) {
            if(!this.wpopupVisible){
                this.wmsg="";
            }else{
                this.wmsg = values[0];
            }
            if(values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
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
    color:#fea3cc;
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
    padding-top:70px;
}
.share span{
    font-size:12px;
    color:#fea3cc;
}
.pInput{
    border:none;
    outline:none;
    margin:0;
    padding-right:0;
    font-size:14px;
    text-align:right;
}
.way{font-size:14px;}
.picker-toolbar-title{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    height:40px;
    line-height:40px;
    font-size:16px;
}
.usi-btn-cancel{
    color:#aaa
}
.usi-btn-sure{
    color:#fea3cc;
}
.toastStyle{
    color:#fff !important;
    background-color:#fea3cc !important;
    font-size:14px;
}
</style>
