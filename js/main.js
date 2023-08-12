function pedirNombre (){
    let nombre = prompt ("Ingrese su nombre");
    while (nombre === "" || nombre = null){
        nombre = prompt ("Por favor, intenta ingresar tu nombre nuevamente")
    }
    return nombre
}

function pedirEdad (){
    let edad = parseInt (prompt `Ingresa tu edad`);
    while (edad < 1 || inNan(edad)){
    edad = parseInt (prompt `Ingresa una edad válida`);
    }
    return edad
}

function aplicacion (){
    if(pedirEdad ()<18){
        alert ("No puedes ingresar al sitio");
    } else {
        alert (`Bienvenidx ${pedirNombre()}`)
    }
}
aplicacion ()