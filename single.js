const parametre = new URLSearchParams(window.location.search);
const id = parametre.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((res) => res.json())
  .then(vis);

const temp = document.querySelector("template").content;
const parent = document.querySelector("section");

function vis(data) {
  console.log(data[0]);
  document.querySelector(".productname").textContent = data[0].productdisplayname;
  document.querySelector(".price").textContent = data[0].price;
  document.querySelector("img").src = data[0].image_url;
}
