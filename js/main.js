let nombre = prompt ("Ingrese su nombre");

if (nombre == ""){
    alert ("No ingresaste tu nombre")
};

let edad = parseInt (prompt `Ingresa tu edad`);

while (edad < 18){
    alert ("No puedes ingresar al sitio");
    edad = parseInt (prompt `Ingresa tu edad`);
}

alert (`Bienvenidx ${nombre}`)