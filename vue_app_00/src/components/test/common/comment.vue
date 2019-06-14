<template>
    <div id="comment">
        <!-- <h3></h3> -->
        <hr>
        <div id="c-list" v-for="(l,i) in list" :key="i"> 
            <div class="user"><div id="uimg"></div><div class="uname"> {{l.uname}}</div><img src="../../../assets/tubiaoheji-.png" width="25px" height="25px" > </div>
            <div class="content">{{l.content}}</div>
            <div class="date">{{l.date}}</div>
        </div>
        <mt-button  size="large">加载更多</mt-button>
        <textarea name="com" id="com1" cols="10" rows="6" placeholder="来分享你的护肤心得吧(最多120个字符)" maxlength="120"></textarea>
        <mt-button size="large">发表</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 评论数据
            list:[
                    {cid:1,uname:"小苏苏",date:"2018-03-12",content:"这一款真的挺好用"},
                    {cid:2,uname:"骑着蜗牛的小豆",date:"2017-03-23",content:"油皮不推荐，闷豆啊"},
                    {cid:3,uname:"苏苏",date:"2018-06-12",content:"推荐"},
                    {cid:4,uname:"铛铛",date:"2019-04-12",content:"这个我用着有些过敏，鸡肋！！！"},
                    {cid:5,uname:"y_123",date:"2017-08-03",content:"我感觉这个还行，但是性价比不高啊"},
                    {cid:1,uname:"啦啦啦啦",date:"2019-05-01",content:"洗的干净还温和，价格美丽，已经用了好几年了"},
                    {cid:2,uname:"仙女~小甜甜",date:"2017-03-23",content:"没觉得有什么特别的地方"},
                ]
        }
    },
}
</script>
<style scoped>
    div#comment{
        padding:3px 10px;
    }
    div.user{
        display:flex;
        justify-content:space-between;
        height:38px;
        width:100%;
        font-size:15px;
        color:#ccc;
        /* background-color:blanchedalmond;
         */
        text-align: center;
        padding:2px 20% 2px 5%;
        margin-bottom:8px;
        position: relative;
    }
    div.user img{
        position:absolute;
        left:316px;
    }
    div#c-list{
        border:1px solid #ddd;
        margin-bottom:10px;
    }
    div#uimg{
        display:inline-block;
        height:35px;
        width:35px;
        border-radius:50%;
        /* border:1px solid #aaa; */
        background-color:#ddd;
        background-image: url('../../../assets/xigua.png');
        background-repeat: no-repeat;
        background-position:4px 2px;
        background-size:28px 28px;
    }
    div.uname{
        /* width:60px; */
        height:20px;
        display: inline-block;
        color:#555;
        font-size:13px;
        text-align: left;
        position:absolute;
        left:59px;
        top:5px;
    }
    div.user span:first-child{
        color:#777;
    }
    div.content{
        /* border-top:1px solid #ddd; */
        /* min-height:60px; */
        text-indent:30px;
        font-size:15px;
        color:#000;
        padding:3px 12px;
        font-family: "Yu Gothic UI";
    }  
div.date{
    font-size:10px;
    color:#aaa;
    padding:3px 12px;
    text-align: right;

}  
.mint-button--default {
    background-color:#f1a3cc;
    color:#fff;

}
</style>