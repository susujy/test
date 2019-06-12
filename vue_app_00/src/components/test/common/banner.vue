   <template>
  <div>
    <div class="bannerList">
      <div class="banner1 bannerItem">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="../../../assets/b1.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../../assets/b2.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../../assets/b3.jpg" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Swipe',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    handleChange (index) {
      this.bannerindex5 = index+1;
    }
  }
}
</script>
<style scoped>
.app-container{
    padding-bottom:10px!important;
}
.bannerItem {
  width: 100%;
  position: relative;
  padding-bottom: 42.5%;
  height: 0;
}
.bannerItem:last-child {
  margin-bottom: 40px;
}
.bannerItem[data-v-206352e3]{
    padding-bottom:52.5%;
    width:96%;
    margin:0px 8px;
}
.bannerItem[data-v-206352e3]:last-child{
    margin-bottom:0px;
}
.bannerItemTitle {
  padding: 10px 0;
  text-align: center; 
}
.bannerItem div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
    /* overflow: hidden; */
  height: 100%!important;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
  margin:5px 0px;
}
</style>
