<template> <div>
<h2>notes</h2>
    <h5 :key='note.id' v-for="note in allNotes">{{note.title}}</h5>
</div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Notes",
  methods: mapActions(['fetchNotes']),
  computed: mapGetters(['allNotes']),
  created(){
      this.fetchNotes();
  }
};
</script>

<style lang="less">
</style>

