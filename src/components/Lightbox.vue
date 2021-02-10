<template>
  <div class="wrapper">
    <article class="lightbox">
      <div class="action-panel">
        <span class="material-icons icon close" @click="closeLightbox"
          >close_fullscreen
        </span>
        <Favorite :imageObj="getImageObj" />
        <a class="material-icons icon" :href="getImageObj.links.download"
          >download</a
        >
      </div>
      <div class="image-container">
        <img :src="getImageObj.urls.regular" alt="" />
      </div>
      <div class="information-panel">
        <p>
          Creator: {{ getImageObj.user.first_name }}
          {{ getImageObj.user.last_name }}
        </p>
        <a
          v-if="getImageObj.user.portfolio_url"
          class="material-icons icon"
          :href="getImageObj.user.portfolio_url"
          target="_blank"
          >link
        </a>
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
import Favorite from "@/components/Favorite.vue";

export default {
  components: { Favorite },
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
    getImageObj() {
      return this.images[this.imageIndex]
        ? this.images[this.imageIndex]
        : this.setImageObj();
    },
    isArrayEmpty() {
      return this.images.length !== 0;
    },
  },
  methods: {
    closeLightbox() {
      this.$emit("closeLightbox");
    },

    setImageObj() {
      if (this.isArrayEmpty) {
        this.prevImage();
      } else {
        this.closeLightbox();
        return { links: "", urls: "", user: "" };
      }
      return this.images[this.imageIndex];
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
        if (this.images.length === 0) {
          this.$destroy();
        }
      } else {
        this.imageIndex--;
      }
    },
  },

  created() {
    const imageObj = this.images.find((obj) => obj.id == this.id);
    this.imageIndex = this.images.indexOf(imageObj);
    console.log("HELLO");
    // this.imageIndex = this.id;
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

  a {
    text-decoration: none;
  }

  .lightbox {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-height: 90vh;
    max-width: 90vw;

    @media screen and (min-width: 800px) {
      max-width: 55vw;
    }

    .action-panel,
    .information-panel {
      width: 90%;
      margin: 0 auto;
      background-color: rgba(201, 201, 201, 0.8);

      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 1.4rem;

      @media screen and (min-width: 800px) {
        max-width: 80%;
      }

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
    }

    .image-container {
      min-width: 80%;
      max-width: 90%;
      margin: 0;

      overflow-y: auto;

      @media screen and (min-width: 800px) {
        max-width: 80%;
      }

      img {
        max-width: 100%;
      }
    }
  }
  .buttons {
    position: absolute;
    bottom: 5%;
    left: 2.5%;
    width: 95%;
    margin: 0 auto;
    z-index: 9999;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 800px) {
      bottom: auto;
      top: 50%;
    }

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
