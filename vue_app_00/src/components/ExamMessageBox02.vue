<template>
    <div>
        <h1>啦啦啦~~德玛西亚！！！</h1>
        <button @click="openAlert">警告确认</button>
        <button @click="openConfirm">提示确认</button>
        <button @click="openPrompt">输入确认</button>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        openAlert(){
            //一个交互的提示消息
            this.$messagebox({
                title:"消息",           //标题
                message:"执行操作成功"  //内容
            })
        },
        openConfirm(){
            //确认提示框：确认，取消
            this.$messagebox({
                title:"消息",
                message:"是否删除指定数据",
                showConfirmButton:true,    //是否显示确认按钮 
                showCancelButton:true     //是否显示取消按钮
            }).then(action=>{
                console.log(action);
            });
            //then回调函数
        },
        openPrompt(){
            this.$messagebox({
                title:"消息",
                message:"输入数据",
                showConfirmButton:true,
                showInput:true,//是否显示输入框
                inputValue:"",//输入框默认值
                inputType:"text",//输入框的类型
                inputPlaceholder:"请输入年龄"//输入框默认占位符
            }).then(action=>{
                console.log(action);
            })
        }
    }
    
}
</script>
<style>

</style>

