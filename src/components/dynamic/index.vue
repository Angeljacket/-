<template>
    <div>
      <Header></Header>
      <Content :list="imgList.item" :user="imgList.user"></Content>
    </div>
</template>

<script>
import axios from 'axios'
import Header from '../dynamic/header'
import Content from '../dynamic/content'
export default {
    name: "index",
    data () {
      return {
        imgList: {
          item: {
            pictures: [],
            description: '',
            head_url: ''
          },
          user: {}
        },
        list: [],
        arr: []
      }
    },
    components: {
      Header,
      Content
  },
  created () {
    let This = this
    let Id = localStorage.getItem('kgid')
    let url = `/apis/dynamic_svr/v1/dynamic_svr/get_dynamic_detail?rid=${Id}&type=2`
    // console.log(url);
    axios(url).then(({data}) => {
        this.imgList = JSON.parse(data.data.card.card)
        this.user = this.imgList.user
        // console.log(this.imgList)
      for (var i = 0; i< this.imgList.item.pictures.length; i++) {
        let img = new Image()
          img.src = this.imgList.item.pictures[i].img_src
        // console.log(img.src)
        let e = {}
        // 当图片载入完毕之后，记录当前图片对象的宽高
        img.onload = function () {
          e.src = img.src
          e.msrc = img.src
          e.w = img.width
          e.h = img.height
        }
        // 增添刚刚记录的长宽高，还有图片路径到数组
        This.list.push(e)
        This.imgList.item.pictures[i].src = This.imgList.item.pictures[i].img_src
        This.imgList.item.pictures[i].msrc = This.imgList.item.pictures[i].img_src + '@214w_214h_1c.webp'
        This.imgList.item.pictures[i].w = This.imgList.item.pictures[i].img_width
        This.imgList.item.pictures[i].h = This.imgList.item.pictures[i].img_height
      }
      this.$previewRefresh()
    })
  }
}
</script>

<style scoped>

</style>
