let nombre = prompt ("Ingrese su nombre");

if (nombre == ""){
    alert ("No ingresaste tu nombre")
};

let edad = parseInt (prompt `Ingresa tu edad`);

if (edad < 18){
    alert (`${nombre}, no puedes ingresar al sitio`)
}
else {
    alert (`Bienvenid@ ${nombre}`)
};