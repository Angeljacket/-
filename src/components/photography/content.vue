<template>
  <div>
    <div class="content">
      <ul class="content_ul">
        <li  v-for="(item, index) in list" :key="index" @click="show(item)">
          <img v-lazy="item.item.pictures[0].img_src + '@400w_384h_1e.webp' + ')'">
          <div class="text">
            <p class="one-txt-cut">{{item.item.title}}</p>
            <div data-v-333ea9dc="" class="user">
              <div data-v-333ea9dc="" class="userAvatar" :style="'background-image: url(' + item.user.head_url + ')'"></div>
              <span data-v-333ea9dc="" class="one-txt-cut">{{item.user.name}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Content",
    data () {
      return {
        list: []
      }
    },
    methods: {
      show (data){
        console.log (data.item.doc_id)
        localStorage.setItem('kgid', data.item.doc_id) // 本地储存起来这个数据
        this.$router.push('/dynamic')
      }
    },
    created() {
      axios.post(`/apis/link_draw/v2/Photo/list?category=cos&type=hot&page_num=0&page_size=20`).then(({data}) => {
        console.log(data)
        this.list = data.data.items
        console.log(this.list)
        // console.log(this.list[1].item.pictures[0].img_src)
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    padding: 0 10px;
    overflow: hidden;
  .content_ul
    padding 0
  .content_ul li
    float: left
    width: calc(50% - 5px);
    height 9.5rem
    overflow hidden
    position relative
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin-right 10px
    margin-bottom 10px
  .content_ul li:nth-child(even)
    margin-right: 0;
  .content_ul img
    width: 100%
  .one-txt-cut
    font-weight: 400;
    font-size: .8rem;
    margin-bottom: .1rem
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  .text
    width 100%
    padding: .1rem .2rem;
    background #fff
    position absolute
    bottom:0
  .user
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-shadow: 12px 12px 0px 6px rgba(0, 0, 0, 0.1);
  .user span
    color: #999;
    font-size: .75rem
  .userAvatar
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: #555555;
    margin-right: .2rem;
    background-size: cover;
    background-position: 50%;
</style>
