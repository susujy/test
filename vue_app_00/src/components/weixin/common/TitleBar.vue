<template>
    <div class="page-head">
        <span>{{leftTitle}}</span>
        <div class="right-head">
            <div class="searchdiv" @click="search">
                <img :src="rightFirstImg" style="width:25px;" alt="">
            </div>
            <div class="searchdiv" @click="add" style="margin-left:20px;">
                <img :src="rightSecondImg" style="width:25px;" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"TitleBar",
    props:{
        //左侧标题文字
        leftTitle:{default:""},
        //右侧第一张图片
        rightFirstImg:{default:""},
        //右侧第二张图片
        rightSecondImg:{default:""},
        //两个函数
        search:{type:Function},
        add:{type:Function}
    },
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
/* 最外层父元素 */
.page-head{
    display: flex;
    position:fixed;
    z-index:999;
    width:100%;
    justify-content: space-between;
    align-items:center;
    background-color:#3E3A39;
    padding-left:7px;
    padding-right:7px;
    height:48px;
    color:#fff;
    font-size:18px;
}
.right-head{
    display: flex;
}
.searchdiv{
    display: flex;
    align-items: center;
    height:48px;
}
</style>
