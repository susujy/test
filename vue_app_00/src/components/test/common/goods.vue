
	<style scoped>
		* {
			padding: 0;
			margin: 0;
		}
		.list ul{list-style:none;padding:0;width:100%;}
        .list li.big{
            width:48%;
            height:230px;
            border:1px solid #ccc;
            margin-bottom:5px;
            margin-left:5px;
            padding:4px;
            float:left;
            border-radius:10px;
            box-shadow:2px 2px 0px 0px  #ddd;
            background-color:#f5f5f5;
            /* clear: both; */
        }
        .list p.text{
        /* margin-top:8px; */
        border-top:1px dashed #eee;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical; 
        word-break: break-all; 
        overflow: hidden; 
        display: -webkit-box; 
        font-size:12px;
        color:#000;
        text-overflow: ellipsis; 
        /* height:45px !important; */
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
                <!-- 面板1 -->
                <div class="tab-card" style="display: block;">
                  <div class="list">
                        <ul>
                            <li class="big"  v-for="(l,i) in list1" :key="i">
                                <img :src="l.url" width="100%" >
                                <p class="text">{{l.dec}}</p>
                            </li>
                        </ul>
                    </div>   
                </div>
                <!-- 面板2 -->
                <div class="tab-card">
                    <!-- <recom></recom> -->
                    <div class="list">
                        <ul>
                            <li class="big"  v-for="(l,i) in list3" :key="i">
                                <img :src="l.url" width="100%">
                                <p class="text">{{l.dec}}</p>
                            </li>
                        </ul>
                    </div>   
                </div>
                <!-- 面板3 -->
                <div class="tab-card">
                    <!-- <recom></recom> -->
                    <div class="list">
                        <ul>
                            <li class="big"  v-for="(l,i) in list2" :key="i">
                                <img :src="l.url" width="100%">
                                <p class="text">{{l.dec}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 面板4 -->
                <div class="tab-card">
                     <div class="list">
                        <ul>
                            <li class="big"  v-for="(l,i) in list4" :key="i">
                                <img :src="l.url" width="100%">
                                <p class="text">{{l.dec}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </template>
<script>

    export default {
        components:{
           
        },
        data(){
            return {
                list1:[{lid:1,url:require('../../../assets/xz1.jpg'),dec:"贝德玛 深层清洁毛孔脸部温和不刺激敏感肌肤卸妆水 法国进口"},
                    {lid:2,url:require('../../../assets/xz2.jpg'),dec:"韩国原装进口 UNNYCLUB/悠宜 卸妆水"},
                    {lid:3,url:require('../../../assets/xz3.jpg'),dec:"欧莱雅(LOREAL)花萃净柔卸妆膏100ml质地轻薄，柔滑乳化，温和呵护"},
                        {lid:4,url:require('../../../assets/xz4.jpg'),dec:"【李佳琦推荐】Nursery 娜斯丽柚子卸妆凝露500ml卸妆乳"}],
                list2:[{lid:1,url:require('../../../assets/fd1.jpg'),dec:"【无暇妆效一整天】Estee Lauder 雅诗兰黛 持妆粉底液"},
                    {lid:2,url:require('../../../assets/fd2.jpg'),dec:"【痘痘肌的福音】COVERMARK 中草药修护粉底霜 SPF18PA++ #YO00 "},
                    {lid:3,url:require('../../../assets/fd3.jpg'),dec:"SUQQU 粉底霜 #101 30g 淡斑;遮瑕;修护 粉底液"},
                        {lid:4,url:require('../../../assets/fd4.jpg'),dec:"Dior迪奥凝脂恒久哑光粉底液  长效持久不脱妆"}
                ],
                list3:[{lid:1,url:require('../../../assets/list1.jpg'),dec:"韩国进口 JMsolution 玫瑰粉色防晒棒 全身     水润防晒霜防晒棒 spf50"},
                    {lid:2,url:require('../../../assets/list2.jpg'),dec:"韩国 RECIPE莱斯壁水晶防晒喷雾50ml 小S同款SPF50+防紫外线防水防汗"},
                    {lid:3,url:require('../../../assets/list3.jpg'),dec:"曼秀雷敦 （Mentholatum） 新碧轻透润色 防晒隔离乳SPF50+PA+++30g 提亮肤色清爽隔离持久 妆前打底不脱妆"},
                        {lid:4,url:require('../../../assets/list4.jpg'),dec:"美国进口 Coppertone（水宝宝）纯净防晒乳 SPF50 177ml/瓶 （温和滋润 防水隔离 轻薄保湿）"}
                ],
                // 面膜推荐
                list4:[{lid:1,url:require('../../../assets/mm1.jpg'),dec:"欧莱雅(LOREAL) 复颜贴合提拉弹力滋润营养;保湿补水 L’OREAL"},
                    {lid:2,url:require('../../../assets/mm2.jpg'),dec:"cpb 肌肤之钥 集中护理面贴膜 修护肌肤 提拉紧致 紧肤淡皱"},
                    {lid:3,url:require('../../../assets/mm3.jpg'),dec:"科颜氏(Kiehl’s)亚马逊白泥净致面膜125ml（又名：亚马逊白泥净肤面膜）温和清洁 去黑头"},
                        {lid:4,url:require('../../../assets/mm4.jpg'),dec:"ORIGINS 悦木之源 ;收缩毛 ;修护 活性炭清透洁肤面膜 水洗面膜 "}
                ],
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
