import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const url="https://backend-project-week-lambda.herokuapp.com/api/notes/"

export default new Vuex.Store({
  state: {
    notes:[],
    note: {title:'', textBody:''}
  },
  getters:{
    allNotes: state => state.notes,
    thisNote: state => state.note
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
    })), 
    setNote:(state, note) => (state.note = note),
    clearNote:(state) => (state.note = {title:'', textBody:''}),
    setNewNote:(state, newNote) => state.notes.push(newNote)
  },
  actions: {
    async fetchNotes({commit}){
      try{
        const res = await axios.get(url)
        commit('setNotes', res.data);
        return;
      }catch(err){
        //console.log(err)
      }
      
    },
    getNote({commit,state}, id){
      let foundNote = state.notes.find(note => note.id == id)
      if (foundNote){
        const { title, textBody} = foundNote.__ob__.value
        foundNote = {id, title, textBody}
      }
      commit('setNote', foundNote)
    },
    async addNote({commit}, newNote){
      try{
        const res = await axios.post(url, newNote);
        commit('setNewNote', res.data);

      }catch(err){
        alert(err)
      }
    }
  }
})
