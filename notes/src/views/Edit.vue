<template> <div class="a">
  <AddEdit :btn="btn" v-on:submit="noteEdit" :id='this.$route.params.id'/></div>
</template>

<script>
import AddEdit from "../components/AddEdit";
import { mapActions } from "vuex";
export default {
  name: "Edit",
  data() {
    return { btn: "edit note"};
  },
  methods: {
    ...mapActions(['editNote']),
        noteEdit(newNote) {
      this.editNote(newNote)
    }
  },
  components: {
    AddEdit
  },

};
</script>

<style>
</style>
