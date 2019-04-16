<template>
  <div class="card">
    <div class="note-head">
      <h5>{{note.title}}</h5> <div> <router-link :to="`/note/${note.id}` "> 
          <i class="fas fa-edit"></i></router-link>
      <i @click="deleteNote(note.id)" class="fas fa-trash-alt"></i></div>
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
    a{
        color:unset;
    }
    .fas {
        padding:5px;
      cursor: pointer;
    }
  }
  p {
    padding: 5px;
    line-height: 1.5;
  }
}
</style>
