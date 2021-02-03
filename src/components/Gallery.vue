<template>
  <section class="gallery">
    <Thumbnail 
        v-for="obj in array" 
        :key="obj.id"
        :image="obj.urls.thumb"
    />
  </section>
</template>

<script>
import Thumbnail from '@/components/Thumbnail.vue'
import * as API from "@/api/mockup";

export default {
    components: { Thumbnail },

    data(){ return {
        array: []      
    }},

    created() {
    this.array = API.initApi(25);
    }
}
</script>

<style lang="scss" scoped>
    .gallery{
        max-width: 1000px;
        padding: 2rem 0;
        margin: 0 auto;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>