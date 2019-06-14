<template>
    <div id="message">
        <div class="head">
            <span>消息</span>
        </div>
        <div class="bar">
            <div class="bar-item">
                <img src="../../../assets/xihuan.png" style="width:45px;height:45px;"/>
                <span>赞和收藏</span>
            </div>
            <div class="bar-item">
                <img src="../../../assets/web-icon_kexiedaichongwu.png" style="width:45px;height:45px;"/>
                <span>新增关注</span>
            </div>
            <div class="bar-item">
                <img src="../../../assets/icon.png" style="width:45px;height:45px;"/>
                <span>评论和@</span>
            </div>
        </div>
        <div style="height:20px;background-color:#ddd;"></div>
        <div class="list">
            <div class="list-item">
                <img src="../../../assets/ic_emoji.png" style="width:45px;height:45px;"/>
                <div class="right">
                    <div class="mid">
                        <span class="title">通知消息</span>
                        <span class="comment">父亲节礼物准备好了吗？</span>
                    </div>
                    <span class="time">09:03</span>
                </div>
            </div>
           
            <div class="list-item">
                <img src="../../../assets/mlogo.jpg" style="width:45px;height:45px;"/>
                <div class="right">
                    <div class="mid">
                        <span class="title">美妆成长助手</span>
                        <span class="comment">欢迎来到美妆种草团~</span>
                    </div>
                    <span class="time">11:09</span>
                </div>
            </div>
            <div class="list-item">
                <img src="../../../assets/xigua.png" style="width:45px;height:45px;"/>
                <div class="right">
                    <div class="mid">
                        <span class="title">Kiki</span>
                        <span class="comment">我们已经相互关注啦，开始聊天吧☺</span>
                    </div>
                    <span class="time">14:38</span>
                </div>
            </div>
             <div class="list-item">
                <img src="../../../assets/mine.png" style="width:45px;height:45px;"/>
                <div class="right">
                    <div class="mid">
                        <span class="title">草莓味的小仙女</span>
                        <span class="comment">[推荐种草]</span>
                    </div>
                    <span class="time">21:17</span>
                </div>
            </div>
            <div class="list-item">
                <img src="../../../assets/mine.png" style="width:45px;height:45px;"/>
                <div class="right">
                    <div class="mid">
                        <span class="title">草莓味的小仙女</span>
                        <span class="comment">[推荐种草]</span>
                    </div>
                    <span class="time">21:17</span>
                </div>
            </div>
            <div class="list-item">
                <img src="../../../assets/mine.png" style="width:45px;height:45px;"/>
                <div class="right">
                    <div class="mid">
                        <span class="title">草莓味的小仙女</span>
                        <span class="comment">[推荐种草]</span>
                    </div>
                    <span class="time">21:17</span>
                </div>
            </div>
            <div class="list-item">
                <img src="../../../assets/mine.png" style="width:45px;height:45px;"/>
                <div class="right">
                    <div class="mid">
                        <span class="title">草莓味的小仙女</span>
                        <span class="comment">[推荐种草]</span>
                    </div>
                    <span class="time">21:17</span>
                </div>
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
<style scoped>
    .message{
        background-color:#FAFAFA;
    }
    .head{
        display:flex;
        width:100%;
        z-index:999;
        justify-content:space-around;
        align-items:center;
        height:50px;
        line-height:50px;
        color:#666;
        font-size:18px;
        background-color:#FAFAFA;
        font-weight:bold;
    }
    .bar{
        display:flex;
        width:100%;
        justify-content:space-between;
        align-items:center;
        height:120px;
        line-height:120px;
        color:#666;
        font-size:14px;
        background-color:#FAFAFA;
        padding:20px 0px;
        
    }
    .bar-item{
        display:flex;
        flex-direction: column;
        width:33.3%;
        height:80px;
        line-height:80px;
        justify-content:space-between;
        align-items:center;
    }
    .bar-item>span{
        height:30px;
        line-height:30px;
    }
   
    .list-item{
        display:flex;
        justify-content:space-around;
        align-items:center;
        height:80px;
        width:100%;
        padding:10px 0px 10px 10px;
        box-sizing:border-box;
       
    }
    .right{
        display:flex;
        justify-content:space-between;
        width:80%;
        height:80px;
        border-bottom:1px solid #ccc;
    }
    .mid{
        display:flex;
        flex-direction: column;
        justify-content:space-around;
        align-items:left;
    }
    .title{
        font-size:16px;
        font-weight:1rem;
        margin-top:8px;
        color:#393939;
    }
    .comment{
        font-size:15px;
        color:#6A6A6A;
        margin-bottom:5px;
    }
    .time{
        margin-top:16px;
        font-size:14px;
        color:#6A6A6A;
    }
</style>