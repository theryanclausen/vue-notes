<template>
  <div class="card-container">
    <Note v-bind:note="note" :key="note.id" v-for="note in allNotes"></Note>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Note from "./Note";

export default {
  name: "Notes",
  components: { Note },
  methods: mapActions(["fetchNotes"]),
  computed: mapGetters(["allNotes"]),
  created() {
    this.fetchNotes();
  }
};
</script>

<style>
.card-container{
    display:flex;
    flex-wrap: wrap;
    padding:15px;
}
</style>

