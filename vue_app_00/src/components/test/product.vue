<template>
<!-- 商品详情列表 -->
    <div>
        <detail></detail>
        <bar></bar>
        <comment></comment>
    </div>
</template>
<script>
import bar from './common/bar'
import comment from './common/comment'
import detail from './common/detail'
export default {
    data() {
        return {
            
        }
    },
     components:{
        "bar":bar,
        "comment":comment,
        "detail":detail
    },
    
}
</script>
<style scoped>
.app-container {
    padding:0px 0px;
}
</style>