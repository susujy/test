<template>
<div class="container">
    <!--面板列表-->
    <div class="list" @click="itemClick(id)">
        <div class="list-item">
            <div class="item-id">{{id}}</div>
            <div class="item-content">
                <img :src="imgurl" style="width:65px;height:65px;"/>
                <div class="item-content-right">
                    <span class="title">{{title}}</span>
                    <span class="comment">{{comment}}</span>
                    <span class="price">{{price}}</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        //接收父元素数据
        id:{default:""},
        imgurl:{default:""},
        title:{type:String,default:""},
        comment:{type:String,default:""},
        price:{type:String,default:""},
        itemClick:{type:Function}
    },
    data(){
        return {}
    }
}
</script>
<style scoped>
    .container{
        background-color:#FAFAFA;
    }
    .list-item{
        display:flex;
        width:100%;
        justify-content:space-between;
        align-items:center;
        height:100px;
        line-height:100px;
        color:#666;
        font-size:12px;
        padding:20px 10px;
        box-sizing:border-box;
    }
    .item-id{
        width:20px;
        height:20px;
        background:#ddd;
        text-align:center;
        line-height:20px;
        border-radius:0.2rem;
        margin-right:3px;
        font-size:16px;
        color:#818181;
    }
    .item-content{
        display:flex;
        width:100%;
        justify-content:space-between;
        align-items:center;
        height:100px;
        border-bottom:1px solid #ccc;
    }
    .item-content-right{
        display:flex;
        width:100%;
        height:100px;
        flex-direction: column;
        padding-bottom:40px;
        margin-left:5px;
        
    }
    .item-content-right span{
        height:20px;
    }
    .title{
        font-size:15px;
        font-weight:1rem;
        margin-top:-5px;
        padding-bottom:4px;
        color:#393939;
    }
    .comment{
        padding-bottom:4px;
        color:#6A6A6A;
    }
    .price{
        font-weight:light;
        color:#797979;
    }
</style>