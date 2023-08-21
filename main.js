
const experiencias = [
    { id: 1, nombre: "hola", precio: 100 },
    { id: 2, nombre: "chau", precio: 3 },
    { id: 3, nombre: "cnd", precio: 56 },
    { id: 4, nombre: "po", precio: 8908 },
];

let carrito = [];

// Cargar carrito desde el Local Storage al inicio
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

experiencias.forEach(experiencia => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2> Id: ${experiencia.id} </h2>
    <p class='experiencia-producto'> Nombre: ${experiencia.nombre} </p>
    <p class='experiencia-producto'> precio: $${experiencia.precio} </p>
    <button onclick='agregarProducto(${experiencia.id})'> Agregar al carrito </button>
    `

    let main = document.querySelector('main')

    main.append(div);
});





