import axios from "axios";

const API = ((axios) => {
  const pagination = {
    nextPage: 1,
    previousPage: 0,
    numPages: 0,
    perPage: 0,
  };
  const urls = {
    baseUrl: `https://api.unsplash.com`,
    currentUrl: "",
    state: "default",
    queries: {
      perPage: "&per_page=",
      page: "&page=",
      search: "&query=",
    },
    default: function(nextPage) {
      const cat =
        this.state === "default"
          ? `${this.baseUrl}/photos`
          : `${this.baseUrl}/search`;
      return cat.concat(
        `/?client_id=${process.env.VUE_APP_API_KEY}${this.queries.perPage}${pagination.perPage}${this.queries.page}${nextPage}`
      );
    },
    search: function(nextPage, searchValue) {
      console.log("RUnning search query");
      const defaultQuery = this.default(nextPage).concat(
        `${this.queries.search}${searchValue}`
      );
      console.log(defaultQuery);
      return defaultQuery;
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
      const { id, urls, user, description, alt_description, links } = obj;
      output.push({ id, urls, user, description, alt_description, links });
    });
    console.log(output, "From live");
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
      initPagination(data["x-total"]);
      return buildObj(data.data);
    },
    async getNextPage(searchVal) {
      pagination.nextPage++;
      pagination.previousPage++;

      if (pagination.nextPage > pagination.numPages) {
        pagination.nextPage = 1;
        pagination.previousPage = pagination.numPages;
      } else if (pagination.previousPage > pagination.numPages) {
        pagination.previousPage = 1;
      }

      urls.currentUrl = urls[urls.state](pagination.nextPage, searchVal);

      const data = await getData();

      return urls.state === "default"
        ? buildObj(data.data)
        : buildObj(data.data.photos.results);
    },
    async getPreviousPage(searchVal) {
      pagination.nextPage--;
      pagination.previousPage--;
      if (pagination.previousPage === 0) {
        pagination.nextPage = 1;
        pagination.previousPage = pagination.numPages;
      } else if (pagination.nextPage === 0) {
        pagination.nextPage = pagination.numPages;
      }

      urls.currentUrl = urls[urls.state](pagination.previousPage, searchVal);
      console.log(urls.currentUrl, "current live url from previous page");
      const data = await getData();
      return urls.state === "default"
        ? buildObj(data.data)
        : buildObj(data.data.photos.results);
    },
    async searchQuery(searchVal) {
      urls.state = "search";
      pagination.nextPage = 1;
      urls.currentUrl = await urls[urls.state](pagination.nextPage, searchVal);
      const data = await getData();
      initPagination(data["x-total"]);
      return buildObj(data.data.photos.results);
    },
    getNumPages() {
      return pagination.numPages;
    },
  };
})(axios);

export default API;
