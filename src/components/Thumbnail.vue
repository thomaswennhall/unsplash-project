<template>
  <article class="thumbnail">
<<<<<<< HEAD
      <img :src="imageUrl" :alt="imageAlt">
=======
    <img :src="image" alt="" />
>>>>>>> 4840c9fadfe983d642cfde87d3bc19d7ab68b79d
  </article>
</template>

<script>
export default {
<<<<<<< HEAD
    props: {
        image: {
            type: Object,
            required: true
        }
    },

    computed: {
        imageUrl(){
            return this.image.urls.thumb
        },
        imageAlt(){
            return this.image.alt_description
        }
    }
}
=======
  props: {
    image: {
      type: String,
      required: true,
    },
  },
};
>>>>>>> 4840c9fadfe983d642cfde87d3bc19d7ab68b79d
</script>

<style lang="scss" scoped>
.thumbnail {
  img {
    max-height: 250px;
    &:hover {
      transform: scale(1.05);
      transition: all 200ms ease;
    }
  }
}
</style>
