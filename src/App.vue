<template>
  <div id="app">
    <h1>Oplask</h1>
    <SearchBar v-on:search="search"/>
  </div>
</template>

<script>
import SearchBar from "@/components/Search.vue";

export default {
<<<<<<< HEAD
  name: "App",
  components: { SearchBar },
};
=======
  name: 'App',
  components: { SearchBar },

  methods: {
    search(input){
      console.log(input);
    }
  }
  
}
>>>>>>> 8ac69220a8cadbc9b9c1908d3bc908e1495c3b7a
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  h1{
    font-family: 'Londrina Solid', Avenir, Helvetica, Arial, sans-serif;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 5px; 
  }
}
</style>
