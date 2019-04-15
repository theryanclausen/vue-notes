import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const url="https://backend-project-week-lambda.herokuapp.com/api/notes/"

export default new Vuex.Store({
  state: {
    notes:[]
  },
  getters:{
    allNotes: state => state.notes
  },
  mutations: {
    setNotes: (state, notes) => (state.notes = notes.map(note =>{
      if(note.id === 1){
        note.title = 'Welcome to Vue Notes'
      }
      if (note.id === 2){
        note.textBody = 'Vue using vue-router and vuex for state management'
      }
      return note;
    }))
  },
  actions: {
    async fetchNotes({commit}){
      try{
        const res = await axios.get(`${url}`)
        commit('setNotes', res.data);
        return;
      }catch(err){
        console.log(err)
      }
      
    }
  }
})
