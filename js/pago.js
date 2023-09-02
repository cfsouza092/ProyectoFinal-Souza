//Pagar y finalizar compra
const botonPagarCarrito = document.getElementById('pagar-carrito');

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
    e.preventDefault()
    pagarCarrito();
    formularioPago.reset()
});