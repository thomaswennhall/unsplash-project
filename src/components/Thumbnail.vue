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
</style>