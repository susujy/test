
		<script type="text/javascript" src="../../vue.js"></script>

	<style>
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
			width:80px;
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
                    <div class="product">
                        <a href="javascript:;">
                            <img class="imgsufeina" src="../../assets/sufeina.jpg" alt="">    
                        </a>      
                        <div class="introduction">
                            <p class="p1">苏菲娜土台美容液 开启新大门</p>
                            <a href="javascript:;">
                                <span class="sp1">婷婷酱D</span>
                                <img @click="nums" class="imgshoucang" :src="lujin" alt="">
                                <span class="span2">{{num}}</span>
                            </a>
                        </div>     
                    </div>
                    <div class="product">
                        <a href="javascript:;">
                            <img class="imgsufeina" src="../../assets/sufeina.jpg" alt="">    
                        </a>      
                        <div class="introduction">
                            <p class="p1">苏菲娜土台美容液 开启新大门</p>
                            <a href="javascript:;">
                                <span class="sp1">婷婷酱D</span>
                                <img @click="nums" class="imgshoucang" :src="lujin" alt="">
                                <span class="span2">{{num}}</span>
                            </a>
                        </div>     
                    </div>
                    <div class="product">
                        <a href="javascript:;">
                            <img class="imgsufeina" src="../../assets/sufeina.jpg" alt="">    
                        </a>      
                        <div class="introduction">
                            <p class="p1">苏菲娜土台美容液 开启新大门</p>
                            <a href="javascript:;">
                                <span class="sp1">婷婷酱D</span>
                                <img @click="nums" class="imgshoucang" :src="lujin" alt="">
                                <span class="span2">{{num}}</span>
                            </a>
                        </div>     
                    </div>
                    <div class="product">
                        <a href="javascript:;">
                            <img class="imgsufeina" src="../../assets/sufeina.jpg" alt="">    
                        </a>      
                        <div class="introduction">
                            <p class="p1">苏菲娜土台美容液 开启新大门</p>
                            <a href="javascript:;">
                                <span class="sp1">婷婷酱D</span>
                                <img @click="nums" class="imgshoucang" :src="lujin" alt="">
                                <span class="span2">{{num}}</span>
                            </a>
                        </div>     
                    </div>
                    <div class="product">
                        <a href="javascript:;">
                            <img class="imgsufeina" src="../../assets/sufeina.jpg" alt="">    
                        </a>      
                        <div class="introduction">
                            <p class="p1">苏菲娜土台美容液 开启新大门</p>
                            <a href="javascript:;">
                                <span class="sp1">婷婷酱D</span>
                                <img @click="nums" class="imgshoucang" :src="lujin" alt="">
                                <span class="span2">{{num}}</span>
                            </a>
                        </div>     
                    </div>
                    <div class="product">
                        <a href="javascript:;">
                            <img class="imgsufeina" src="../../assets/sufeina.jpg" alt="">    
                        </a>      
                        <div class="introduction">
                            <p class="p1">苏菲娜土台美容液 开启新大门</p>
                            <a href="javascript:;">
                                <span class="sp1">婷婷酱D</span>
                                <img @click="nums" class="imgshoucang" :src="lujin" alt="">
                                <span class="span2">{{num}}</span>
                            </a>
                        </div>     
                    </div>  
                                 
                    
                </div>



                <div class="tab-card">欢迎来到CSS模块</div>



                <div class="tab-card">嗨，这里是Vue</div>
            </div>
        </div>
     </div>
 </template>
 

<script>
    export default {
        data(){
            return {
                tabsName: [{
					name: "推荐",
					isActive: true
				}, {
					name: "不脱妆的秘密",
					isActive: false
				}, {
					name: "护肤心得",
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
