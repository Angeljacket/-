<template>
  <div>
    <div class="top">
      <div class="title" v-for="(item, index) in nav" :key="index">
      <router-link
        :to="item.url"
        tag="div"
        class="grid-content bg-purple home"
      >{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: "Home",
  data () {
    return {
        nav: [
          {
            title:"画友",
            url: '/',
            name: '/home'
          },
          {
            title:"摄影",
            url: '/photography',
            name: '/photography'
          }]
    }
  }
}
</script>

<style lang="stylus" scoped>
ul,li
  list-style none
 .top
   width 100%
   background: #fb7299;
   overflow: hidden;
   font-size: 1rem;
   display flex
   font-weight 400
   color white
   justify-content: space-around;
 .title
   text-align center
   width: 25%;
   float: left;
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
   margin 0 auto
 .grid-content
   border-radius: .2rem;
   min-height: 18px;
   color: #fff;
   text-align: center;
   line-height: 2.6;
 .menu
  width 100%
  overflow hidden
  background: #fb7299;
 .menu li
  float: left
  width: 20%;
  text-align: center;
  -webkit-box-flex: 1;
  box-flex: 1;
 .menu li a
  font-size: .8rem
  color: white
 .menu .cur a
    font-weight 550
</style>
