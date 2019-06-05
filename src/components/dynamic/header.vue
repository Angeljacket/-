<template>
    <div class="top_bar">
      <div class="logo">
        <img src="https://s2.hdslb.com/bfs/static/blive/bpfe-dynamic-h5/static/img/logo.06d3a01.png" alt="">
      </div>
      <img src="http://m.kugou.com/v3/static/images/index/goback_1.png" alt="" class="goback" @click="goback">
    </div>
</template>

<script>
export default {
    name: "Header",
    methods: {
      goback () {
        this.$router.go(-1)
      }
    }
}
</script>

<style scoped lang="stylus">
 .top_bar
   height: 44px;
   border-bottom: 1px #e7e7e7 solid;
   display: flex;
   -webkit-box-orient: horizontal;
   -webkit-box-direction: normal;
   -webkit-flex-direction: row;
   -ms-flex-direction: row;
   flex-direction: row;
   -webkit-box-align: center;
   -webkit-align-items: center;
   align-items: center;
   -webkit-box-pack: justify;
   -webkit-justify-content: space-between;
   -ms-flex-pack: justify;
   justify-content: space-between;
   background pink
   position relative
 .goback
   width: .85714rem;
   height: 1.42857rem;
   display: inline-block;
   padding-left: .8rem;
   position absolute
   left: 0
 .logo
   margin-left 3rem
 .logo img
   width: 62px;
   height: 28px;
</style>
