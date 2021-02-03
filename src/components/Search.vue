<template>
  <article class="search-bar">
    <form onsubmit="return false;">
      <input
        type="text"
        placeholder="type something here..."
        v-model="input"
      />
      <button @click="search">SEARCH</button>
    </form>
  </article>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },

  methods: {
    search() {
      this.$emit('search', this.input)
    }
  }
};
</script>

<style lang="scss" scoped>
.search-bar {
  input,
  button {
    font-family: inherit;
    padding: 0.6rem;
  }
}
</style>