<template>
    <div class="container">
        <!-- 操作区域 -->
        <!-- 账号 -->
        <mt-field :placeholder="accountPlaceholder"></mt-field>
        <!-- 密码 -->
        <!-- 短信验证码 -->
        <!-- 免费注册 -->
        <!-- 登录和切换登录验证码 -->
        <div>
            <button>登录</button>
            <!-- 验证提示 用户名空 -->
            <button @click="openToast">账户密码登录</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            accountPlaceholder:"手机号/邮箱/会员名",
            //当前登录方式
            isUserAccount : true,
            //为按钮绑定点击事件
        }
    },
    //1.添加一个methods
    //2.changeLoginMethod
    methods:{
        openToast(){
            //3.如果当前是以账户登录
           if(this.isUserAccount){
               //4.修改提示消息 手机号/邮箱/会员名
               this.accountPlaceholder="手机号/邮箱/会员名",
               this.isUserAccount=false
           }else{
               //5.否则修改提示 请输入手机号码
               this.accountPlaceholder="手机号码",
               this.isUserAccount=true
               //6.isUserAccount切换
           }
        }
    }
}
</script>
<style>

</style>
