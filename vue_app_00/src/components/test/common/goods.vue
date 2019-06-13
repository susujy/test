
	<style scoped>
		* {
			padding: 0;
			margin: 0;
		}
		
		.box {
			/* width: 300px; */
    		/* margin: 0 auto; */
			/* border: 1px solid #000; */
            background-color:#eee;
            display: flex;
            height: 500px;
		}
		
		.tabs li {
			float: left;
			margin-right: 4px;
			list-style: none;
		}
		
		.tabs .tab-link {
			display: block;
			width:89px;
			height: 49px;
			text-align: center;
			line-height: 49px;
			/* background-color: #5597B4; */
			color: #000;
			text-decoration: none;
            font-size:13px;
		}
		
		.tabs .tab-link.active {
			height: 47px;
			border-bottom: 2px solid #E35885;
			transition: .3s;
		}
		
		.cards {
			/* float: left; */
            
		}
		
		.cards .tab-card {
			display: none;
		}
		
		.clearfix:after {
			content: "";
			display: block;
			height: 0;
			clear: both;
		}
		
		.clearfix {
			zoom: 1;
		}
        /* ------------------- */
        .imgsufeina{
            width:100%;
            border-radius: 5px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            margin-bottom:5px;
            
            /* padding:10px 0px 0px 10px; */
        }
        .p1{
            font-size:13px;
            color:#000;  
        }
        .sp1{
            font-size:12px;
            color:#666;
            margin-left:30px;  
        }
        .imgshoucang{
            width:20px;
            height:20px;
            position: absolute;
            left:115px;
            top:60px;
        }
        .introduction{
            background-color: #fff;
            padding:5px 10px;
            position: relative;

        }
        .product{
            display: inline-block;
            width:170px;
            height:200px;
            border-radius: 5px;
            background-color: #fff;
            margin-top:15px;
            margin-left:10px;
        }
        .span2{
            font-size:16px;
            color:#666;
            position: absolute;
            top:60px;
            left:140px;
        }
	</style>
 <template>
     <div>
         <ul class="tabs clearfix">
                <li v-for="(tab,index) in tabsName" :key="index">
                    <a href="#" class="tab-link" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}</a>
                </li>
            </ul>
        <div id="app" class="box">
            <div class="cards">
                <div class="tab-card" style="display: block;">
                   <recom></recom>   
                </div>
                <div class="tab-card">
                    <recom></recom>
                </div>
                <div class="tab-card">
                    <recom></recom>
                </div>
                <div class="tab-card">
                    <recom></recom>
                </div>
            </div>
        </div>
     </div>
 </template>
 

<script>
 import recom from './recom'
    export default {
        components:{
            "recom":recom
        },
        data(){
            return {
                list:[{lid:1,url:require('../../../assets/list1.jpg'),dec:"韩国进口 JMsolution 玫瑰粉色防晒棒 全身水润防晒霜防晒棒 spf50"},
            {lid:2,url:require('../../../assets/list2.jpg'),dec:"韩国 RECIPE莱斯壁水晶防晒喷雾50ml 小S同款SPF50+防紫外线防水防汗"},
            {lid:3,url:require('../../../assets/list3.jpg'),dec:"曼秀雷敦 （Mentholatum） 新碧轻透润色 防晒隔离乳SPF50+PA+++30g 提亮肤色清爽隔离持久 妆前打底不脱妆"},
             {lid:4,url:require('../../../assets/list4.jpg'),dec:"美国进口 Coppertone（水宝宝）纯净防晒乳 SPF50 177ml/瓶 （温和滋润 防水隔离 轻薄保湿）"}],
                tabsName: [{
					name: "卸妆排行",
					isActive: true
				}, {
					name: "防晒排行",
					isActive: false
				}, {
					name: "粉底排行",
					isActive: false
				},{
                    name:"面膜排行",
                    isActive: false
                    
                }],
                active: false,
                num:0,
                lujin:"../../assets/shoucang_1.png"
            }
				
			},
			methods: {
                nums(){
                    this.num++;
                    this.lujin="../../assets/shoucang.png"
                },
				tabsSwitch: function(tabIndex) {
 
					var tabCardCollection = document.querySelectorAll(".tab-card"),
						len = tabCardCollection.length;
 
					for(var i = 0; i < len; i++) {
						tabCardCollection[i].style.display = "none";
						this.tabsName[i].isActive = false;
					}
					this.tabsName[tabIndex].isActive = true;
					tabCardCollection[tabIndex].style.display = "block";
				}
			}
    }
</script>
