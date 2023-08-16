let nombre = prompt("Por favor, introduce tu nombre:");

function solicitarNombre() {
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
edadValida();

function calculadora (num1, num2, operacion){
    let num1 = parseInt (prompt ('Ingresa un numero del 1 al 100'))
    let num2 = parseInt (prompt ('Ingresa otro numero del 1 al 100'))
    let operacion = prompt ("Ingrese la operación que desea: sumar, restar, multiplicar, dividir")
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Operación no identificada"
    }
}
let resultado = calculadora(num1, num2, operacion);
alert(`El resultado es ${resultado}`)