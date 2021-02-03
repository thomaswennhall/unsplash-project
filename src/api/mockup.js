import data from "./data.json";

const pagination = {
  numPages: 0,
  perPage: 0,
  prevPage: 0,
  nextPage: 0,
};
const BASE_URL = "https://api.unsplash.com/photos/";
export const getData = (perPage) => {
  const url = BASE_URL.concat(
    `?client_id=${process.env.VUE_UNSPLASHED_KEY}&per_page=${perPage}`
  );
  console.log("The url will be", url);
  pagination.numPages = Number(data["x-total"]) / Number(data["x-per-page"]);

  return data.data;
};
