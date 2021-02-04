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
    state: "default",
    queries: {
      perPage: "&per_page=",
      page: "&page=",
      search: "&query=",
    },
    default: function(nextPage) {
      return `${this.baseUrl}${this.queries.perPage}${pagination.perPage}${this.queries.page}${nextPage}`;
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
      urls.currentUrl = urls[urls.state](pagination.nextPage);
      const data = await getData();
      console.log(data, "From live");
      initPagination(data["x-total"]);
      return buildObj(data.data);
    },
    async getNextPage() {
      pagination.nextPage++;
      pagination.previousPage++;

      if (pagination.nextPage > pagination.numPages) {
        pagination.nextPage = 1;
        pagination.previousPage = pagination.numPages;
      } else if (pagination.previousPage > pagination.numPages) {
        pagination.previousPage = 1;
      }
      console.log(urls.currentUrl, "current live url,from next page");

      urls.currentUrl = urls[urls.state](pagination.nextPage);
      const data = await getData();
      return buildObj(data.data);
    },
    async getPreviousPage() {
      pagination.nextPage--;
      pagination.previousPage--;
      if (pagination.previousPage === 0) {
        pagination.nextPage = 1;
        pagination.previousPage = pagination.numPages;
      } else if (pagination.nextPage === 0) {
        pagination.nextPage = pagination.numPages;
      }

      urls.currentUrl = urls[urls.state](pagination.previousPage);
      console.log(urls.currentUrl, "current live url from previous page");
      const data = await getData();
      return buildObj(data.data);
    },
  };
})(axios);

export default test;
