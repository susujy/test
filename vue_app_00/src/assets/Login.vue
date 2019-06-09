<template>
<div class="container">
	<div class="beauty_makeup">
		<img src="" alt="">
	</div>

	<div>
		<input class="phone" type="text" placeholder="请输入手机号码">
		<input class="verification_code" type="text" placeholder="请输入短信验证码">
		<button id="btn1">获取验证码</button>
	</div>
	<div>
		<span id="span">登录即表示同意</span>
		<a id="a1" href="javascript:;">《美妆心得用户协议》</a>
		<button id="btn2">登录</button>
	</div>
	<div>
		<a id="a3" href="javascript:;">账号登录</a>
	</div>
	<div>
		<hr id="hr1">
		<hr id="hr2">
		<span id="span1">快捷登录</span>
	</div>
	<div class="quick_login">
		<img id="img1" src="../img/weixin.png" alt="">
		<img id="img2" src="../img/qq.png" alt="">
		<img id="img3" src="../img/weibo.png" alt="">
	</div>
	
</div>
</template>

<script>
export default {

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
}
/* 验证码 */
.verification_code{
		width:50%;
		border-radius: 5px;
		margin-left:45px;
		margin-right:0px;
		border-right:0;
	}
#btn1{
	/* border:1px solid #f00; */
	margin-right:5px;
	padding:7px 3px;
	border-left:0;
	color:#dd4d4d;
	font-size:17px;
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
	margin-right:110px;
	float: right;
}
#span1{
	font-size:13px;
	position: absolute;
	top:485px;
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
