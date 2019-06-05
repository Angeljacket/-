<template>
    <div>
      <home></home>
      <Menu></Menu>
      <Content></Content>
    </div>
</template>

<script>
import axios from 'axios'
import Home from '../all/Home'
import Menu from '../all/menu'
import Content from '../all/content'
export default {
    name: "index",
    components: {
      Home,
      Menu,
      Content
  }
}
</script>

<style lang="stylus" scoped>
</style>
