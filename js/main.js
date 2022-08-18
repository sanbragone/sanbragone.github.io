// Funcion con codigo HTML para ir agregando las cards a la web.

const productToHTML = (product) => {
  const HTMLCode = `
  <div class="col-sm-6 col-lg-3">
    <div class="card" style="width: 30rem;">
        <img src=${product.path} class="card-img-top">
        <div class="card-body">
          <h4 class="card-title">${product.nameImage}</h4>
          <h5 class="card-title">Price: U$S ${product.price}</h5>
          <a href="#" id="button-${product.id}" class="btn btn-dark">Add to cart</a>
        </div>
    </div>
  </div>
  `;
  return HTMLCode;
};

// Funcion e iteracion para agregar cards de fotos de Europa a la web.

const addToCatalogEurope = (productEurope) => {
  const catalogEurope = document.getElementById("catalogEurope");
  catalogEurope.innerHTML += productToHTML(productEurope);
};

for (const productEurope of arrayEurope) {
  addToCatalogEurope(productEurope);
}

// Funcion e iteracion para agregar cards de fotos de Mexico a la web.

const addToCatalogMexico = (productMexico) => {
  const catalogMexico = document.getElementById("catalogMexico");
  catalogMexico.innerHTML += productToHTML(productMexico);
};

for (const productMexico of arrayMexico) {
  addToCatalogMexico(productMexico);
}

// Funcion e iteracion para agregar cards de fotos de NYC a la web.

const addToCatalogNYC = (productNYC) => {
  const catalogNYC = document.getElementById("catalogNYC");
  catalogNYC.innerHTML += productToHTML(productNYC);
};

for (const productNYC of arrayNYC) {
  addToCatalogNYC(productNYC);
}

const arrayTripsAll = arrayEurope.concat(arrayMexico, arrayNYC);

// Array vacio para ir agregando productos.

const shoppingCart = [];

// Evento que escucha cuando se hace clic sobre un boton de alguna de las cards de cualquiera de los arrays.

for (const product of arrayTripsAll) {
  const button = document.getElementById(`button-${product.id}`);
  button.addEventListener("click", () => {
    shoppingCart.push(product);
    console.log(shoppingCart);
  });
}