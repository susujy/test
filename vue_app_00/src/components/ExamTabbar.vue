<template>
    <div>
        <h3>底部选项卡</h3>
        <!-- 面板 -->
        <div class="page-tab-container">
            <mt-tab-container v-model="selected" class="page-tabbar-tab-container">
                <mt-tab-container-item id="外卖">
                    <mt-cell v-for="n in 10" title="餐厅" :key="n"></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="订单">
                    <mt-cell v-for="n in 8" title="订单" :key="n"></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="发现">
                    <mt-cell v-for="n in 6" title="发现" :key="n"></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="我的">
                    <mt-cell v-for="n in 4" title="我的" :key="n"></mt-cell>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <!-- 底部选项卡 -->
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="外卖">
				<img slot="icon" src="../assets/a_7.png">外卖
			</mt-tab-item>
			<mt-tab-item id="订单">
				<img slot="icon" src="../assets/ic_emoji.png">订单
			</mt-tab-item>
            <mt-tab-item id="发现">
				<img slot="icon" src="../assets/ic_program.png">发现
			</mt-tab-item>
            <mt-tab-item id="我的">
				<img slot="icon" src="../assets/ic_game.png">我的
			</mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected:""
        }
    }
}
</script>
<style scoped>
    
</style>