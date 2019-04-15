<template>
  <div id="app">
    <Header/>

    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: "App",
  components:{
    Header
  }
}
</script>


<style>
*{
  padding: 0;
  margin:0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
