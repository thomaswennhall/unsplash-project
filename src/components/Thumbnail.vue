<template>
  <article class="thumbnail">
    <img :src="imageUrl" :alt="imageAlt" />
  </article>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      favoriet: false,
    };
  },
  computed: {
    imageUrl() {
      return this.image.urls.thumb;
    },
    imageAlt() {
      return this.image.alt_description;
    },
    isFavorite() {
      return this.favorite;
    },
  },
  methods: {
    setAsFavorite() {},
  },
};
</script>

<style lang="scss" scoped>
.thumbnail {
  position: relative;
  /* background-color: #222; */
  margin: 0.2rem 0.2rem;
  img {
    max-height: 250px;
    box-shadow: -1px 0px 2px 1px rgba(0, 0, 0, 0.3);
    &:hover {
      transform: scale(1.05);
      transition: all 200ms ease;
    }
  }
}
</style>
