const implementos = [
  {
    tipo: "implementos",
    name: "Bola de boliche Brunswick Rhino",
    description: "Ideal para principiantes y jugadores intermedios.",
    price: 350000,
    image: "../Assets/Articulos/Implementos/bola_brunswick_rhino.jpg",
  },
  {
    tipo: "implementos",
    name: "Bola de boliche Storm Hy-Road",
    description: "Versátil en diferentes tipos de pistas.",
    price: 550000,
    image: "../Assets/Articulos/Implementos/Bola de boliche Storm Hy-Road.jpg",
  },
  {
    tipo: "implementos",
    name: "Pino de boliche estándar",
    description: "Pino de boliche tradicional.",
    price: 50000,
    image: "../Assets/Articulos/Implementos/pino.jpg",
  },
  {
    tipo: "implementos",
    name: "Pino de boliche profesional",
    description: "Pino de boliche de alta calidad para competiciones.",
    price: 100000,
    image: "../Assets/Articulos/Implementos/pino profesional.webp",
  },
  {
    tipo: "implementos",
    name: "Rampa de lanzamiento para niños",
    description: "Rampa de lanzamiento ajustable para niños.",
    price: 80000,
    image:
      "../Assets/Articulos/Implementos/Rampa de lanzamiento para niños.jpg",
  },
  {
    tipo: "implementos",
    name: "Rampa de lanzamiento profesional",
    description:
      "Rampa de lanzamiento resistente y estable para jugadores avanzados.",
    price: 150000,
    image:
      "../Assets/Articulos/Implementos/Rampa de lanzamiento profesional.jpg",
  },
];

const ropa = [
  {
    name: "Camiseta de bolos CoolWick Blackout",
    description:
      "Una camiseta de alto rendimiento diseñada para mantener la frescura y la comodidad durante el juego.",
    price: 120000,
    image: "../Assets/Articulos/Ropa/Camiseta de bolos CoolWick Blackout.jpg",
    tipo: "ropa",
  },
  {
    name: "Pantalones de bolos Brunswick Performance",
    description:
      "Pantalones duraderos y cómodos que ofrecen libertad de movimiento y estilo.",
    price: 180000,
    image:
      "../Assets/Articulos/Ropa/Pantalones de bolos Brunswick Performance.jpg",
    tipo: "ropa",
  },
  {
    name: "Chaqueta de bolos Storm Bowling Jacket",
    description:
      "Una chaqueta resistente al viento y al agua, ideal para llevarla en los boliches o en cualquier lugar.",
    price: 220000,
    image:
      "../Assets/Articulos/Ropa/Chaqueta de bolos Storm Bowling Jacket.jpg",
    tipo: "ropa",
  },
  {
    name: "Tenis de boliche Dexter",
    description: "Cómodos y duraderos para un mejor rendimiento.",
    price: 1689361,
    image: "../Assets/Articulos/Ropa/Tenis de boliche Dexter.jpg",
    tipo: "ropa",
  },
  {
    name: "Calcetines de bolos VISE Grip",
    description:
      "Calcetines acolchados y transpirables que ofrecen comodidad y soporte durante todo el día.",
    price: 25000,
    image: "../Assets/Articulos/Ropa/Calcetines de bolos VISE Grip.jpg",
    tipo: "ropa",
  },
  {
    name: "Guantes de boliche Brunswick",
    description: "Ofrecen un mejor agarre y protección.",
    price: 50000,
    image: "../Assets/Articulos/Ropa/Guantes de boliche Brunswick.jpg",
    tipo: "ropa",
  },
];
const accesorios = [
  {
    name: "Porta-bolas de bolos",
    description:
      "Práctico y resistente porta-bolas para transportar tu bola de bolos de forma segura.",
    price: 80000,
    image: "../Assets/Articulos/Accesorios/porta Bolas.jpg",
    tipo: "accesorios",
  },
  {
    name: "Guante de bolos",
    description:
      "Guante de cuero sintético diseñado para mejorar el agarre y la precisión en el lanzamiento.",
    price: 60000,
    image: "../Assets/Articulos/Accesorios/Guante de bolos.jpg",
    tipo: "accesorios",
  },
  {
    name: "Toalla de bolos",
    description:
      "Toalla absorbente para limpiar y mantener seca tu bola de bolos durante el juego.",
    price: 25000,
    image: "../Assets/Articulos/Accesorios/Toalla de bolos.webp",
    tipo: "accesorios",
  },
  {
    name: "Protector de muñeca",
    description:
      "Protector ajustable que brinda soporte y previene lesiones en la muñeca durante el juego.",
    price: 40000,
    image: "../Assets/Articulos/Accesorios/Protector de muñeca.webp",
    tipo: "accesorios",
  },
  {
    name: "Marcador de bolos",
    description:
      "Marcador de puntuación compacto y fácil de usar para llevar el registro de tus juegos.",
    price: 15000,
    image: "../Assets/Articulos/Accesorios/Marcador de bolos.jpg",
    tipo: "accesorios",
  },
  {
    name: "Limpia-pistas de bolos",
    description:
      "Herramienta para limpiar y mantener las pistas de bolos en óptimas condiciones de juego.",
    price: 35000,
    image: "../Assets/Articulos/Accesorios/Limpia-pistas de bolos.webp",
    tipo: "accesorios",
  },
];

function mostrarArticulos(articulos, tipo) {
  const cardsContainer = document.querySelector(`.cards-${tipo}`);
  cardsContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar los artículos
  articulos
      .filter((articulo) => articulo.tipo === tipo)
      .slice(0, 6)
      .forEach((articulo) => {
          const cardElement = document.createElement("div");
          cardElement.classList.add("cardArticulo");
          cardElement.innerHTML = `
              <div class="articulo-image">
                  <img src="${articulo.image}" alt="${articulo.name}" />
              </div>
              <div class="articulo-content">
                  <div class="articulo-content-info">
                      <h5 class="content-info-name">${articulo.name}</h5>
                      <p class="content-info-description">${articulo.description}</p>
                      <p class="content-info-price">COP $${articulo.price.toLocaleString()}</p>
                  </div>
              </div>
              <div>
                  <button onclick="mostrarProducto('${articulo.image}', '${articulo.name}', '${articulo.description}', ${articulo.price}); window.location.href = '../View/producto.html';">VER</button>
                  <button class="product-btn" onclick="añadirCarrito('${articulo.image}', '${articulo.name}', '${articulo.description}', ${articulo.price}); window.location.href = '../View/carrito.html';">AÑADIR AL CARRITO</button>              </div>
          `;
          cardsContainer.appendChild(cardElement);
      });
}


mostrarArticulos(implementos, "implementos");
mostrarArticulos(ropa, "ropa");
mostrarArticulos(accesorios, "accesorios");

function mostrarProducto(image, name, description, price) {
  const producto = {
      image: image,
      name: name,
      description: description,
      price: price
  };
  localStorage.setItem('productoSeleccionado', JSON.stringify(producto));
}

function añadirCarrito(image, name, description, price) {
  const producto = {
    image: image,
    name: name,
    description: description,
    price: price
  };
  
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
}