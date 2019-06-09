<template>
<div class="container">
	<div class="beauty_makeup">
		<img src="" alt="">
	</div>

	<div>
		<input class="phone" type="text" v-model="uname" placeholder="请输入手机号码">
		<input class="verification_code" v-model="upass" type="text" :placeholder="verificationCode">
		<a href="javascript:;" id="btn1" v-show="agree">获取验证码</a>
	</div>
	<div>
		<span id="span" v-show="agree">登录即表示同意</span>
		<a id="a1" href="javascript:;" v-show="agree">《美妆心得用户协议》</a>
		<a id="forget" href="javascript:;" v-show="forget">忘记密码</a>
		<button id="btn2" @click="go">登录</button>
	</div>
	<div>
		<a id="a3" href="javascript:;" @click="openToast">{{login}}</a>
	</div>
	<div>
		<hr id="hr1">
		<hr id="hr2">
		<span id="span1">快捷登录</span>
	</div>
	<div class="quick_login">
		<img id="img1" src="../../assets/weixin.png" alt="">
		<img id="img2" src="../../assets/qq.png" alt="">
		<img id="img3" src="../../assets/weibo.png" alt="">
	</div>
	
</div>
</template>

<script>
export default {
	data(){
		return {
			verificationCode:"请输入6位短信验证码",
			isUserAccount : true,
			login:"账号登录",
			agree:true,
			forget:false,
			uname:"",
			upass:""
		}
	},
	methods:{
		openToast(){
			//如果当前是以账户登录
			if(this.isUserAccount){
				//4.修改提示消息 手机号/邮箱/会员名
				this.verificationCode="请输入6位短信验证码",
				this.login="账号登录",
				this.isUserAccount=false
				this.agree=true
				this.forget=false
			}else{
				//5.否则修改提示 请输入手机号码
				this.verificationCode="请输入6-16位密码",
				this.login="验证码登录",
				this.isUserAccount=true,
				this.agree=false
				this.forget=true
				//6.isUserAccount切换
			}
		},
		go(){
			//1.获取用户输入用户名   3~10
			var n= this.uname
			var p= this.upass
			console.log(n,p)
			//3.创建两个正则表达式
			var nreg=/^1(3|4|5|6|7|8|9)\d{9}$/ig
			var preg=/^[a-zA-Z0-9]{3,8}$/ig
			//4.判断用户名格式不正确 提示出错
			if(!nreg.test(n)){
			this.$toast("手机号码格式错误");
			return;
			}
			//5.判断密码格式不正确   提示出错
			else if(!preg.test(p)){
			this.$toast("密码格式错误")
			return;
			}
			//6.将用户名和密码发送   ajax请求
			//7.并且获取服务器返回结果
			//8.返回失败            提示
			//9.返回成功 
		}
	}
}
</script>
<style scoped>
/* 美妆心得图片 */
.beauty_makeup{
	height:100px;
}
/* 手机号码 */
.phone{
	width:75%;
	border-radius: 5px;
	margin-left:45px;
	margin-top:28px;
}
/* 验证码 */
.verification_code{
		width:75%;
		border-radius: 5px;
		margin-left:45px;
		margin-right:0px;
	}
#btn1{
	color:#dd4d4d;
	font-size:17px;
	position: absolute;
	top:191px;
	left:232px;
}
/* 协议 */
#span{
	font-size:14px;
	margin-left:70px;	
}
#a1{
	font-size:14px;
	text-decoration: none;
	color:#dd4d4d;
}
#forget{
	font-size:14px;
	color:#000;
	margin-left:260px;
}
/* 登录 */
#btn2{
	width:75%;
	border-radius: 25px;
	margin-left:45px;
	margin-top:25px;
	padding:5px 0px;
	background-color:#ecc3ca;
	font-size:17px;
	color:#f00;
}
#a3{
	display: inline-block;
	margin-left:150px;
	margin-top:20px;
	font-size:16px;
	color:#000;
	border-bottom:1px solid #000;
}
/* hr */
#hr1{
	width:10%;
	margin-top:120px;
	margin-left:110px;
	display: inline-block;
}
#hr2{
	width:10%;
	display: inline-block;
	margin-top:120px;
	margin-left:70px;
}
#span1{
	font-size:13px;
	position: absolute;
	top:473px;
	left:160px;
}
/* 快捷登录 */
.quick_login{
	display: flex;
	justify-content: space-around;
	padding:10px 70px;
}
.quick_login>img{
	width:40px;
	height:40px;
}
#img2{
	width:45px;
	height:45px;
}
</style>
