import createCard from "./createCard";
// const url = "http://localhost:3001/api/v1/projects/";
const url = "https://178.79.146.254/api/v1/projects";

getData(url);

function getData(url) {
  fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Got Json!");
      result.forEach((project) => {
        createCard(project);
      });
    })
    .catch((err) => console.error(err));
}
