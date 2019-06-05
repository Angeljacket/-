<template>
    <div>
      <home></home>
      <Menu></Menu>
      <Content></Content>
    </div>
</template>

<script>
import Home from '../all/Home'
import Menu from '../all/menu'
import Content from '../comic/content'
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
