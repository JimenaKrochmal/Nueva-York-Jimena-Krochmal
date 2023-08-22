
//creo y cargo las experiencias en mi HTML
const experiencias = [
    { id: 1, nombre: "Monumentos", precio: 100, imagen: "https://cdn.milenio.com/uploads/media/2020/05/21/la-estructura-ha-sido-sede.jpg" },
    { id: 2, nombre: "Parques", precio: 50, imagen: "https://drive.google.com/uc?export=view&id=1xIxVa7sKmx6_8-cLg1XkYawcnZmS2nFg" },
    { id: 3, nombre: "Rascacielos", precio: 56, imagen: "https://media.architecturaldigest.com/photos/61708d2c231989f8d88f8fe2/3:2/w_5481,h_3654,c_limit/Summit_Exterior.jpg" },
    { id: 4, nombre: "Obras de teatro", precio: 150, imagen: "https://static.anuevayork.com/wp-content/uploads/2016/10/13144808/El-Rey-Leon-Broadway-comprar-entradas.jpg" },
];

experiencias.forEach(experiencia => {
    let div = document.createElement("div");
    div.className = 'contenedor-div'
    div.innerHTML = `
    <h2> Id: ${experiencia.id} </h2>
    <img src= "${experiencia.imagen}" alt=${experiencia.nombre}/>
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








