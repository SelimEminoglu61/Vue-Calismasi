<template>
  <div>
    <h1>deneme</h1>
    <h3>Title Style--Global</h3>
    <TitleLine :comment="text" />
  </div>
</template>

<script>
import TitleLine from "./components/TitleLine.vue"


export default {
  name: "App",
  components:{
    TitleLine
  },
  data(){
    return{
      text:"Güzelmiş",
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
