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
    // alert ('Gracias por tu compra!'),
    pagarCarrito();
});