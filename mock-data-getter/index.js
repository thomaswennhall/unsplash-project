const axios = require("axios").default;
const fs = require("fs-extra");
const path = require("path");
require("dotenv").config();

const API_URL = process.env.API_URL;
const API_QUERIES = process.env.API_QUERIES.replace(
  "API_ACCESS_KEY",
  process.env.API_ACCESS_KEY
);
const url = API_URL + API_QUERIES;

async function getData() {
  axios
    .get(`${url}`)
    .then((res) => {
      return { ...res.data, ...res.headers };
    })
    .then((data) => {
      const fileLocation = path.join(__dirname, "mockData/data.json");

      fs.outputJSONSync(fileLocation, data, (err) => {
        console.log("ERROR", err);
      });
    });
}

getData();
