<template>
  <article class="lightbox">
    <button class="close" @click="closeLightbox">X</button>
    <button class="prev-button" @click="prevImage">PREVIOUS PHOTO</button>
    <img :src="getImageIndex" alt="" />
    <button class="next-button" @click="nextImage">NEXT PHOTO</button>
    <div class="favorite">
      <span class="material-icons icon">favorite</span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
    },
    id: {
      type: String,
    },
  },

  data() {
    return {
      imageIndex: 0,
    };
  },

  computed: {
    getImageIndex() {
      return this.images[this.imageIndex].urls.regular;
    },
  },

  methods: {
    closeLightbox() {
      this.$emit("closeLightbox");
    },
    nextImage() {
      if (this.imageIndex == this.images.length - 1) {
        this.imageIndex = 0;
      } else {
        this.imageIndex++;
      }
    },
    prevImage() {
      if (this.imageIndex == 0) {
        this.imageIndex = this.images.length - 1;
      } else {
        this.imageIndex--;
      }
    },
  },

  created() {
    const imageObj = this.images.find((obj) => obj.id == this.id);
    this.imageIndex = this.images.indexOf(imageObj);
  },
};
</script>

<style lang="scss" scoped>
.lightbox {
  position: fixed;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.7);
  z-index: 1;
  display: grid;
  place-items: center;

  img {
    max-width: 90%;
    max-height: 90%;
    z-index: 100;
    box-shadow: 0 0 25px 5px rgba(255, 255, 255, 0.6);
  }

  .favorite {
    position: sticky;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-content: center;
    .icon {
      font-size: 1.5rem;
      color: #222;
      text-shadow: -1px 1px #000;
      cursor: pointer;
      margin-top: 0.2rem;
      &:hover {
        transform: scale(2);
        background-color: #222;
        color: #e46464;
        transition: all 200ms ease;
        z-index: 9999;
        border-radius: 4px;
        margin-top: 0.5rem;
      }
    }
  }

  button {
    z-index: 100;

    outline: none;
    background-color: transparent;
    border: none;

    color: white;
    font-size: 1.2rem;
    font-weight: 500;

    &:hover {
      transform: scale(1.1);
    }

    &.close {
      position: fixed;
      top: 4.2rem;
      left: 4.2rem;
      font-size: 2rem;
      background-color: transparent;
    }
  }
}
</style>
