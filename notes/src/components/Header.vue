<template>
  <header>
    <div class="header-wrapper">
      <div class="logo-wrapper">
        
        <img class="logo" alt="Vue logo" src="../assets/logo.png"><h2>ue Notes</h2>
      </div>
      <nav>
        <router-link exact to="/">View Notes</router-link>
        <router-link to="/add">Add Note</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="less" scoped>
header {
  background: green;
  color: #35495e;
  .header-wrapper {
    width: 95%;
    margin: 0 auto;
    padding:10px 0;
    display:flex;
    justify-content: space-between;
    align-items: center;
    .logo-wrapper {
      width: 200px;
      display: flex;
      justify-content: flex-start;
      h2 {
        font-size: 30px;
      }
      .logo {
        width: auto;
        height: 30px;
        padding: 0;
        margin: 0;
      }

    }
    nav{
        font-size:22px;
        a{
           color:#35495e;
           text-decoration: none;
           margin:0 15px;
           &:hover{
               color:#41B883;
           }
        }
        .router-link-active{
            text-decoration: underline;
            font-weight: bolder;
            color:#41B883;
        }
    }
  }
}
</style>

