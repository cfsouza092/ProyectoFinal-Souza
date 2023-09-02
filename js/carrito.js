// Arreglo para almacenar los productos en el carrito
let carrito = [];

// Elementos del DOM

const carritoLista = document.getElementById('carrito-lista');
const carritoTotal = document.getElementById('carrito-total');
const carritoCantidad = document.getElementById('carrito-cantidad');
const detalleCarrito = document.getElementById('detalle-carrito');
const carritoDatosContainer = document.getElementById('carrito-datos');
const carritoGuardado = localStorage.getItem('carrito');

// Guardar carrito en localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para agregar un producto al carrito
function contratar(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    mostrarCarrito();
}

// Función para mostrar el carrito en la interfaz de usuario
function mostrarCarrito() {
    if (carrito.length > 0){
        carritoLista.innerHTML = '';

        let total = 0;
        
        for (const producto of carrito) {
            const { nombre, precio } = producto;
            const itemCarrito = document.createElement('li');
            itemCarrito.textContent = `${nombre} - $${precio}`;
            carritoLista.appendChild(itemCarrito);
            total += precio;
        }

        carritoTotal.textContent = `Total: $${total}`;
        carritoCantidad.textContent = carrito.length;

        detalleCarrito.classList.toggle('visible', carrito.length > 0);
        botonPagar.disabled = carrito.length === 0;

        guardarCarritoEnLocalStorage();
    }
}

// Función para mostrar el detalle del carrito
function mostrarDetalleCarrito() {
    detalleCarrito.classList.toggle('show');
}

// Cargar carrito guardado en localStorage
function cargarCarritoDesdeLocalStorage() {
    carrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];
    mostrarCarrito();
}

// Cargar el carrito al cargar la página
window.addEventListener('load', ()=> {
    if (carritoDatosContainer){
        cargarCarritoDesdeLocalStorage()
    }
});

//Funcion pagar carrito
function pagarCarrito (){
    Swal.fire({
        title: 'Muchas gracias!',
        text: 'Serás redirigido a la plataforma de pago',
        showConfirmButton: true,
        timer: 1500,
    });
    setTimeout (() => {
        window.location.href = './pago.html';
    }, 2000);
};

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}

// // Cargar carrito en página de pago
// function cargarDatosCarrito() {
//     if (carrito.length > 0){
//         carritoDatosContainer.innerHTML = '';
//         for (const producto of carrito) {
//             const itemProducto = document.createElement('li');
//             itemProducto.textContent = `${producto.nombre} - $${producto.precio}`;
//             carritoDatosContainer.appendChild(itemProducto);
//         }
//         const total = document.createElement('p');
//         total.textContent = `Total: $${calcularTotal()}`;
//         carritoDatosContainer.appendChild(total);
//     }
// }

// // Calcular el total del carrito en pagina de pago
// function calcularTotal() {
//     return carrito.reduce((total, producto) => total + producto.precio, 0);
// }

// // Cargar los datos del carrito al cargar la página de pago
// window.addEventListener('load', cargarDatosCarrito);

//Botones

// Boton mostrar carrito
const botonDetalle = document.querySelector('.carrito-button');
botonDetalle.addEventListener('click', () => {
    mostrarDetalleCarrito();
});

// Botón para realizar el pago
const botonPagar = document.querySelector('.carrito-pagar');
botonPagar.addEventListener('click', () => {
    pagarCarrito();
});

// Botón para vaciar el carrito
const botonVaciarCarrito = document.querySelector('.carrito-vaciar');
botonVaciarCarrito.addEventListener('click', () => {
    vaciarCarrito();
});