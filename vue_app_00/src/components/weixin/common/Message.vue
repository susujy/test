<template>
    <div class="rootstyle" @click="itemClick(id)">
        <!-- <h3>Message.vue  消息组件</h3>  -->
        <div class="leftimgandlablestyle">
            <img :src="imgurl" alt="" class="imgstyle">
            <div class="rightOfImg">
                <span class="titlelable">{{title}}</span>
                <span class="subtitle">{{subtitle}}</span>
            </div>
        </div>
        <span class="sendtime">{{sendtime}}</span>
    </div>
</template>
<script>
export default {
    props:{
        //接收父元素的数据
        id:{default:""},
        imgurl:{default:""},
        title:{type:String,default:""},
        subtitle:{type:String,default:""},
        sendtime:{type:String,default:""},
        itemClick:{type:Function}
    },
    data(){
        return {

        }
    }
}
</script>
<style scoped>
/* message 根样式 */
.rootstyle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:5px;
    border:1px solid #d9d9d9;
}
/* 图片的样式 */
.imgstyle{
    width:50px;
    height:50px;
}
/* 包裹着着图片和文本元素 */
.leftimgandlablestyle{
   display: flex;

}
/* 图片右侧文本 */
.rightOfImg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left:7px;
}
/* 主标题 */
.titlelable{
    color:#000;
    font-size:17px;
}
/* 子标题 */
.subtitle{
    color:gray;
    margin-top:4px;
    font-size:16px;
}
/* 消息发送时间 */
.sendtime{
    /* 定义flex子元素在纵轴对齐方式 */
    /* flex-start元素位于容器开头 */
    color:gray;
    font-size:16px;
    align-self:flex-start;
}
</style>