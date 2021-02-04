<template>
  <article class="thumbnail">
    <img :src="imageUrl" :alt="imageAlt" />
    <div class="favorite">
      <i class="icon" @click="setAsFavorite">&#9733;</i>
    </div>
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
  img {
    max-height: 250px;
    &:hover {
      transform: scale(1.05);
      transition: all 200ms ease;
    }
  }
  .favorite {
    position: absolute;
    top: 0;
    right: 2%;
    .icon {
      font-size: 2rem;
      color: #eef136;
      text-shadow: -1px 1px #000;
      cursor: pointer;
    }

    &:hover {
      transform: scale(2);
      transition: all 200ms ease;
      z-index: 9999;
    }
  }
}
</style>
