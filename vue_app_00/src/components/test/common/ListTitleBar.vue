<template>
<div class="container">
    <div class="page-head">
        <div class="page-headtop">
            <span>{{topTitle}}</span>
        </div>
        <div class="page-headbot">
            <div class="option" @click="brand">
                <span>品牌</span>
                <img/>
            </div>
            <div class="option" @click="award">
                <span>大赏</span>
                <img/>
            </div>
            <div class="option" @click="select">
                <span>筛选</span>
                <img/>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"ListTitleBar",
    props:{
        topTitle:{type:String,default:""},
        brand:{type:Function},
        award:{type:Function},
        select:{type:Function},
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
    .page-head{
        position: fixed;
        z-index:999;
        width:100%;
        background-color:#FAFAFA;
        height:80px;
        border-bottom:1px solid #ddd;
        margin-top:-60px;
    }
    .page-headtop{
        width:100%;
        text-align:center;
        height:36px;
        line-height:36px;
        color:#000;
        font-weight:bold;
        font-size:18px;
        padding:5px 0;
    }
    .page-headbot{
        display:flex;
        width:100%;
        justify-content:space-between;
        align-items:center;
        height:34px;
        line-height:34px;
        color:#393939;
        font-size:14px;
    }
    .option{
        display:flex;
        width:33.3%;
        justify-content:center;
        align-items:center;
    }
    
</style>