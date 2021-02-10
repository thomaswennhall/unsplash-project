const API = {
  state: () => {
    images: [];
  },
  getters: {
    getImages: (state) => state.images,
  },
};

export default API;
