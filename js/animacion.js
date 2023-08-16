class Shows {
    constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    }
}

const productos = [];

productos.push(new Shows("Magia", 7500));
productos.push(new Shows("Burbujas", 5550));
productos.push(new Shows("Payaso", 6500));
productos.push(new Shows("Personajes", 9500));

  //pedimos el nombre del producto a consultar
let nombre = prompt("Ingrese el nombre del show a consultar: Magia, Burbujas, Payaso, Personajes");

while (nombre != "ESC") {
    //declaramos la variable que contendrá el producto en caso de encontrarlo
    let producto;

    //recorremos el arreglo verificando si alguno de los productos cumple con el nombre
    for (const item of productos) {
        if (item.nombre === nombre) {
            producto = item;
        }
    }

    if (producto) {
        let mensaje = `
            Nombre: ${producto.nombre}
            Precio: $${producto.precio}
        `;
    alert(mensaje);
    } else {
        alert("El Show no se encuentra disponible");
    }
    nombre = prompt("Ingrese el nombre del show a consultar: Magia, Burbujas, Payaso, Personajes");
}