<template>
  <article class="search-bar">
    <form onsubmit="return false;">
      <input
        id="search"
        type="text"
        placeholder="type something here..."
        v-model="input"
      />
      <button @click="logInput">SEARCH</button>
    </form>
    <p>{{ output }}</p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      output: ""
    };
  },

  methods: {
    logInput() {
      this.output = this.input
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