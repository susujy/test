<template>
<!-- 页面顶部 -->
    <div id="top">
        <div class="search">
            <input type="text" :placeholder="tips" >
        </div>
        <div class="logo">
            <img src="../../../assets/gd.png" alt="" width="30px" height="30px">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           
        }
    },
     props:{
            //接收父元素的数据
    tips:{type:String,default:""},
    },
}
</script>
<style scoped>
    #top{
        display:flex;
        height:65px;
        background-color:#f4f4f4;
        justify-content:space-around;
        padding:10px 15px;
    }
    div.search{
        height:44px;
        line-height:44px;
        border:1px solid #fea3cc;
        border-radius:20px;
        text-align: center;
        margin-left:10px;
        background-image: url('../../../assets/xingtaiduICON_sousuo--.png');
        background-repeat: no-repeat;
        background-position:18px 7px;
        background-size:30px 30px;
        padding:0 0 0 37px;
    }
    div.logo{
        margin:8px 0px 0px 13px;
    }
    input{
        border:none !important;
        outline: none;
        width:87%!important;
        background-color:#f4f4f4!important;
      
    }
</style>