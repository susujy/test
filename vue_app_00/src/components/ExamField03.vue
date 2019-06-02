<template>
    <div class="field">
        <h1>输入域编辑器</h1>
        <div class="page-title">
            <mt-field label="用户名" placeholder="请输入用户名" :attr="{maxlength:10}" ></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" :attr="{maxlength:16}"></mt-field>
            <mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
        </div>
        <div class="page-part">
            <mt-field label="邮箱" placeholder="成功状态" state="success"></mt-field>
            <mt-field label="邮箱" placeholder="失败状态" state="error"></mt-field>
            <mt-field label="邮箱" placeholder="警告状态" state="warning"></mt-field>
            <div class="page-part">
                <mt-field label="验证码" placeholder="请输入验证码">
                    <img src="../assets/logo.png" height="78px" width="100px" alt="">
                </mt-field>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
<style>
    
</style>