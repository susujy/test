<template>
   <div class="page-tabbar">
      <div class="page-wrap">
      <!--Wash.vue-->
      <!--1:顶部标题子组件-->      
      <titlebar
       topTitle="洁面"
       :brand="mybrand"
       :award="myaward"
       :select="myselect"
      ></titlebar>
      <!--2:div保留(标题)48px高度-->
      <div style="margin-top:60px;">
      </div>
      <!--Home.vue 入口全局组件-->
      <!--3:切换面板列表-->
      <mt-tab-container class="page-tabbar-container">
        <mt-tab-container-item>
         <washlist>
         </washlist>
        </mt-tab-container-item> 
      </mt-tab-container>
   </div>
   </div>
</template>
<script>
import TitleBar from "./common/ListTitleBar.vue"
import WashList from "./common/FacewashList.vue"
export default {
  data(){
    return {
        
    }
  },
  methods: {
    mybrand(){},
    myaward(){},
    myselect(){},
  },
  components:{
    "titlebar":TitleBar,
    "washlist":WashList,
  }
}
</script>
<style  scoped>
/*最外层父元素Home.vue*/
.page-tabbar{
  overflow: hidden;/*溢出隐藏*/
}
.mint-tab-container-item{
    margin-top:20px;
}
</style>


