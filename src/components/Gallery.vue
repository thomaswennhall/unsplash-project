<template>
  <section class="gallery">
    <Thumbnail 
        v-for="obj in array" 
        :key="obj.id"
        :image="obj.img"
    />
  </section>
</template>

<script>
import Thumbnail from '@/components/Thumbnail.vue'

export default {
    components: { Thumbnail },

    data(){ return {
        array: [
            { img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDM2MzV8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200",
                id: 1
            },
            { img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDM2MzV8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200",
                id: 2
            },
            { img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDM2MzV8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200",
                id: 3
            },
            { img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDM2MzV8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200",
                id: 4
            }
        ]
    }}
}
</script>

<style lang="scss" scoped>
    .gallery{
        width: 100%;
        padding: 1rem;

        display: grid;
        grid-auto-columns: 200px;
        grid-auto-rows: 200px;
    }
</style>