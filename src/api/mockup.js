import data from "./data.json";
const pagination = {
  numPages: 0,
  perPage: 0,
  prevPage: 0,
  nextPage: 1,
};
const urlQueries = {
  currentQuery: "",
  perPage: "&per_page=",
  page: "&page=",
  search: "&query=",
  default: function() {
    return `${this.perPage}${pagination.perPage}${this.page}${pagination.nextPage}`;
  },
  searchQuery: function(searchValue) {
    const defaultQuery = this.default();
    return defaultQuery.concat(`${this.search}${searchValue}`);
  },
};

const getData = () => {
  debug("Get Data function");
  console.log(
    "Returning from url:\n" +
      `https://api.unsplash.com/photos/?client_id=mockup_access_key=${urlQueries.currentQuery}`
  );
  return data;
};

const buildObject = (data) => {
  const arr = [];
  Object.keys(data).forEach((key) => {
    const { urls, links, user, description, alt_description } = data[key];
    arr.push({ urls, links, user, description, alt_description });
  });

  return arr;
};

const initPagination = (headers) => {
  pagination.numPages = Math.ceil(
    parseInt(headers["x-total"]) / parseInt(pagination.perPage)
  );
  pagination.prevPage = pagination.numPages;
};

export const defaultQuery = (perPage) => {
  pagination.perPage = perPage;
  urlQueries.currentQuery = urlQueries.default();
  const mockData = getData();
  initPagination(mockData.headers);
  return buildObject(mockData.data);
};

export const getNextPage = () => {
  pagination.nextPage++;
  pagination.prevPage++;

  if (pagination.nextPage > pagination.numPages) {
    pagination.nextPage = 1;
    pagination.prevPage = pagination.numPages;
  }
  console.log("Running");
  const mockData = getData(pagination.nextPage);
  return buildObject(mockData.data);
};

export const getPreviousPage = () => {
  pagination.nextPage--;
  pagination.prevPage--;
  if (pagination.prevPage < 1) {
    pagination.prevPage = pagination.numPages;
    pagination.nextPage = 1;
  }
  const mockData = getData(pagination.prevPage);
  return buildObject(mockData.data);
};

export const searchQuery = (searchVal) => {
  debug("Search Query");
  pagination.nextPage = 1;
  urlQueries.currentQuery = urlQueries.searchQuery(searchVal);
  const mockData = getData();

  initPagination(mockData.headers);

  return buildObject(mockData.data).filter(
    (obj) =>
      (obj.description !== null &&
        obj.description.toLowerCase().includes(searchVal.toLowerCase())) ||
      (obj.alt_description !== null &&
        obj.alt_description.toLowerCase().includes(searchVal.toLowerCase()))
  );
};

const debug = (title) => {
  console.log("%c##########################################", "color:green");
  console.log("%c" + title, "color:green;font-size:14px");
};
