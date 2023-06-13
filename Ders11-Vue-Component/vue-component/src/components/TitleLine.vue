<template>
  <div>
    <h3>{{title}}</h3>
    <p>{{comment}}</p>
  </div>
</template>

<script>
export default {
    name:"TitleLine",
    props:['comment'],
    data(){
        return{
            title:"Vue 3'e Giriş"
        }
    },
}
</script>

<!-- scoped anahtar kelimesi ile sadece componente özel css yazabiliriz -->

<style scoped>
  h3{
    color: blue;
    font-size: 30px;
    font-weight: 700;
  }
</style>