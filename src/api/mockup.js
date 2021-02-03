import data from "./data.json";
const pagination = {
  numPages: 0,
  perPage: 0,
  prevPage: 0,
  nextPage: 0,
};

const getData = (nextPage) => {
  console.log("perPage", nextPage);
  console.log("page", pagination.nextPage);
  console.log(
    "Returning from url:\n" +
      `https://api.unsplash.com/photos/?client_id=mockup_access_key&per_page=${pagination.perPage}&page=${nextPage}`
  );
  return data;
};

const buildObject = (data) => {
  const arr = [];
  Object.keys(data).forEach((key) => {
    const { urls, links, user } = data[key];
    const obj = {
      urls,
      links,
      user,
    };
    arr.push(obj);
  });

  return arr;
};

export const initApi = (perPage) => {
  console.log("%c##########################################", "color:green");
  console.log("%c Init api", "color:green;font-size:14px");
  pagination.nextPage = 1;
  pagination.perPage = perPage;
  const mockData = getData(pagination.nextPage);
  pagination.numPages = Math.ceil(
    parseInt(mockData.headers["x-total"]) / parseInt(perPage)
  );
  pagination.prevPage = pagination.numPages;
  return buildObject(mockData.data);
};

export const getNextPage = () => {
  console.log("%c##########################################", "color:green");
  console.log("%c Next Page", "color:green;font-size:14px");
  pagination.nextPage++;
  pagination.prevPage++;

  if (pagination.nextPage > pagination.numPages) {
    pagination.nextPage = 1;
    pagination.prevPage = pagination.numPages;
  }
  const mockData = getData(pagination.nextPage);
  return buildObject(mockData.data);
};

export const getPreviousPage = () => {
  console.log("%c##########################################", "color:green");
  console.log("%c Previous Page", "color:green;font-size:14px");
  pagination.nextPage--;
  pagination.prevPage--;
  if (pagination.prevPage < 1) {
    pagination.prevPage = pagination.numPages;
    pagination.nextPage = 1;
  }
  const mockData = getData(pagination.prevPage);
  return buildObject(mockData.data);
};
