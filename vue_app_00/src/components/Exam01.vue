<template>

<div class="exam01">
    <h1>mint-ui组件库第一个组件Toast</h1>
    <h2>简短提示消息</h2>
    <button @click="openToast">显示一个提示消息</button>
</div>

    
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        //点击按钮显示一个提示消息
        openToast(){
            // console.log("啦啦啦德玛西亚！！！");
            this.$toast({
                message:"操作成功",
                position:"middle",//默认
                className:"mytip",
                duration:1500,//默认
                iconClass:"iconfont icon-bofang"
            })
        }
    },

}
</script>

<style>
.mytip{
    color:brown !important;
    font-size:14px;
}
.iconfont{
    font-size:36px !important;
}

    
</style>