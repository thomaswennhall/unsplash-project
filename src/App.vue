<template>
  <div id="app">
    <h1>Oplask</h1>
    <SearchBar v-on:search="search" />
    <Gallery
      :images="getImages"
      @nextPage="nextPage"
      @previousPage="previousPage"
    />
  </div>
</template>

<script>
import SearchBar from "@/components/Search.vue";
import Gallery from "@/components/Gallery.vue";

import test from "@/api";
export default {
  name: "App",
  components: { SearchBar, Gallery },
  computed: {
    getImages() {
      return this.images;
    },
  },
  data() {
    return {
      images: [],
      searchVal: "",
    };
  },

  methods: {
    async search(input) {
      console.log(input);
      this.searchVal = input;
      this.images = await test.searchQuery(input);
      if (!this.images) {
        this.images = [];
        console.log(this.images);
      }
    },
    async initApi() {
      this.images = await test.init(25);
    },
    async nextPage() {
      console.log("NEXT PAGE");
      this.images = await test.getNextPage(this.searchVal);
    },
    async previousPage() {
      this.images = await test.getPreviousPage(this.searchVal);
    },
  },
  created() {
    this.initApi();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 2rem;

  h1 {
    font-family: "Londrina Solid", Avenir, Helvetica, Arial, sans-serif;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 5px;
  }
}
</style>
