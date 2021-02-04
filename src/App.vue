<template>
  <div id="app">
    <h1>Oplask</h1>
    <SearchBar v-on:search="search" />
    <Gallery :images="getImages" />
  </div>
</template>

<script>
import SearchBar from "@/components/Search.vue";
import Gallery from "@/components/Gallery.vue";

import * as API from "@/api/mockup";
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
    };
  },

  methods: {
    search(input) {
      this.images = API.searchQuery(input);
      if (!this.images) {
        this.images = [];
        console.log(this.images);
      }
    },
    async initApi() {
      this.images = await test.init(25);
    },
  },
  async created() {
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

  h1 {
    font-family: "Londrina Solid", Avenir, Helvetica, Arial, sans-serif;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 5px;
  }
}
</style>
