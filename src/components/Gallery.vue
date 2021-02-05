<template>
  <div class="wrapper">
    <section class="gallery">
      <Thumbnail
        v-for="image in images"
        :key="image.id"
        :image="image"
        @click.native="openLightbox(image.id)"
      />
    </section>
    <div class="buttons">
      <button @click="prevPage" class="material-icons reversed">
        play_arrow
      </button>
      <button @click="nextPage" class="material-icons ">
        play_arrow
      </button>
    </div>
  </div>
</template>

<script>
import Thumbnail from "@/components/Thumbnail.vue";

export default {
  components: { Thumbnail },
  props: {
    images: {
      type: Array,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    nextPage() {
      this.$emit("nextPage");
    },
    prevPage() {
      this.$emit("previousPage");
    },
    openLightbox(id) {
      this.$emit("openLightbox", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 95vw;
  margin: 0 auto;

  .gallery {
    max-width: 1150px;
    padding: 2rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 800px){
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  .buttons {
    position: sticky;
    bottom: 50%;
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    button {
      outline: none;
      border: none;
      background-color: transparent;
      font-size: 2rem;
      background: linear-gradient(110deg, purple, 65%, red);
      border-radius: 50%;
      min-width: 4rem;
      min-height: 4rem;
      color: #fff;

      &:hover {
        transform: scale(1.2);
        background: linear-gradient(110deg, red, 65%, purple);
        transition: all 0.5s ease;
      }
      &:active {
        transform: scale(0.9);
      }
    }
    .reversed {
      transform: rotate(180deg);
      &:hover {
        transform: scale(1.2) rotate(180deg);
        background: linear-gradient(110deg, red, 65%, purple);
        transition: all 0.5s ease;
      }
    }
  }
}
</style>
