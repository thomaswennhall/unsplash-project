import axios from "axios";

const test = ((axios) => {
  const pagination = {
    nextPage: 1,
    previousPage: 0,
    numPages: 0,
    perPage: 0,
  };
  const urls = {
    baseUrl: `https://api.unsplash.com/photos/?client_id=${process.env.VUE_APP_API_KEY}`,
    currentUrl: "",
    queries: {
      perPage: "&per_page=",
      page: "&page=",
      search: "&query=",
    },
    default: function() {
      return `${this.baseUrl}${this.queries.perPage}${pagination.perPage}${this.queries.page}${pagination.nextPage}`;
    },
    searchQuery: function(searchValue) {
      const defaultQuery = this.default();
      return defaultQuery.concat(`${this.queries.search}${searchValue}`);
    },
  };

  const getData = async () => {
    const response = await axios.get(urls.currentUrl);
    return { data: response.data, "x-total": response.headers["x-total"] };
  };

  const initPagination = (xTotal) => {
    pagination.numPages = Math.ceil(xTotal / pagination.perPage);
    pagination.previousPage = pagination.numPages;
  };

  const buildObj = (arr) => {
    const output = [];
    arr.forEach((obj) => {
      const { urls, user, description, alt_description } = obj;
      output.push({ urls, user, description, alt_description });
    });
    return output;
  };

  return {
    async init(perPage) {
      pagination.perPage = perPage;
      return await this.baseQuery();
    },
    async baseQuery() {
      urls.currentUrl = urls.default();
      const data = await getData();
      console.log(data);
      initPagination(data["x-total"]);
      return buildObj(data.data);
    },
    setNumPages() {
      this.setNumPages();
    },
  };
})(axios);

export default test;
