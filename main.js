
let main = document.querySelector('main')
let experiencias = [];
let carrito = [];

//utilizo fetch para traer las cosas del archivo datos.json
fetch("./datos.json")
    .then((response) => response.json())
    .then((datos) => {
        experiencias = datos;
        datos.forEach(experiencia => {
            let div = document.createElement("div");
            div.className = 'contenedor-div'
            div.innerHTML = `
            <h2> Id: ${experiencia.id} </h2>
            <img src= "${experiencia.imagen}" alt=${experiencia.nombre}/>
            <h3 class='experiencia-producto'> Nombre: ${experiencia.nombre} </h3>
            <h3 class='experiencia-producto'> precio: $${experiencia.precio} </h3>
            <button class= 'boton-carrito-agregar' onclick='agregarProducto(${experiencia.id})'> Agregar al carrito </button>
            `
            main.append(div)
        })
    })


// Cargo el carrito en caso de que ya tenga algo ingresado 
const carritoGuardado = localStorage.getItem("carrito") || ""

if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
}

const agregarProducto = producto => {
    const productoAgregado = experiencias.find(experiencia => experiencia.id === producto);

    const productoEnCarrito = carrito.find(prod => prod.id === producto);
    if (!productoEnCarrito) {
        carrito.push(productoAgregado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se agregó al carrito',
            showConfirmButton: true,
            timer: 15000
        })
    }
}








