import Vue from "vue";
import Vuex from "vuex";
import API from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    favoriteImages: [],
  },
  getters: {
    getImages: (state) => (favoriteState) =>
      favoriteState ? state.favoriteImages : state.images,
    getFavoriteImage: (state) => (imageObj) =>
      state.favoriteImages.some((image) => image.id === imageObj.id)
        ? "is-favorite"
        : "",
  },
  mutations: {
    setImages(state, images) {
      state.images = images;
    },
    setFavoriteImages(state, images) {
      state.favoriteImages = images;
    },
    removeFromFavorites(state, image) {
      state.favoriteImages = state.favoriteImages.filter(
        (fav) => fav.id !== image.id
      );
    },
    addToFavorites(state, image) {
      state.favoriteImages.push(image);
    },
  },
  actions: {
    async initApp({ commit }, perPage) {
      const images = await API.init(perPage);
      commit("setImages", images);
    },
    async nextPage({ commit }, searchVal) {
      const images = await API.getNextPage(searchVal);
      commit("setImages", images);
    },
    async previousPage({ commit }, searchVal) {
      const images = await API.getPreviousPage(searchVal);
      commit("setImages", images);
    },
    async searchQuery({ commit }, input) {
      let images = await API.searchQuery(input);
      if (!images) {
        images = [];
      }
      commit("setImages", images);
    },
    toggleFavoriteImagesLs({ commit }, image) {
      let favorites = JSON.parse(localStorage.getItem("favorite-images"));
      const favorite = favorites.find((fav) => fav.id === image.id);
      console.log(favorite);
      if (favorite) {
        favorites = favorites.filter((fav) => fav.id !== image.id);
        commit("removeFromFavorites", image);
      } else {
        favorites.push(image);
        commit("addToFavorites", image);
      }
      localStorage.setItem("favorite-images", JSON.stringify(favorites));
    },
    initFavoriteImagesLs({ commit }) {
      let favorites = [];
      if (localStorage.getItem("favorite-images")) {
        favorites = JSON.parse(localStorage.getItem("favorite-images"));
      }
      localStorage.setItem("favorite-images", JSON.stringify(favorites));
      commit("setFavoriteImages", favorites);
    },
  },
  modules: {},
});
