<template>
    <div>
        <message class="itemstyle"
        v-for="(item,index) in datas.data"
        :key="index" :id="item.id"
        :imgurl="require('../../../assets/a_7.png')"
        :title="item.title"
        :subtitle="item.subtitle"
        :sendtime="item.time"
        :itemClick="Clickitem">
        </message>
    </div>
</template>
<script>
import Message from "./Message.vue"
// 负责引入json文件
import messagejson from "../json/messagelist.json"
export default {
    
    data(){
        return {
            datas:messagejson
        }
    },
    methods:{
        Clickitem(id){
            console.log(id);
        }
    },
    components:{
        "message":Message,
    },
}
</script>
<style scoped>
    
</style>