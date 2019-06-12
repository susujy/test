<template>
    <div id="box">
        <div id="list">
            <div class="item" @click="jumplist">
                <a>
                    <img src="../../../assets/1.jpg" width="50px" height="50px">
                    <span>洁面</span>
                </a>
            </div>
            <div class="item">
                <a >
                    <img src="../../../assets/2.jpg" width="50px" height="50px">
                    <span>化妆水</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/3.jpg" width="50px" height="50px">
                    <span>精华</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/4.jpg" width="50px" height="50px">
                    <span>乳液</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/5.jpg" width="50px" height="50px">
                    <span>面霜</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/6.jpg" width="50px" height="50px">
                    <span>面膜</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/7.jpg" width="50px" height="50px">
                    <span>防晒</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/8.jpg" width="50px" height="50px">
                    <span>隔离</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/9.jpg" width="50px" height="50px">
                    <span>粉底</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/10.jpg" width="50px" height="50px">
                    <span>粉饼</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/11.jpg" width="50px" height="50px">
                    <span>遮瑕</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/12.jpg" width="50px" height="50px">
                    <span>口红</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/13.jpg" width="50px" height="50px">
                    <span>卸妆</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/14.jpg" width="50px" height="50px">
                    <span>BB霜</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/15.jpg" width="50px" height="50px">
                    <span>CC霜</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/16.jpg" width="50px" height="50px">
                    <span>面部护理</span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        jumplist(){
            this.$router.push("/Wash")
        }
    },
}
</script>
<style scpoed>
    div#box{
        padding:5px 10px;
    }
      div#list{
        display:flex;
        justify-content:space-between;
        flex-wrap: wrap;
        padding:5px 17px;
        border:1px solid #ddd;
        border-radius: 12px;
        background-color:#fff;
        box-shadow: 2px 2px  6px 0px #aaa;
    }
    div.item {
        margin:5px 8px;
    }
     div#list a{
         display:flex;
         flex-direction: column;
         text-align:center;
         color:#000;
         font-size:12px;
         font-family:"微软雅黑";
     }
</style>