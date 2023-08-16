class Productos {
    constructor (info){
        this.producto = info.producto;
        this.precio = info.precio;
        this.cantidad = info.cantidad;
    }

    vender () {
        if(this.cantidad === 0){
            console.log("Producto agotado")
        }else{
            this.cantidad -= 1;
        }
    }
}



let producto1 = new Productos({
    producto: "Torta", 
    precio: '$12000', 
    cantidad: 20,
});
const producto2 = new Productos ({
    producto: "Globos", 
    precio: '$1500',
    cantidad: 50,
});
const producto3 = new Productos ({
    producto: "Decoración",
    precio: '7500',
    cantidad: 20,
});

producto1.vender ();
producto1.vender ();
producto1.vender ();
producto1.vender ();
console.log(producto1);

function buscar (){
    let busquedaActiva = true;
    while(busquedaActiva){
        let buscarProducto = prompt('Ingrese el nombre del producto que desea buscar: Torta, Globos, Decoración');
        let productoEncontrado;

        if (producto1.producto.toLowerCase() === buscarProducto.toLowerCase()) {
            productoEncontrado = producto1;
        } else if (producto2.producto.toLowerCase() === buscarProducto.toLowerCase()) {
            productoEncontrado = producto2;
        } else if (producto3.producto.toLowerCase() === buscarProducto.toLowerCase()) {
            productoEncontrado = producto3;
        }

        if (productoEncontrado) {
            alert(`Producto: ${productoEncontrado.producto}\nPrecio: ${productoEncontrado.precio}\nCantidad: ${productoEncontrado.cantidad}\n`);
        } else {
            alert('Producto no encontrado.');
        }
    }
}
buscar();