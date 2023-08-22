let carrito = [];

const carritoGuardado = localStorage.getItem("carrito");
if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
}

const borrarProducto = producto => {
    const productoEnCarrito = carrito.filter(prod => prod.id !== producto);
    console.log(productoEnCarrito);
    if (productoEnCarrito) {
        localStorage.setItem("carrito", JSON.stringify(productoEnCarrito));
        location.reload()
    }
}

carrito.forEach(carrito => {
    let div = document.createElement("div");
    div.className = 'contenedor-div'
    div.innerHTML = `
    <h2> Id: ${carrito.id} </h2>
    <img src= "${carrito.imagen}" alt=${carrito.nombre}/>
    <p class='experiencia-producto'> Nombre: ${carrito.nombre} </p>
    <p class='experiencia-producto'> precio: $${carrito.precio} </p>
    <button onclick='borrarProducto(${carrito.id})'> Borrar del carrito </button>
    `
    let section = document.querySelector('section')

    section.append(div);
});

