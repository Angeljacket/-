<template>
      <div class="menu">
        <ul>
          <router-link
            v-for="(item, index) in navlist"
            :key="index"
            :to="item.path"
            tag="li"
            :class="[(active === index) ? 'home' : '']"
            @click="show(item)">
                {{item.name}}
          </router-link>
        </ul>
      </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Menu",
    data () {
      return {
        navlist: [
          {url: 'cos', name: 'Cosplay', path: '/photography'},
          {url: 'sifu', name: '私服', path: '/sifu'}
        ],
        active: 0
      }
    },
  created() {
      const currentRouter = this.$route.path
      const data = this.navlist.findIndex(item => item.path === currentRouter)
      this.active  = data
  },
  methods: {
    show (data){
      console.log(data)
      this.active  = data
    }
  }
}
</script>

<style lang="stylus" scoped>
  .menu
    width 100%
    overflow hidden
    background: #fb7299;
  .menu ul
    width 100%
    margin-left 20%
  .menu li
    float: left
    width: 20%;
    text-align: center;
    -webkit-box-flex: 1;
    box-flex: 1
    margin 0 auto
    color: white
    padding-bottom .3rem
    font-size .9rem
  .menu .cur a
      font-weight 550
  .home
    border-bottom 2px solid white
</style>
