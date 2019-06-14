<template>
    <div class="contanier">
            <div>
                <p id="p">玫珂菲MAKE UP FOR EVER 全新双用水粉霜</p> 
            </div>
            <div>
                <img class="imgmkf" src="../../../assets/i000044215_0_1_1_3.png" alt="">
                <span id="sp1">8.0</span>
                <img class="imgxx" src="../../../assets/xinxin.png" alt="">
                <span id="sp2">12168人想买 · 3354人评价</span>
                <span id="sp3">￥400.00 / 50ml</span>
            </div>
            <div>
                <button class="btn1">种草</button>
                <img class="imgxc" src="../../../assets/xiaocao.png" alt="">
                <button class="btn2">开封</button>
                <img class="imgkf" src="../../../assets/ruye.png" alt="">
            </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
div.contanier{
    margin:5px 5px;
    border:1px solid #ddd;
    padding-bottom:10px;
    border-radius:10px;
}

/* 玫珂菲 */
.imgmkf{
    width:150px;
    height:150px;
    margin-left:20px;
}
/* 星星 */
.imgxx{
    width:150px;
    height:30px;
    position: absolute;
    top:150px;
    left:185px;
}
/* 字 */
#p{
    font-size:15px;
    font-family: "SimHei";
    color:#000;
    padding:22px 41px;
    margin-bottom:20px;
}
#sp1{
    font-size:30px;
    position: absolute;
    top:120px;
    left:240px;
}
#sp2{
    font-size:14px;
    color:#666;
    position: absolute;
    top:190px;
    left:173px;
}
#sp3{
    font-size:14px;
    color:#666;
    position: absolute;
    top:215px;
    left:200px;
}
/* btn */
.btn1{
    font-size:16px;
    color: rgb(53, 145, 53);
    background-color:rgb(216, 252, 216);
    padding:8px 40px 8px 80px ;
    margin-left:20px;
    border:0;
    margin-top:50px;
}
.btn2{
    font-size:16px;
    color: rgb(182, 110, 84);
    background-color:lightpink;
    padding:8px 50px 8px 70px ;
    margin-left:30px;
    border:0;
    margin-top:50px;
}
/* logo */
.imgxc{
    width:20px;
    height:20px;
    position: absolute;
    top:308px;
    left:70px;
}
.imgkf{
    width:30px;
    height:30px;
    position: absolute;
    top:300px;
    left:233px;
}
</style>