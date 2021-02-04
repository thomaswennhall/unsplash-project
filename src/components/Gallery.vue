<template>
  <section class="gallery">
    <Thumbnail
      v-for="image in images"
      :key="image.id"
      :image="image.urls.thumb"
    />
  </section>
</template>

<script>
import Thumbnail from "@/components/Thumbnail.vue";
import * as API from "@/api/mockup";

export default {
  components: { Thumbnail },
  props: {
    images: {
      type: Array,
      required: true,
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
}
</style>
