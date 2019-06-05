<template>
  <div>
    <home></home>
    <Menu></Menu>
    <Content></Content>
  </div>
</template>

<script>
import Home from '../all/Home'
import Menu from '../photography/menu'
import Content from '../sifu/content'
export default {
  name: "index",
  components: {
    Home,
    Menu,
    Content
  }
}
</script>

<style scoped>

</style>
