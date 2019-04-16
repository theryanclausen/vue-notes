import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const url = "https://backend-project-week-lambda.herokuapp.com/api/notes/";

export default new Vuex.Store({
  state: {
    notes: [],
    note: { title: "", textBody: "" }
  },
  getters: {
    allNotes: state => state.notes,
    thisNote: state => state.note
  },
  mutations: {
    setNotes: (state, notes) =>
      (state.notes = notes.map(note => {
        if (note.id === 1 && note.title === "Welcome to Bubble Notes") {
          note.title = "Welcome to Vue Notes";
        }
        if (note.id === 2 && note.textBody.includes("16.7.0-alpha.2")) {
          note.textBody = "Vue using vue-router and vuex for state management";
        }
        return note;
      })),
    setNote: (state, note) => {
      if(!note){
        console.log('buh')
        return
      }
      if (note.id === 1 && note.title === "Welcome to Bubble Notes") {
        note.title = "Welcome to Vue Notes";
      }
      if (note.id === 2 && note.textBody.includes("16.7.0-alpha.2")) {
        note.textBody = "Vue using vue-router and vuex for state management";
      }
      return (state.note = note);
    },
    clearNote: state => (state.note = { title: "", textBody: "" }),
    setNewNote: (state, newNote) => state.notes.push(newNote),
    setEditedNote: (state, newNote) =>
      (state.notes = state.notes.map(note =>
        note.id == newNote.id ? newNote : note
      )),
    removeNote: (state, id) =>
      (state.notes = state.notes.filter(note => note.id !== id)),
    updateTextBody: (state, value) =>
      (state.note = { ...state.note, textBody: value }),
    updateTitle: (state, value) =>
      (state.note = { ...state.note, title: value })
  },
  actions: {
    async fetchNotes({ commit }) {
      try {
        const res = await axios.get(url);
        commit("setNotes", res.data);
        return;
      } catch (err) {
        //console.log(err)
      }
    },
    async getNote({ commit, state }, id = null) {
      if (!id) {
        commit("clearNote");
        return;
      }
      let foundNote = state.notes.find(note => note.id == id);
      if (foundNote) {
        const { title, textBody } = foundNote.__ob__.value;
        foundNote = { id, title, textBody };
      } else {
        foundNote = await axios.get(url + id);
      }
      commit("setNote", foundNote.data);
    },
    async addNote({ commit, state }) {
      try {
        const res = await axios.post(url, state.note);
        commit("setNewNote", res.data);
        commit("clearNote");
      } catch (err) {
        alert(err);
      }
    },
    async deleteNote({ commit }, id) {
      await axios.delete(url + id);
      commit("removeNote", id);
    },
    async editNote({ commit, state }) {
      try {
        const res = await axios.put(url + state.note.id, state.note);
        commit("setEditedNote", res.data);
        commit("clearNote");
      } catch (err) {
        alert(err);
      }
    }
  }
});
