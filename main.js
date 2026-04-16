// Nota: Crear un repositorio y versionar cada ejercicio mediante un commit con el mensaje que considere mas claro. Crear un repositorio remoto y sincronizar el local con el mismo.

//Datos simulados:
const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];


// =======================
// PARTE 1
// =======================

// 1
console.log(productos[0].nombre);

// 2
for (let producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}

// 3
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});

// =======================
// PARTE 2
// =======================

// 4
let nombres = productos.map(p => p.nombre);
console.log(nombres);

// 5
let ropa = productos.filter(p => p.categoria === "Ropa");
console.log(ropa);

// 6
let caros = productos.filter(p => p.precio > 3000);
console.log(caros);

// 7
let gorra = productos.find(p => p.nombre === "Gorra");
console.log(gorra);


// =======================
// PARTE 3
// =======================

// 8
let hayMuyCaro = productos.some(p => p.precio > 10000);
console.log(hayMuyCaro);

// 9
let todosCaros = productos.every(p => p.precio > 1000);
console.log(todosCaros);

// 10
let incluyeCampera = nombres.includes("Campera");
console.log(incluyeCampera);
