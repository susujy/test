<template>
    <div>
        <div id="list">
            <ul>
                <li class="big" v-for="(l,i) in list" :key="i">
                    <img :src="l.url" width="100%">
                    <p class="text">{{l.dec}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
var li=document.querySelectorAll("LI");
console.log(li);
export default {
    data() {
        return {
            list:[{lid:1,url:require('../../../assets/list1.jpg'),dec:"韩国进口 JMsolution 玫瑰粉色防晒棒 全身水润防晒霜防晒棒 spf50"},
            {lid:2,url:require('../../../assets/list2.jpg'),dec:"韩国 RECIPE莱斯壁水晶防晒喷雾50ml 小S同款SPF50+防紫外线防水防汗"},
            {lid:3,url:require('../../../assets/list3.jpg'),dec:"曼秀雷敦 （Mentholatum） 新碧轻透润色 防晒隔离乳SPF50+PA+++30g 提亮肤色清爽隔离持久 妆前打底不脱妆"},
             {lid:4,url:require('../../../assets/list4.jpg'),dec:"美国进口 Coppertone（水宝宝）纯净防晒乳 SPF50 177ml/瓶 （温和滋润 防水隔离 轻薄保湿）"}]
        }
    },
}
</script>
<style scoped>
    /* div#list{
        display:flex;
        justify-content:space-around;
    } */
    ul{list-style:none;padding:0;width:100%;}
    li{border:1px solid #ccc;
    margin-bottom:5px;
    margin-left:6px;
    padding:4px;
    float:left;
    border-radius:10px;
    box-shadow:2px 2px 0px 0px  #ddd;
    
    }
    li.big{
        width:48%;
        height:230px;
        /* clear: both; */
    }
    p.text{
    margin-top:8px;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical; 
    word-break: break-all; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box; 
    font-size:12px;
    color:#000;
    height:45px !important;
    
    }
</style>