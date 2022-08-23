// Variable para contador de carrito.

let counterCart = 0;

// Array vacio para ir agregando productos.

const shoppingCart = [];

// Funcion con codigo HTML para ir agregando las cards de los arreglos que tengo declarados, a la web.

const productToHTML = (product) => {
  return `
  <div class="col-sm-6 col-lg-3">
    <div class="card" style="width: 30rem;">
        <img src=${product.path} class="card-img-top">
        <div class="card-body">
          <h4 class="card-title">${product.nameImage}</h4>
          <h5 class="card-title">Price: U$S ${product.price}</h5>
          <button id="button-catalog-${product.id}" class="btn btn-dark animate__animated animate__pulse">Add to cart</button>
        </div>
    </div>
  </div>
  `;
};

// Funcion con codigo HTML para ir agregando las cards de lo que se va agregando al carrito, a la web (carrito de compras).

const cartToHTML = (product) => {
  return `
  <div class="col-sm-6 col-lg-3">
    <div class="card" style="width: 30rem;">
        <div class="card-body">
          <h4 class="card-title">${product.nameImage}</h4>
          <h5 class="card-title">Price: U$S ${product.price}</h5>
          <button id="button-cart-${product.idPurchase}" class="btn btn-dark">Remove</button>
        </div>
    </div>
  </div>
  `;
};

// Funcion e iteracion para mostrar los catalogos (codigo HTML - cards) de cada viaje en la pagina web.

const showCatalog = () => {
  const catalogNode = document.getElementById("catalog");
  let catalogHTML = "";

  for (const product of photos) {
    catalogHTML += productToHTML(product);
  }

  catalogNode.innerHTML = catalogHTML;
  buttonCatalog();
};

// Funcion e iteracion para mostrar los productos del carrito (codigo HTML - cards) en la pagina web.

const showCart = () => {
  const cartNode = document.getElementById("totalCart");
  const priceNode = document.getElementById("totalAmount");

  let cartHTML = "";
  let price = 0;
  for (const product of shoppingCart) {
    cartHTML += cartToHTML(product);
    price += product.price;
  }

  priceNode.innerHTML = price;
  cartNode.innerHTML = cartHTML;
  buttonCart();
};

// Funciones y evento que escucha cuando se hace clic sobre un boton de alguna de las cards de cualquiera de los arrays.

const buttonCatalog = () => {
  for (const product of photos) {
    const buttonCatalog = document.getElementById(`button-catalog-${product.id}`);

    buttonCatalog.addEventListener("click", () => {
      const productCart = {
        nameImage: product.nameImage,
        price: product.price,
        idPurchase: counterCart,
      };

      counterCart += 1;
      shoppingCart.push(productCart);
      showCart();
    });
  }
};

const buttonCart = () => {
  for (const product of shoppingCart) {
    const buttonCart = document.getElementById(`button-cart-${product.idPurchase}`);

    buttonCart.addEventListener("click", () => {
      const index = shoppingCart.findIndex((p) => p.idPurchase == product.idPurchase);
      shoppingCart.splice(index, 1);
      showCart();
    });
  }
};

// Ejecucion de funcion para agregar a catalogo.

showCatalog();
