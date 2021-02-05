<template>
  <article class="lightbox" @click="closeLightbox">
    <img :src="getImage" alt="" />

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

  computed: {
    getImageObj() {
      return this.images.find((obj) => obj.id == this.id);
    },

    getImage() {
      return this.getImageObj.urls.regular;
    },
  },

  methods: {
    closeLightbox() {
      this.$emit("closeLightbox");
    },
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
    max-height: 80%;
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
}
</style>
