<template>
    <div id="any">
        <div id="year-old">
            <h5>年龄结构</h5>
            <div class="item">
                <span>18岁以下</spaN>
                <div class="box">
                    <progress value="0.1"></progress>
                </div> 
            </div>
            <div class="item">
                <span>19-24岁</spaN>
                <div class="box">
                    <progress value="0.27"></progress>
                </div> 
            </div>
            <div class="item">
                <span>25-30岁</spaN>
                <div class="box">
                    <progress value="0.56"></progress>
                </div> 
            </div>
            <div class="item">
                <span>31-39岁</spaN>
                <div class="box">
                    <progress value="0.133"></progress>
                </div> 
            </div>
            <div class="item">
                <span>40岁以上</spaN>
                <div class="box">
                    <progress value="0"></progress>
                </div> 
            </div>
        </div>
         <div id="skin">
            <h5>肤质比例</h5>
            <div class="item">
                <span>干性</spaN>
                <div class="box">
                    <progress value="0.128"></progress>
                </div> 
            </div>
            <div class="item">
                <span>油性</spaN>
                <div class="box">
                    <progress value="0.09"></progress>
                </div> 
            </div>
            <div class="item">
                <span>中性</spaN>
                <div class="box">
                    <progress value="0.093"></progress>
                </div> 
            </div>
            <div class="item">
                <span>混合</spaN>
                <div class="box">
                    <progress value="0.504"></progress>
                </div> 
            </div>
            <div class="item">
                <span>敏感</spaN>
                <div class="box">
                    <progress value="0.181"></progress>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
div#any{
    display:flex;
    padding:5px 5px;
    justify-content:space-around;
}
#year-old,#skin{
    border:1px solid #ddd;
    border-radius:10px;
    padding:3px 5px;
}
div{
    font-size:13px;
    /* font-family: "宋体"; */
}
div.item{
    line-height:15px;
    display: flex;
}
h5{
    color:#000;
    font-size:15px;
   
    font-weight: bold;
}
#skin span{width:45px;}
span{
    display:inline-block;
    width:60px;
     font-family: "幼圆";
      font-weight:600;
}
div.box{
    width:80px;
    height:15px;
    display:inline-block;
    border-radius:20px;
    border:1px solid #ccc;
    overflow: hidden;
    /* position:relative; */
    /* line-height: 15px; */
}
    progress{
        width:80px;
        height:16px;
        vertical-align:middle;
        color:blue;
        /* border-radius:10px; */
        margin:-5px 0px 0px -1px;
    }
</style>