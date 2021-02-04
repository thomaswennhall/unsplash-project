<template>
  <div id="app">
    <h1>Oplask</h1>
    <SearchBar v-on:search="search" />
    <Gallery
      :images="getImages"
      @nextPage="nextPage"
      @previousPage="previousPage"
      @openLightbox="toggleLightbox"
    />
    <Lightbox 
      v-if="showLightbox"
      :images="getImages" 
      :id="imageId" 
      @closeLightbox="toggleLightbox"
    />
  </div>
</template>

<script>
import SearchBar from "@/components/Search.vue";
import Gallery from "@/components/Gallery.vue";
import Lightbox from "@/components/Lightbox.vue";

import API from "@/api";
export default {
  name: "App",
  components: { SearchBar, Gallery, Lightbox },
  computed: {
    getImages() {
      return this.images;
    },
  },
  data() {
    return {
      images: [],
      searchVal: "",
      showLightbox: false,
      imageId: ""
    };
  },

  methods: {
    async search(input) {
      console.log(input);
      this.searchVal = input;
      this.images = await API.searchQuery(input);
      if (!this.images) {
        this.images = [];
        console.log(this.images);
      }
    },
    async initApi() {
      this.images = await API.init(25);
    },
    async nextPage() {
      console.log("NEXT PAGE");
      this.images = await API.getNextPage(this.searchVal);
    },
    async previousPage() {
      this.images = await API.getPreviousPage(this.searchVal);
    },

    toggleLightbox(id){
      if(this.showLightbox){
        this.imageId = ''
        this.showLightbox = false
      } else{
        this.showLightbox = true
        this.imageId = id
      }
    }
  },
  created() {
    this.initApi();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
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
    margin-bottom: 2rem;
  }
}
</style>
