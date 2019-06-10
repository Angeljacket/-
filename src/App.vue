<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    let loading =document.getElementById('Loading')
    if (loading != null) {
      document.body.removeChild(loading)
    }
  }
}
</script>

<style>
body{
  margin: 0;
  background: #fdfdfd;
}
ul{
  margin: 0;
}
ul,li{
list-style: none
}
  a{
    text-decoration: none;
  }
 p{
   margin: 0;
 }
</style>
