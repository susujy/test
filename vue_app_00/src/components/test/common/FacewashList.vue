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
// import  Facewash from "./Facewash"
//负责引入json文件
// import listjson from "../json/facewashlist.json"
export default {
  data(){
    return {
      datas:{"data":[
                      {"id":1,
                        "img":"../../assets/a_7.png",
                        "title":"芙丽芳丝freeplus 净润洗面霜",
                        "comment":"(5947人点评)",
                        "price":"￥150.00"},
                      {
                        "id":2,
                        "img":"../../assets/a_7.png",
                        "title":"旁氏 POND’S 米粹润泽洁面乳",
                        "comment":"(2369人点评)",
                        "price":"￥38.00"
                      },
                      {
                        "id":3,
                        "img":"../../assets/a_7.png",
                        "title":"丝塔芙Cetaphil 洁面乳",
                        "comment":"(6678人点评)",
                        "price":"￥98.00"
                      },
                      {
                        "id":4,
                        "img":"../../assets/a_7.png",
                        "title":"珊珂SENKA棉润泡沫洁面乳",
                        "comment":"(8300人点评)",
                        "price":"￥52.00"
                      },
                      {
                        "id":5,
                        "img":"../../assets/a_7.png",
                        "title":"珂润Curel润浸保湿洁颜泡沫",
                        "comment":"(5947人点评)",
                        "price":"￥150.00"
                      },
                      {
                        "id":6,
                        "img":"../../assets/a_7.png",
                        "title":"雅诗兰黛ESTEE LAUDER 焕采洁面乳",
                        "comment":"(3994人点评)",
                        "price":"￥280.00"
                      },
                      {
                        "id":7,
                        "img":"../../assets/a_7.png",
                        "title":"微信支付",
                        "comment":"(5947人点评)",
                        "price":"￥150.00"
                      },
                      {
                        "id":8,
                        "img":"../../assets/a_7.png",
                        "title":"微信支付",
                        "comment":"(5947人点评)",
                        "price":"￥150.00"
                      },
                      {
                        "id":9,
                        "img":"../../assets/a_7.png",
                        "title":"微信支付",
                        "comment":"(5947人点评)",
                        "price":"￥150.00"
                      },
                      {
                        "id":10,
                        "img":"../../assets/a_7.png",
                        "title":"微信支付",
                        "comment":"(5947人点评)",
                        "price":"￥150.00"
                      },
                      {
                        "id":11,
                        "img":"../../assets/a_7.png",
                        "title":"微信支付",
                        "comment":"(5947人点评)",
                        "price":"￥150.00"
                      },
                      {
                        "id":12,
                        "img":"../../assets/a_7.png",
                        "title":"微信支付",
                        "comment":"(5947人点评)",
                        "price":"￥150.00"
                      }
        ]
      }
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
