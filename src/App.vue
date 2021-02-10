<template>
  <div id="app">
    <h1>Oplask</h1>
    <SearchBar v-on:search="search" />
    <span
      :class="'material-icons change-to-favorite' + ' ' + setFavoriteActive"
      @click="toggleFavorites"
      >favorite</span
    >
    <Gallery
      :images="getImages"
      @nextPage="nextPage"
      @previousPage="previousPage"
      @openLightbox="toggleLightbox"
    />
    <transition name="modal">
      <Lightbox
        v-if="showLightbox"
        :images="getImages"
        :id="imageId"
        @closeLightbox="toggleLightbox"
      />
    </transition>
  </div>
</template>

<script>
import SearchBar from "@/components/Search.vue";
import Gallery from "@/components/Gallery.vue";
import Lightbox from "@/components/Lightbox.vue";

export default {
  name: "App",
  components: { SearchBar, Gallery, Lightbox },
  computed: {
    getImages() {
      return this.$store.getters.getImages(this.favoriteState);
    },
    setFavoriteActive() {
      return this.favoriteState ? "change-to-favorite-active" : "";
    },
  },
  data() {
    return {
      searchVal: "",
      showLightbox: false,
      imageId: "",
      favoriteState: false,
    };
  },

  methods: {
    search(input) {
      this.searchVal = input;
      this.$store.dispatch("searchQuery", this.searchVal);
    },
    nextPage() {
      console.log("NEXT PAGE");
      this.$store.dispatch("nextPage", this.searchVal);
    },
    previousPage() {
      this.$store.dispatch("previousPage", this.searchVal);
    },

    toggleLightbox(id) {
      if (this.showLightbox) {
        this.imageId = "";
        this.showLightbox = false;
      } else {
        this.showLightbox = true;
        this.imageId = id;
      }
    },

    toggleFavorites() {
      this.favoriteState = !this.favoriteState;
    },
  },
  created() {
    this.$store.dispatch("initApp", 25);
    this.$store.dispatch("initFavoriteImagesLs");
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

  .change-to-favorite {
    position: fixed;
    top: 2%;
    right: 1%;
    font-size: 6rem;
    color: #222;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      color: #e46464;
      transition: all 0.5s ease;
    }

    @media screen and (min-width: 1000px) {
      right: 25%;
    }
  }

  h1 {
    font-family: "Londrina Solid", Avenir, Helvetica, Arial, sans-serif;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 5px;
    margin-bottom: 2rem;
  }

  .modal-enter-active,
  .modal-leave-active {
    /* transition: opacity 0.5s; */
    transition: opacity 0.5s ease;
  }
  .modal-enter,
  .modal-leave-to {
    opacity: 0;
  }
  .change-to-favorite-active {
    color: #e46464;
  }
}
</style>
