<template>
  <article class="lightbox">
    <button class="close" @click="closeLightbox">X</button>
    <button class="prev-button" @click="prevImage">PREVIOUS PHOTO</button>
    <img :src="getImageIndex" alt="" />
    <button class="next-button" @click="nextImage">NEXT PHOTO</button>
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

  data() {
    return {
      imageIndex: 0
    };
  },

  computed: {
    getImageIndex() {
      return this.images[this.imageIndex].urls.regular;
    }
  },

  methods: {
    closeLightbox() {
      this.$emit("closeLightbox");
    },
    nextImage() {
      if(this.imageIndex == this.images.length - 1){
        this.imageIndex = 0
      } else {
        this.imageIndex++;
      }
    },
    prevImage() {
      if(this.imageIndex == 0){
        this.imageIndex = this.images.length - 1
      } else {
        this.imageIndex--;
      }
    }
  },

  created() {
    const imageObj = this.images.find(obj => obj.id == this.id);
    this.imageIndex = this.images.indexOf(imageObj);
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
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  img {
    max-width: 400px;
    z-index: 100;
  }

  button {
    z-index: 100;

    outline: none;
    background-color: transparent;
    border: none;

    &:hover{
      transform: scale(1.1);
    }
  }
}
</style>