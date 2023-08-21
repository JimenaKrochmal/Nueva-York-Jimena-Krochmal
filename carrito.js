let carrito = [];

const carritoGuardado = localStorage.getItem("carrito");
if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
}

carrito.forEach(carrito => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2> Id: ${carrito.id} </h2>
    <p class='experiencia-producto'> Nombre: ${carrito.nombre} </p>
    <p class='experiencia-producto'> precio: $${carrito.precio} </p>
    <button onclick='agregarProducto(${carrito.id})'> Agregar al carrito </button>
    `

    let section = document.querySelector('section')

    section.append(div);
});