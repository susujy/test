<!--MessageList.vue-->
<template>
  <div>
     <facewash
      class="itemstyle"
      v-for="(item,index) in datas.data"
      :key="index"
      :id="item.id"
      :title="item.title"
      :comment="item.comment"
      :price="item.price"
      :imgurl="require('../../../assets/a_7.png')"
      :itemClick="clickitem"
     ></facewash>
     
  </div>
</template>
<script>
//负责引入Message子组件
import  Facewash from "./Facewash"
//负责引入json文件
import listjson from "../json/facewashlist.json"
export default {
  data(){
    return {
      datas:listjson
    }
  },
  methods: {
    clickitem(id){
      console.log(id);
    }
  },
  components:{
    "facewash":Facewash
  }
}
</script>
<style scoped>

</style>
