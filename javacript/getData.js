// const url = "http://localhost:3001/api/v1/projects/";
const url = "http://178.79.146.254/api/v1/projects";

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

function createCard(project) {
  // First let's find the places I wanna generate my cards
  const front = document.querySelector(".front-end .container-cards");
  const full = document.querySelector(".full-stack .container-cards");

  // Then I created each elements in order starting a the top
  // (which is the card itself) to the deepest

  const divCard = document.createElement("div");
  divCard.className += "card";

  const divHovering = document.createElement("div");
  divHovering.className += "hovering";

  const linkLeft = document.createElement("a");
  linkLeft.href = project.websiteUrl;
  linkLeft.target = "_blank";
  linkLeft.rel = "noreferrer noopener";

  const divHoveringLeft = document.createElement("div");
  divHoveringLeft.className += "hovering-left";

  const viewPage = document.createElement("p");
  viewPage.textContent = "View Page";

  if (project.codeUrl) {
    const linkRight = document.createElement("a");
    linkRight.href = project.codeUrl;
    linkRight.target = "_blank";
    linkRight.rel = "noreferrer noopener";

    const divHoveringRight = document.createElement("div");
    divHoveringRight.className += "hovering-right";

    const viewCode = document.createElement("p");
    viewCode.textContent = "View Code";

    divHoveringRight.appendChild(viewCode);
    linkRight.append(divHoveringRight);
    divHovering.append(linkRight);
  }

  divHoveringLeft.appendChild(viewPage);
  linkLeft.append(divHoveringLeft);
  divHovering.append(linkLeft);

  divCard.append(divHovering);

  const divImage = document.createElement("div");
  divImage.className += "card__container==img";

  const img = document.createElement("img");
  img.className = "card--img";
  img.src = project.imageUrl;
  img.alt = project.altImage;

  divImage.appendChild(img);
  divCard.append(divImage);

  project.stack === "front"
    ? front.appendChild(divCard)
    : full.appendChild(divCard);
}
