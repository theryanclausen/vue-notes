<template>
  <div class="card-container">
    <div class="card">
      <h1 class="note-head">About Vue Notes</h1>
      <p>
        This very simple note taking app was built in an effort to better understand the ins and outs of the Vue framework.
        This page was built and designed by
        <a
          href="https://ryanclausen.me/"
          target="_blank"
        >Ryan Clausen</a>. Ryan is more familiar with React. A note taking app seemed like a good toy
        project to practice some of the fundamentals. Vue Notes shares a backend with the react based app,
        <a
          href="https://bubble-notes.netlify.com/"
          target="_blank"
        >Bubble Notes</a>.
      </p>
      <div class="img-container">
        <a href="https://ryanclausen.me/" target="_blank">
          <img class="headshot" alt="Ryan" src="../assets/ryan-img.jpg">
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card-container {
  width: 100vw;
  .card {
    width: 500px;
    margin: 10px auto;
    height: auto;
    a {
      text-decoration: none;
      font-weight: bold;
      color: #35495e;
      &:hover {
        text-decoration: underline;
      }
    }
    h1{
      padding:5px;
    }
    .img-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .headshot {
        width: 200px;
        height: auto;
        border-radius: 50%;
        margin: 25px auto;
        @media (max-width: 400px) {
          display: none;
        }
      }
    }
  }
}
</style>

