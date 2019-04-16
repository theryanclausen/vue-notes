<template><div class="form-container">
  <form @submit="submitHandle">
    <input type="text" v-model="title" name="title" placeholder="note title">
    <textarea name="textBody" v-model="textBody" placeholder="... add note"/>
    <button type="submit">{{btn}}</button>
  </form></div>
</template>

<script>
import {mapActions,mapGetters } from 'vuex'
export default {
  name: "AddEdit",
  props:['btn','id'],
data(){return{title:'', textBody:''}},
computed: mapGetters(['thisNote']),
methods:{...mapActions(['getNote']),
    submitHandle(e){
        e.preventDefault()
        const {title, textBody} = this
        this.$emit('submit', {title, textBody})
        this.title=''
        this.textBody=''
        this.$router.push({path:'/', query:''})
    }
},
created(){
    if(this.id){
        console.log(this.id)
        this.getNote(this.id)
    }
}

};
</script>
<style lang="less" scoped>
.form-container{
    width:100vw;
}
form {
  max-width: 500px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  border: 3px solid #35495e;
  @media (max-width: 500px){
      margin:10px;
  }
  input {
    background: green;
    color: #b2e4ce;
    padding: 5px;
    font-size: 18px;
    border-style: none;
  }
  input::placeholder {
    color: #b2e4ce;
  }
  textarea {
    height: 300px;
    color: #35495e;
    background: #b2e4ce;
    border-style: none;
  }
  button {
    background: none;
    border-style: none;
    border-top: #35495e 3px solid;
    padding: 5px;
    font-size: 18px;
    &:hover {
      background: green;
      color: #b2e4ce;
    }
  }
}
</style>
