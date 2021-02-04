<template>
  <article class="lightbox">
      
    <p>Lightbox</p>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lightbox {
position: fixed;
top: 0%;
width: 100%;
height: 100%;
background-color: rgba($color: #000000, $alpha: 0.5);
z-index: 1;
display: none;

}
</style>