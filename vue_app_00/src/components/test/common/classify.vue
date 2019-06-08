<template>
    <div id="box">
        <div id="list">
            <div class="item">
                <a href="">
                    <img src="../../../assets/jiemianru.png" width="50px" height="50px">
                    <span>洁面</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/huazhuangshui.png" width="50px" height="50px">
                    <span>化妆水</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/jinghualou.png" width="50px" height="50px">
                    <span>精华</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/ruye.png" width="50px" height="50px">
                    <span>乳液</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/mianshuang.png" width="50px" height="50px">
                    <span>面霜</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/qidianfendi.png" width="50px" height="50px">
                    <span>粉底</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/kouhong.png" width="50px" height="50px">
                    <span>口红</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/saihong.png" width="50px" height="50px">
                    <span>腮红</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/yanyingpan.png" width="50px" height="50px">
                    <span>眼影</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/xiangshui.png" width="50px" height="50px">
                    <span>香水</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/huazhuangshua.png" width="50px" height="50px">
                    <span>工具</span>
                </a>
            </div>
            <div class="item">
                <a href="">
                    <img src="../../../assets/leimupinleifenleileibie1-copy.png" width="50px" height="50px">
                    <span>其他</span>
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
         font-size:15px;
         font-family:"楷体";
     }
</style>