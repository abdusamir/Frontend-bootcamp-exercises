const DOG_LIST = "https://dog.ceo/api/breeds/list/all";

fetch(DOG_LIST)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const breeds = data.message;
    const select = document.querySelector("#doggo-options");
    Object.keys(breeds).forEach((key) => {
      let option = document.createElement("option");
      option.innerText = key;
      option.classList.add(`${key}`);
      select.appendChild(option);
    });
  });

let outputImg = document.querySelector(".doggo-img-img");
async function returnDoggo(breed) {
  let doggo = `https://dog.ceo/api/breed/${breed}/images/random`;
  await fetch(doggo)
    .then(function (resposne) {
      return resposne.json();
    })
    .then(function (data) {
      outputImg.src = data.message;
      outputImg.alt = "cute doggo";
    });
}
const dog = document.querySelector(".loading-dog");
function select() {
  const select = document.querySelector("#doggo-options");
  select.addEventListener("click", function (event) {
    if (event.target.tagName === "OPTION") {
      outputImg.classList.add("hide");
      dog.classList.remove("hide");
      returnDoggo(event.target.innerText);
    }
  });
}
outputImg.addEventListener("load", function () {
  outputImg.classList.remove("hide");
  dog.classList.add("hide");
});
select();
