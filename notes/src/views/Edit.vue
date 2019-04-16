<template>
  <div class="a">
    <AddEdit :btn="btn" v-on:submit="noteEdit" />
  </div>
</template>

<script>
import AddEdit from "../components/AddEdit";
import { mapActions } from "vuex";
export default {
  name: "Edit",
  data() {
    return { btn: "edit note" };
  },
  methods: {
    ...mapActions(["editNote"]),
    noteEdit() {
      this.editNote();
    }
  },
  components: {
    AddEdit
  }
};
</script>

<style>
</style>
