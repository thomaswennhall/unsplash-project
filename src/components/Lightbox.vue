<template>
  <article class="lightbox" @click="closeLightbox">
    <img :src="getImage" alt="">
  </article>
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    },
    id: {
      type: String
    }
  },

  computed: {
    getImageObj(){
      return this.images.find(obj => obj.id == this.id)
    },

    getImage() {
      return this.getImageObj.urls.regular
    }
  },

  methods: {
    closeLightbox(){
      this.$emit('closeLightbox')
    }
  }
};
</script>

<style lang="scss" scoped>
.lightbox {
position: fixed;
top: 0%;
width: 100%;
height: 100%;
background-color: rgba($color: #000000, $alpha: 0.5);
z-index: 1;

display: grid;
place-items: center;

  img{
    max-width: 400px;
    z-index: 100;
  }
}
</style>