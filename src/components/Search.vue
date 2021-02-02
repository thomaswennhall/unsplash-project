<template>
    <article class="search-bar">
        <input id="search" type="text" placeholder="type something here...">
        <button>SEARCH</button>
    </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-bar{
    min-width: 25rem;
    input, button{
        font-family: inherit;
        padding: 0.6rem;
    }
}
</style>