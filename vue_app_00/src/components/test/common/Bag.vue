<template>
    <div class="content">
        <div class="open">
            <span class="s1">我的开封</span>
            <p class="p1">护肤品有效期，我来帮你记录</p>
            <div class="add">
                <span>添加开封</span>
            </div>
        </div>
        <div class="had">
                <div class="product">
                    <div class="pImg">
                        <img src="../../../assets/1.jpg" alt="">
                    </div>
                    <span class="small">剩余183天</span>
                </div>
                <div class="product">
                    <div class="pImg">
                        <img src="../../../assets/2.jpg" alt="">
                    </div>
                    <span class="small">剩余183天</span>
                </div>
                <div class="product">
                    <div class="pImg">
                        <img src="../../../assets/3.jpg" alt="">
                    </div>
                    <span class="small">剩余183天</span>
                </div>
                <div class="product">
                    <div class="pImg">
                        <img src="../../../assets/4.jpg" alt="">
                    </div>
                    <span class="small">剩余183天</span>
                </div>
        </div>
        <div class="seeding">
            <div class="mine">
                <span class="s1">我的种草</span>
                <div class="create">
                    <span >创建专辑</span>
                </div>
            </div>
            <div class="first">
                <div class="firstImg">
                    <img src="../../../assets/13.jpg" alt="">
                </div>
                <div class="firstText">
                    <span class="s2">我的初收藏</span>
                    <p class="p2">小小的喜欢汇集在一起，就变成了了大大的动力</p>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return { }
    }
}
</script>
<style scoped>

.content{
    font-family: "黑体";
    background-color:#fff;
}
.open{
    padding-left:15px;
    height:150px;
    padding-top:60px;
    background-color:#f3b0bbbb;
}
.s1{
    font-size:20px;
}
.p1{
    font-size:12px;
    color:#000;
    font-weight:300;
}
.add{
    width:65px;
    height:26px;
    padding-top:3px;
    font-size:12px;
    text-align:center;
    background-color:#fff;
    border-radius:13px;
}
.had{
    width:500px;
    height:190px;
    padding-right:7px;
    padding-right:7px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    overflow:hidden;
}
.product{
    width:105px;
    
}
.pImg{
    border:1px solid #ddd;
    box-shadow:1px 5px 5px 1px #ddd;
    border-radius:6px;
    margin-bottom:15px;
}
.pImg img{width:105px;}
.small{
    font-size:6px;
    margin:16px;

    
}
.seeding{
    padding-left:15px;
    padding-top:20px;
    padding-right:10px;
}
.seeding{
    height:310px;
}
.mine{
    width:100%;
    height:50px;
    display:flex;
    justify-content:space-between;
    align-items:center;


}
.create{
    width:65px;
    height:26px;
    padding-top:3px;
    font-size:10px;
    font-weight:lighter;
    text-align:center;
    color:#fff;
    background-color:#fea3cc;
    border-radius:13px;
}
.first{
    height:100px;
    display:flex;
    align-items:center;
    border:1px solid #ddd;
    border-radius:6px;
    box-shadow:1px 2px 1px 1px rgb(185, 184, 184);
}
.firstImg img{
    width:80px;
}
.s2{
    font-size:16px;

}
.p2{
    font-size:10px;
    color:#000;
    font-weight:300;
}
</style>
