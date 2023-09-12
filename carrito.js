let carrito = [];

const carritoGuardado = localStorage.getItem("carrito");
if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
}


const borrarProducto = producto => {
    Swal.fire({
        title: '¿Estas seguro/a?',
        text: "Una vez borrado tendrá que ser ingresado nuevamente",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, borralo!'
    }).then((result) => {
        if (result.isConfirmed) {
            const productoEnCarrito = carrito.filter(prod => prod.id !== producto);
            if (productoEnCarrito) {
                localStorage.setItem("carrito", JSON.stringify(productoEnCarrito));
                location.reload()
            }
            Swal.fire(
                '¡Borrad0!',
                'La experiencia ha sido borrado',
                'success'
            )
        }
    })

}

if (carrito.length === 0) {
    let div = document.createElement("div");
    div.className = 'no-productos-div'
    div.innerHTML = `
        <h2> No hay productos en el carrito</h2>
    `

    let section = document.querySelector('section')

    section.append(div);
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







