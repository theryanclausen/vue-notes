<template>
  <AddEdit :btn="btn" v-on:submit="noteAdd"/>
</template>

<script>
import AddEdit from "../components/AddEdit";
import { mapActions } from "vuex";
export default {
  name: "Add",
  data() {
    return { btn: "add note", title: "", textBody: "" };
  },
  methods: {
    ...mapActions(['addNote']),
    noteAdd(newNote) {
      this.addNote(newNote)
    }
  },
  components: {
    AddEdit
  }
};
</script>



