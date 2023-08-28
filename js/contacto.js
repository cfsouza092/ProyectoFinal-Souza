let formulario = document.querySelector(".formulario-contacto");

//funcion para enviar datos de formulario por consola

function enviarFormulario(event) {
    event.preventDefault();
    //Elementos del DOM
    let userName = document.querySelector("#userName").value;
    let correo = document.querySelector("#correo").value;
    let telefono = document.querySelector("#telefono").value;
    let mensaje = document.querySelector("#mensaje").value;

    if (userName !== "" && correo !== "" && telefono !== "" && mensaje !== "") {

        console.log("Nombre y apellido: " + userName)
        console.log("Correo electrónico: " + correo)
        console.log("Teléfono: " + telefono)
        console.log("Consulta: " + mensaje)

        document.querySelector("#userName").value = "";
        document.querySelector("#correo").value = "";
        document.querySelector("#telefono").value = "";
        document.querySelector("#mensaje").value = "";

        //Si todos los datos estan completos y contiene consulta se envia alerta
        Swal.fire(
            'Recibimos tu mensaje',
            'Nos contactaremos a la brevedad!',
            'success'
        )
    } else {
        //Si falta completar la consulta se envía alerta
        Swal.fire({
            icon: 'error',
            title: 'No se pudo enviar',
            text: 'Por favor, indique cual es su consulta',
            })
    }
}
    formulario.addEventListener("submit", enviarFormulario);