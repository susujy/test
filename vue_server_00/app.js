//app.js node.js 服务器
//1:第三方模块 
//  express          web服务器
//  cors             跨域
//  express-session  session
//  body-parser      处理post数据
//  multer           上传文件
//  fs               文件操作(内置)
//  mysql            mysql驱动模块 
//下载指令:联网 
//npm i express-session body-parser //multer mysql express cors
//1:引入二个模块  express mysql
const express = require("express");
const mysql = require("mysql");
//2:创建连结池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"xz",
  connectionLimit:15
})
//3:创建express对象
var server = express();

//5.处理跨域请求
const cors=require("cors");
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credebtuaks:true
}))

//6.添加session功能
const session=require("express-session")
server.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}))

//9:绑定监听端口
server.listen(3000);
//10：接收用户登录请求

server.get("/login",(req,res)=>{
   //1:接收脚手架参数 uname upass
   var uname = req.query.uname;
   var upass = req.query.upass;
   //2:sql
   //  SELECT id FROM t_login WHERE //uname = ? AND upass = md5(?)
   var sql =" SELECT id FROM t_login";       sql+=" WHERE uname = ?";
       sql+=" AND upass = md5(?)";
   //3:返回结果 
   //  {code:1,msg:"登录成功"}
   //  {code:-1,msg:"用户名或密码有误"}
   pool.query(sql,[uname,upass],(err,result)=>{
     if(err)throw err;
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"});
     }else{
       req.session.uid=result[0].id
       res.send({code:1,msg:"登录成功"});
     }
   });
});




