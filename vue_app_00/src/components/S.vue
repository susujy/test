<template>
 <div>
  <h3>子组件 S.vue</h3>  
  <h3>{{meg}}</h3>
  <img :src="img_url" />
  <button @click="add">点击事件</button>
</div>
</template>
<script>
export default {
  name:"S",  //子组件名称
  props:{    //接收父组件数据
    meg:{default:""},//meg默认字符串
    img_url:{default:""},//默认字符串
    add:{type:Function}//函数
  }
}
</script>

