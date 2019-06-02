<template>
  <div>
    <h3>父组件</h3>
    <ss
     meg="微信(11)"
     :img_url="require('../assets/100x100.png')"
     :add="myadd"
    >
    </ss>
  </div>
</template>
<script>
//引入子组件
//1:引入
//2:注册
//3:调用子组件
//4:传值
import S from "./S";
export default {
  data(){
    return {}
  },
  methods: {
    myadd(){
      console.log("+");
    }
  },
  components:{
    "ss":S
  }
}
</script>

