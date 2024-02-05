window.addEventListener("DOMContentLoaded", init);

const fashionURL = "https://kea-alt-del.dk/t7/api/products";

let fashionTemplate;
let fashionContainer;

function init() {
  console.log("init");

  fashionTemplate = document.querySelector(".fashion_template");
  console.log("fashionTemplate", fashionTemplate);

  fashionContainer = document.querySelector(".fashion_container");
  console.log("fashionContainer", fashionContainer);

  fetch(fashionURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showFashion(json);
    });
}

function showFashion(fashionJSON) {
  let fashionClone;

  fashionJSON.forEach((fashion) => {
    console.log("fashion", fashion);
    fashionClone = fashionTemplate.cloneNode(true).content;
    fashionClone.querySelector("a").href = `produkt.html?id=${fashion.id}`;
    const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${fashion.id}.webp`;
    fashionClone.querySelector(".fashion_image").src = imagePath;
    fashionClone.querySelector(".fashion_image").alt = `Picture of a ${fashion.name} clothingitem`;
    fashionClone.querySelector(".fashion_name").textContent = fashion.productdisplayname;
    fashionClone.querySelector(".subtle").textContent = fashion.brandname;
    fashionClone.querySelector(".price").textContent = fashion.price;
    fashionContainer.appendChild(fashionClone);
  });
}
