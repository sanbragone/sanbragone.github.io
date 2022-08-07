// Bienvenida al sitio.
alert("Welcome to sanbragone.ar shopping site! :)");

// Validacion de mayoria de edad.
let input = parseInt(prompt("Enter your year of birth (YYYY)"));

if (input <= 2004) {
  // Si es mayor de edad le da la bienvenida al nombre ingresado.

  alert("You are allowed to enter the site. Enjoy!");

  let nombrePila = prompt("Enter your name");

  const welcome = () => "Welcome " + nombrePila + "!";

  alert(welcome());

  // Sino se frena la aplicacion.
} else {
  alert("Site access denied due to underage :(");
}

// --------------------- ARRAYS ---------------------
// Array para fotos de Europa
const europe = [
  {
    id: 1,
    nombre: "eu2.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 2,
    nombre: "eu3.jpg",
    precio: 15,
    stock: 1.797693134862315e308,
  },
  {
    id: 3,
    nombre: "eu4.jpg",
    precio: 20,
    stock: 1.797693134862315e308,
  },
  {
    id: 4,
    nombre: "eu7.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 5,
    nombre: "eu8.jpg",
    precio: 20,
    stock: 1.797693134862315e308,
  },
  {
    id: 6,
    nombre: "eu9.jpg",
    precio: 15,
    stock: 1.797693134862315e308,
  },
  {
    id: 7,
    nombre: "eu10.jpg",
    precio: 15,
    stock: 1.797693134862315e308,
  },
  {
    id: 8,
    nombre: "eu11.jpg",
    precio: 12,
    stock: 1.797693134862315e308,
  },
  {
    id: 9,
    nombre: "eu12.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 10,
    nombre: "eu13.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 11,
    nombre: "eu14.jpg",
    precio: 12,
    stock: 1.797693134862315e308,
  },
  {
    id: 12,
    nombre: "eu15.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 13,
    nombre: "eu16.jpg",
    precio: 12,
    stock: 1.797693134862315e308,
  },
  {
    id: 14,
    nombre: "eu17.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 15,
    nombre: "eu18.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 16,
    nombre: "eu20.jpg",
    precio: 12,
    stock: 1.797693134862315e308,
  },
];

// Array para fotos de Mexico
const mexico = [
  {
    id: 1,
    nombre: "mx1.jpg",
    precio: 30,
    stock: 1.797693134862315e308,
  },
  {
    id: 2,
    nombre: "mx2.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 3,
    nombre: "mx3.jpg",
    precio: 15,
    stock: 1.797693134862315e308,
  },
  {
    id: 4,
    nombre: "mx4.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 5,
    nombre: "mx5.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 6,
    nombre: "mx6.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 7,
    nombre: "mx7.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 8,
    nombre: "mx8.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 9,
    nombre: "mx9.jpg",
    precio: 20,
    stock: 1.797693134862315e308,
  },
  {
    id: 10,
    nombre: "mx10.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 11,
    nombre: "mx11.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 12,
    nombre: "mx12.jpg",
    precio: 18,
    stock: 1.797693134862315e308,
  },
  {
    id: 13,
    nombre: "mx13.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 14,
    nombre: "mx14.jpg",
    precio: 16,
    stock: 1.797693134862315e308,
  },
  {
    id: 15,
    nombre: "mx15.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 16,
    nombre: "mx16.jpg",
    precio: 16,
    stock: 1.797693134862315e308,
  },
];

// Array para fotos de NYC
const nyc = [
  {
    id: 1,
    nombre: "nyc1.jpg",
    precio: 20,
    stock: 1.797693134862315e308,
  },
  {
    id: 2,
    nombre: "nyc2.jpg",
    precio: 35,
    stock: 1.797693134862315e308,
  },
  {
    id: 3,
    nombre: "nyc3.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 4,
    nombre: "nyc4.jpg",
    precio: 30,
    stock: 1.797693134862315e308,
  },
  {
    id: 5,
    nombre: "nyc5.jpg",
    precio: 50,
    stock: 1.797693134862315e308,
  },
  {
    id: 6,
    nombre: "nyc6.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 7,
    nombre: "nyc7.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 8,
    nombre: "nyc8.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 9,
    nombre: "nyc9.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 10,
    nombre: "nyc10.jpg",
    precio: 15,
    stock: 1.797693134862315e308,
  },
  {
    id: 11,
    nombre: "nyc11.jpg",
    precio: 25,
    stock: 1.797693134862315e308,
  },
  {
    id: 12,
    nombre: "nyc12.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 13,
    nombre: "nyc13.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 14,
    nombre: "nyc14.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 15,
    nombre: "nyc15.jpg",
    precio: 10,
    stock: 1.797693134862315e308,
  },
  {
    id: 16,
    nombre: "nyc16.jpg",
    precio: 25,
    stock: 1.797693134862315e308,
  },
];

// Genero un nuevo array ("trips") juntando los tres arrays y lo muestro en consola.
const trips = europe.concat(mexico, nyc);
console.log(trips);

// Parseo el array "trips" y muestro en consola nombre y precio de todos los objetos.
for (const nombre of trips) {
  console.log(nombre.nombre);
  console.log(nombre.precio);
}

// Veo la longitud del nuevo array "trips" (48 objetos) y lo muestro en consola para control interno.
console.log("El array TRIPS tiene " + trips.length + " objetos en total");

// Filtro para precio menor a 25 dolares.
const filtroPrecio = trips.filter((el) => el.precio < 25);
console.log(filtroPrecio);

//////////////////////////////////
