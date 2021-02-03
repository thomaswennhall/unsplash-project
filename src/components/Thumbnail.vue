<template>
  <article class="thumbnail">
      <img :src="image" alt="">
  </article>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
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