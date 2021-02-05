<template>
  <div class="wrapper">
    <article class="lightbox">
      <div class="action-panel">
        <span class="material-icons icon close" @click="closeLightbox">close_fullscreen</span>
        <div class="favorite">
          <span class="material-icons icon">favorite</span>
        </div>
        <a class="material-icons icon" :href="getDownloadLink">download</a>
      </div>
      <img :src="getImage" alt="" />
      <div class="information-panel">
        <p>{{ getImageCreator.first_name }} {{ getImageCreator.last_name }}</p>
      </div>
    </article>
    <div class="buttons">
      <button class="material-icons reversed" @click="prevImage">
        play_arrow
      </button>
      <button class="material-icons" @click="nextImage">play_arrow</button>
    </div>
  </div>
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
    getImage() {
      return this.images[this.imageIndex].urls.regular;
    },

    getDownloadLink() {
      return this.images[this.imageIndex].links.download
    },

    getImageCreator() {
      return this.images[this.imageIndex].user
    }
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
.wrapper {
    position: fixed;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.7);
    z-index: 1;

    display: grid;
    place-items: center;

  .lightbox {
    box-shadow: 0 0 25px 5px rgba(255, 255, 255, 0.6);
    
    display: flex;
    flex-direction: column;
    align-items: center;

    .action-panel, .information-panel{
      width: 75%;
      margin: 0 auto;
      background-color: rgba(201, 201, 201, 0.8);

      display: flex;
      justify-content: space-between;
      padding: 0.2rem 1.4rem;

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

      .favorite {
      width: 2rem;
      height: 2rem;
      }
    }

    img {
      max-width: 75%;
      max-height: 90%;
      margin: 0;
      /* z-index: 100; */
    }

    /* button {
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
    } */
  }
  .buttons {
    position: absolute;
    top: 50%;
    left: 2.5%;
    width: 95%;
    margin: 0 auto;
    z-index: 9999;
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
