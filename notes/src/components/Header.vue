<template>
  <header>
    <div class="header-wrapper">
      <div class="logo-wrapper">
        <router-link class="title" exact to="/">
          <img class="logo" alt="Vue logo" src="../assets/logo.png">
          <h2 class="title-line">ue Notes</h2>
        </router-link>
      </div>
      <nav>
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
  color: #b2e4ce;
  .header-wrapper {
    width: 95%;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 490px) {
      flex-direction: column;
    }
    .logo-wrapper {
      width: 200px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .title {
        .title-line {
          line-height: 1.5;
          font-size: 30px;
          display: inline-block;
          &:hover{
              color: #41b883;
          }
        }

        color: #b2e4ce;
        text-decoration: none;
      }
      .logo {
        width: auto;
        height: 30px;
        padding-top:4px;
        margin: 0;
      }
    }

    nav {
      font-size: 22px;
      a {
        color: #b2e4ce;
        text-decoration: none;
        margin: 0 15px;
        @media (max-width: 580px) {
          margin: 0 7px;
          font-size: 18px;
        }
        &:hover {
          color: #41b883;
        }
      }
      .router-link-active {
        text-decoration: underline;
        font-weight: bolder;
        color: #41b883;
      }
    }
  }
}
</style>

