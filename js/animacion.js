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

productos.forEach((item) => {
    console.log(item.nombre);
    console.log(item.precio);
});

function buscarShow() {
    let busqueda = prompt ("Ingrese el Show que desea consultar: Magia, Burbujas, Payaso, Personajes")
    const producto = productos.find((item)=> item.nombre === busqueda);
    console.log(producto);
    if (producto) {
        const mensaje = `
            Nombre: ${producto.nombre}
            Precio: $${producto.precio}
        `;
        alert(mensaje);
    } else {
        alert("El Show no se encuentra disponible");
    }
}
buscarShow()