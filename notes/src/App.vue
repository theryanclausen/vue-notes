<template>
  <div id="app">
    <Header/>

    <router-view class="rv"/>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>


<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #41b883;
  height: 100vh;
  .rv {
    margin: 15px 20px;
  }
}
.card {
  color: #35495e;
  background: #b2e4ce;
  border: 3px solid #35495e;
  width: 300px;
  height: 200px;
  margin: 10px;
  .note-head {
    background: green;
    color: #b2e4ce;
    width: 100%;
    h5 {
      padding: 5px 0;
      font-size: 18px;
    }
  }
  p {
    padding: 5px;
    line-height: 1.5;
  }
}
</style>
