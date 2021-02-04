<template>
  <article class="search-bar">
    <form v-on:submit.prevent="search">
      <input type="text" :placeholder="placeholder" v-model="input" />
      <button>SEARCH</button>
    </form>
  </article>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      placeholder: "Type something here...",
    };
  },

  methods: {
    search() {
      this.$emit("search", this.input);
      this.placeholder = this.input;
      this.input = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  form {
    width: 100%;

    input,
    button {
      font-family: inherit;
      outline: none;
      max-width: 34rem;

      padding: 0.6rem;
      border: 0.15rem solid #2c3e50;
    }

    input {
      width: 60%;
      border-right: none;
      border-radius: 0.3rem 0 0 0.3rem;
    }
    button {
      font-weight: 500;
      color: #2c3e50;
      border-radius: 0 0.3rem 0.3rem 0;
      background-color: #fff;

      &:hover {
        background-color: #2c3e50;
        color: white;
      }
      &:active {
        background-color: #fff;
        color: #2c3e50;
      }
    }
  }
}
</style>
