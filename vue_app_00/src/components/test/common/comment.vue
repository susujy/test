<template>
    <div id="comment">
        <!-- <h3></h3> -->
        <hr>
        <textarea name="com" id="com1" cols="10" rows="6" placeholder="来分享你的护肤心得吧(最多120个字符)" maxlength="120"></textarea>
        <mt-button size="large">发表</mt-button>
        <div id="c-list" v-for="(l,i) in list" :key="i"> 
            <div class="user"><span>用户:{{l.uname}}</span><span>{{l.date}}</span></div>
            <div class="content">{{l.content}}</div>
        </div>
        <mt-button  size="large">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 评论数据
            list:[
                    {cid:1,uname:"123",date:"2018-03-12",content:"这一款真的挺好用"},
                    {cid:2,uname:"斑马",date:"2017-03-23",content:"油皮不推荐，闷豆啊"},
                    {cid:3,uname:"苏苏",date:"2018-06-12",content:"推荐"},
                    {cid:4,uname:"铛铛",date:"2019-04-12",content:"这个我用着有些过敏，鸡肋！！！"},
                    {cid:5,uname:"y_123",date:"2017-08-03",content:"我感觉这个还行，但是性价比不高啊"},
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
        height:25px;
        font-size:15px;
        color:#ccc;
        background-color:blanchedalmond;
        text-align: center;
        padding:2px 20% 2px 10%s;
    }
    div.user span:first-child{
        color:#777;
    }
    div.content{
        border-top:1px solid #ddd;
        min-height:40px;
        text-indent:30px;
        padding:3px 12px;
    }
</style>