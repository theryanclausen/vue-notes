<template>
  <div>
    <h2>notes</h2>
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

<style lang="less">
</style>

