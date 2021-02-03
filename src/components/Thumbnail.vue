<template>
  <article class="thumbnail">
      <img :src="image" alt="">
  </article>
</template>

<script>
export default {
    data(){ return {
        image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDM2MzV8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200"
    }}
}
</script>

<style>

</style>