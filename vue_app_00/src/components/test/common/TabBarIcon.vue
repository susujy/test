<!--TabBarIcon.vue-->
<!--下面选中变色的图片-->
<template>
    <div>
        <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle">
    </div>
</template>
<script>
export default {
    props:{
        focused:false,
        selectedImage:{default:""},
        normalImage:{default:""}
    },
    data(){
        return {

        }
    },
    methods:{
        
    }
}
</script>
<style scoped>
    .imgstyle{
        width:30px;
        height:30px;
    }
</style>