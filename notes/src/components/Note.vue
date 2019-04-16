<template>
  <div class="card">
    <div class="note-head">
      <h5>{{note.title}}</h5>
      <h5 @click="deleteNote(note.id)" class="del">X</h5>
    </div>
    <p @click='fetchNotes()'>{{note.textBody}}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Note",
  methods: {...mapActions(["deleteNote"])}
 ,
  props: ["note"],
  
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
    display: flex;
    justify-content: space-between;
    h5 {
      padding: 5px;
      font-size: 18px;
    }
    .del {
      color: red;
      -webkit-text-stroke: 1px black;
      cursor: pointer;
    }
  }
  p {
    padding: 5px;
    line-height: 1.5;
  }
}
</style>
