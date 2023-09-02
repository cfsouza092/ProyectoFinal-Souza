//Elementos del DOM
const carritoListaPago = document.getElementById('carrito-lista');
const carritoTotalPago = document.getElementById('carrito-total');
const carritoDatosContainerPago = document.getElementById('carrito-datos');
const botonPagarCarrito = document.getElementById('pagar-carrito');


// Obtén referencias a los elementos
const elementoOculto = document.getElementById('elementoOculto');

// Oculta el elemento cuando la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    elementoOculto.style.display = 'none';
});

// Cargar carrito en página de pago
function cargarDatosCarrito() {
    if (carrito.length > 0) {
        carritoDatosContainerPago.innerHTML = ''; // Usar el elemento global
        for (const producto of carrito) {
            const itemProducto = document.createElement('li');
            itemProducto.textContent = `${producto.nombre} - $${producto.precio}`;
            carritoDatosContainerPago.appendChild(itemProducto);
        }
        const total = document.createElement('p');
        total.textContent = `Total: $${calcularTotal()}`;
        carritoDatosContainerPago.appendChild(total);
    }
}

// Calcular el total del carrito en pagina de pago
function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

// Cargar los datos del carrito al cargar la página de pago
window.addEventListener('load', cargarDatosCarrito);

function pagarCarrito (){
    localStorage.clear();
    Swal.fire({
        title: 'Muchas gracias!',
        text: 'Envia el comprobante a atencion@fiestapp.com',
        showConfirmButton: true,
        timer: 3500,
    });
}

botonPagarCarrito.addEventListener('click', () =>{
    const formularioPago = document.getElementsByClassName("formulario-pago")[0]
    e.preventDefault();
    pagarCarrito();
});