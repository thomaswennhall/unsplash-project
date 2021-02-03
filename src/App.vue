<template>
  <div id="app">
    <h1>Oplask</h1>
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "@/components/Search.vue";

export default {
  name: "App",
  components: { SearchBar },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
