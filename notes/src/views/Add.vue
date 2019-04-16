<template>
  <AddEdit :btn="btn" v-on:submit="noteAdd"/>
</template>

<script>
import AddEdit from "../components/AddEdit";
import { mapActions } from "vuex";
export default {
  name: "Add",
  data() {
    return { btn: "add note"};
  },
  methods: {
    ...mapActions(['addNote']),
    noteAdd() {
      this.addNote()
    }
  },
  components: {
    AddEdit
  },
  created(){
    this.$store.commit('clearNote')
  }
};
</script>



