<template>
  <section class="gallery">
    <Thumbnail
      v-for="image in images"
      :key="image.id"
      :image="image.urls.thumb"
    />
    <div class="buttons">
      <button @click="prevPage">&#60;</button>
      <button @click="nextPage">></button>
    </div>
  </section>
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
  },
  methods: {
    nextPage() {
      this.$emit("nextPage");
    },
    prevPage() {
      this.$emit("previousPage");
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  max-width: 1000px;
  padding: 2rem 0;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .buttons {
    position: fixed;
    bottom: 50%;
    width: 100%;

    display: flex;
    justify-content: space-between;
    button {
      outline: none;
      border: none;
      background-color: transparent;
      font-size: 2rem;

      &:hover {
        transform: scale(1.1);
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
}
</style>
