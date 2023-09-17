const webSocket = io();
const productContainer = document.getElementById("productContainer");
const realTimeForm = document.getElementById("realtime-form");

realTimeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(realTimeForm);

  const productJson = {};
  for (const [key, value] of form.entries()) {
    productJson[key] = value;
  }
  productJson.price = parseInt(productJson.price);

  webSocket.emit("addProduct", productJson);
  realTimeForm.reset();
});

document.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("delete-product")) {
    const productId = +event.target.dataset.productid;
    console.log(typeof productId);
    webSocket.emit("deleteProduct", productId);
  }
});
webSocket.on("productList", (info) => {
  productContainer.innerHTML = info.map((a) => {
    return `
  <div class="card">
  <h1>${a.title}</h1>
  <h3>${a.description}</h3>
  <div class="category">
    <h5>category: ${a.category}</h5>
    <h3>${a.price}usd$</h3>
  </div>
  <button class="delete-product" data-productid="${a.id}" >Eliminar
    Producto</button>
</div>
`;
  });
});