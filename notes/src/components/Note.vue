<template>
  <div class="card">
    <div class="note-head">
      <h5>{{note.title}}</h5>
    </div>
    <p>{{note.textBody}}</p>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: ["note"]
};
</script>

<style lang="less" scoped>
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
      padding: 5px ;
      font-size: 18px;
    }
  }
  p {
    padding: 5px;
    line-height: 1.5;
  }
}
</style>
