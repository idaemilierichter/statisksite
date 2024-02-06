const parametre = new URLSearchParams(window.location.search);
const id = parametre.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((res) => res.json())
  .then(vis);

const temp = document.querySelector("template").content;
const parent = document.querySelector("section");

function vis(data) {
  console.log(data[0]);
  document.querySelector(".productname").textContent = data.productdisplayname;
  document.querySelector(".brand").textContent = data.brandname;
  document.querySelector(".price").textContent = data.price;
  document.querySelector(".displayname").textContent = data.productdisplayname;
  document.querySelector(".farve").textContent = data.basecolour;
  document.querySelector(".farve2").textContent = data.basecolour;
  document.querySelector(".id").textContent = data.id;
  document.querySelector("img").src = data.image_url;
}
