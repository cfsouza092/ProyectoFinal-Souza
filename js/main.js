function solicitarNombre() {
    let nombre = prompt("Por favor, introduce tu nombre:");
    
    while (nombre === "") {
        nombre = prompt("Por favor, intenta ingresar tu nombre nuevamente");
    }
    alert (`Bienvenidx ${nombre}`);
    }
    solicitarNombre();

function pedirEdad(){
    let edad = parseInt (prompt `Ingresa tu edad`);
    while (isNaN(edad) || edad < 1) {
        edad = parseInt (prompt `Ingresa una edad válida`)
    }
    return edad
}

function edadValida (){
    if (pedirEdad()<18){
        alert ("No puedes ingresar al sitio")
    } else {
        alert (`Bienvenidx ${nombre}`)
    }
}
edadValida()