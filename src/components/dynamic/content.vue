<template>
  <div class="Main">
    <div class="painter">
        <div class="touxiang">
          <div class="yuan" :style="'background-image: url(' + headerImg +  ')'"></div>
        </div>
      <div class="names">
        <h3>{{name}}</h3>
        <p>03-18</p>
      </div>
    </div>
    <div class="title">
      <p>{{pline}}</p>
    </div>
    <div class="Img">
      <img class="preview-img" v-for="(item, index) in imgList" :key="index" v-lazy="item.msrc" :large="item.img_src" preview="0" height="100"  @close="handleClose">
      <!--<vue-preview :slides="list.pictures" @close="handleClose" class="showImg"></vue-preview>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ['list','user'],
  data () {
    return {
      imgList: '',
      pline: '',
      headerImg: '',
      name: ''
    }
  },
  methods: {
    handleClose () {
      console.log('close event')
    }
  },
  watch: {
    list (to) {
      this.imgList = to.pictures
      this.pline = to.description
      // console.log(this.imgList)
    },
    user (data) {
      // console.log(data)
      this.headerImg = data.head_url
      this.name = data.name
    }
  }
}
</script>

<style lang="stylus" scoped>
  .names
    box-sizing: border-box;
    float: left;
    width: 120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  .names h3
    margin: .4rem 0 0 0
    font-size: .8rem;
    font-weight: 400;
    color: #212121;
  .names p
    font-size: .1rem;
    font-weight: 400;
    color: #999;
  .painter
    float: left
    width 100%
    height: auto
    padding: .5rem .8rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  .touxiang
    float left
  .yuan
    width: 40px;
    height: 40px;
    background-size: contain
    border-radius: 50%;
    margin-right: .8rem;
  .title{
    width: 100%;
    padding: 0 14.5px;
    font-size: 16px;
    box-sizing: border-box;
    word-break: break-all;
    color: #212121;
    margin-bottom: 10px;
  }
  .showImg{
    object-fit: cover;
    overflow: hidden;
    padding: 0 14.5px;
  }
  .showImg figure{
    float: left;
    width: 113.3px;
    height: 113.3px;
    overflow: hidden;
    margin-right: 3px;
    margin-bottom: 3px;
  }
  .showImg figure:nth-child(3n) {
    margin-right: 0px;
  }
  .showImg a{
    display: block;
    width: 100%;
  }
  .showImg  img{
    width: 100%;
    /*float: left;*/
  }
  .preview-img{
     margin-left: .8rem;
  }
</style>
