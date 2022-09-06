// Fetch to retrieve information from internal JSON (simulating external API).

fetch("../json/sanbragoneArray.json")
  .then((response) => response.json())
  .then((dataArray) => {

    // Function and iteration to display the catalogs (HTML code - cards) of each trip on the web page.

    const showCatalog = () => {
      const catalogNode = document.getElementById("catalog");
      let catalogHTML = "";

      for (const product of dataArray) {
        catalogHTML += productToHTML(product);
      }

      catalogNode.innerHTML = catalogHTML;
      buttonCatalog();
    };

    // Function and iteration to display the products in the cart (HTML code - cards) on the web page.

    const showCart = () => {
      const cartNode = document.getElementById("totalCart");
      const priceNode = document.getElementById("totalAmount");

      let cartHTML = "";
      let price = 0;
      for (const product of shoppingCart) {
        cartHTML += cartToHTML(product);
        price += product.price;
      }

      cartNode.innerHTML = cartHTML;
      priceNode.innerHTML = price;

      buttonCart();
    };

    // Functions and event that listens when a button of any of the cards of any of the arrays is clicked.

    const buttonCatalog = () => {
      for (const product of dataArray) {
        const buttonCatalog = document.getElementById(
          `button-catalog-${product.id}`
        );

        buttonCatalog.addEventListener("click", () => {
          const productCart = {
            nameImage: product.nameImage,
            price: product.price,
            idPurchase: counterCart,
          };

          // Popup (from Toastify library) for confirmation of photo added to cart.
          Toastify({
            text: "Photo added to cart :D",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "black",
            },
            onClick: function () {}, // Callback after click
          }).showToast();

          counterCart += 1;
          shoppingCart.push(productCart);
          showCart();
          localStorage.setItem("itemCart", JSON.stringify(shoppingCart));
        });
      }
    };

    const buttonCart = () => {
      for (const product of shoppingCart) {
        const buttonCart = document.getElementById(
          `button-cart-${product.idPurchase}`
        );

        buttonCart.addEventListener("click", () => {
          const index = shoppingCart.findIndex(
            (p) => p.idPurchase == product.idPurchase
          );

          // Popup (from Toastify library) for confirmation of photo removed from cart.
          Toastify({
            text: "Photo removed from cart :(",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "black",
            },
            onClick: function () {}, // Callback after click
          }).showToast();

          shoppingCart.splice(index, 1);
          showCart();
          localStorage.removeItem("itemCart");
        });
      }
    };

    // Execution of function to add to catalog.

    showCatalog();

    // It retrieves the information from the localStorage and validates if the cart has items to present them again on the web. For this I use the logical operator OR.
    const shoppingCart = JSON.parse(localStorage.getItem("itemCart")) || [];
    showCart();

    // A ternary operator is used to show whether the LS is empty or full. Based on that I display a message or the array elements.
    shoppingCart != 0
      ? console.log(shoppingCart)
      : console.log("El localStorage está vacío.");
  });

// Variable for cart counter.

let counterCart = 0;

// Function with HTML code to add the cards from the arrays that I have declared, to the web.

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

// Function with HTML code to add the cards of what is being added to the cart, to the web (shopping cart).

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