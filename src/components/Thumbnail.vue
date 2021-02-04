<template>
  <article class="thumbnail">
      <img :src="imageUrl" :alt="imageAlt">
  </article>
</template>

<script>
export default {
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
</script>

<style lang="scss" scoped>
    .thumbnail{
        img{
            max-height: 250px;
            &:hover{
                transform: scale(1.05);
                transition: all 200ms ease;
            }
        }
    }
</style>