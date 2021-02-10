<template>
  <div class="favorite">
    <span
      :class="'material-icons icon' + ' ' + isFavorite"
      @click="toggleFavorite"
      >favorite</span
    >
  </div>
</template>

<script>
export default {
  props: {
    imageObj: {
      type: Object,
    },
  },

  computed: {
    //   this.$root.favorites.some(
    //     (element) => element.id == this.imageObj.id
    //   )
    isFavorite() {
      return this.$store.getters.getFavoriteImage(this.imageObj);
    },
  },

  methods: {
    toggleFavorite() {
      // const favorite = this.$root.favorites.findIndex(element => element.id == this.imageObj.id)
      // if(favorite !== -1 ){
      //     this.$root.favorites.splice(favorite, 1)
      // } else {
      //     this.$root.favorites.push(this.imageObj)
      // }
      // console.log(this.$root.favorites);
      // localStorage.setItem("favorite-images", JSON.stringify(this.$root.favorites))

      this.$store.dispatch("toggleFavoriteImagesLs", this.imageObj);
    },
  },
};
</script>

<style lang="scss" scoped>
.favorite {
  width: 2rem;
  height: 2rem;

  .icon {
    font-size: 1.5rem;
    color: #222;
    cursor: pointer;
    margin-top: 0.2rem;
    &:hover {
      transform: scale(1.2);
      color: #e46464;
      transition: all 200ms ease;
    }
  }

  .is-favorite {
    color: #e46464;
  }
}
</style>
