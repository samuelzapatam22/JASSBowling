document.addEventListener("DOMContentLoaded", () => {
  cargarCarrito();
});

function cargarCarrito() {
  const carritoItemsContainer = document.getElementById("carritoItems");
  const totalContainer = document.getElementById("totalContainer");
  const carrito = JSON.parse(localStorage.getItem("carrito"));

  carritoItemsContainer.innerHTML = "";
  totalContainer.innerHTML = "";

  let total = 0;

  if (carrito && carrito.length > 0) {
    carrito.forEach((producto, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "carrito-item";

      const image = document.createElement("img");
      image.src = producto.image;
      image.alt = producto.name;

      const detailsDiv = document.createElement("div");
      detailsDiv.innerHTML = `
                <h2>${producto.name}</h2>
                <p>${producto.description}</p>
                <p>COP $${producto.price.toLocaleString()}</p>
                <button onclick="comprarProducto(${producto.price});">Comprar</button>
                <button onclick="quitarDelCarrito(${index})">Quitar del carrito</button>
            `;

      itemDiv.appendChild(image);
      itemDiv.appendChild(detailsDiv);
      carritoItemsContainer.appendChild(itemDiv);

      total += producto.price;
    });

    totalContainer.innerHTML = `
            <p>Total: COP $${total.toFixed(0).toLocaleString()}</p>
            <button onclick="comprarTodoElCarrito(${total})">Comprar todo el carrito</button>
        `;
  } else {
    carritoItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
  }
}

function quitarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  if (carrito) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
  }
}

function comprarTodoElCarrito(total) {
  localStorage.setItem("total", total.toString());
  cargarCarrito();
  window.location.href = "../View/pasarelaPago.html";
}

function comprarProducto(total) {
    localStorage.setItem("total", total.toString());
    window.location.href = "../View/pasarelaPago.html";

}
