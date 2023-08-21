
//creo y cargo las experiencias en mi HTML
const experiencias = [
    { id: 1, nombre: "Puente de Brooklyn", precio: 100},
    { id: 2, nombre: "Bryant Park", precio: 50 },
    { id: 3, nombre: "Summit", precio: 56 },
    { id: 4, nombre: "Rey León", precio: 150 },
];

experiencias.forEach(experiencia => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2> Id: ${experiencia.id} </h2>
    <h3 class='experiencia-producto'> Nombre: ${experiencia.nombre} </h3>
    <h3 class='experiencia-producto'> precio: $${experiencia.precio} </h3>
    <button class= 'boton-carrito-agregar' onclick='agregarProducto(${experiencia.id})'> Agregar al carrito </button>
    `

    let main = document.querySelector('main')

    main.append(div);
});



let carrito = [];

// Cargo el carrito en caso de que ya tenga algo ingresado 
const carritoGuardado = localStorage.getItem("carrito");
if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
}

const agregarProducto = producto => {
    const productoAgregado = experiencias.find(experiencia => experiencia.id === producto);

    const productoEnCarrito = carrito.find(prod => prod.id === producto);
    if (!productoEnCarrito) {
        carrito.push(productoAgregado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}








