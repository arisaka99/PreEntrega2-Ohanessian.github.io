let carrito = []

class producto{
    constructor(nombreProducto, precio, id){
    this.nombreProducto = nombreProducto
    this.precio = precio
    this.id = id
    }
}

const producto0 = new producto("Expresso", 300, "expresso")
const producto1 = new producto("Latte", 500, "latte")
const producto2 = new producto("Cortado", 400, "cortado")
const producto3 = new producto("Capuchino", 600, "capuchino")
const producto4 = new producto("Alfajor", 200, "alfajor")

// Adding products to the carrito array
/* carrito.push(producto0, producto1, producto2, producto3, producto4);

// Displaying all products in the carrito array
console.log(carrito); */

alert("Te damos la bienvenida al sitio web de nuestro Coffee Shop!")

let agregar = "si";

while(agregar!="no") {
    const productos = [producto0, producto1, producto2, producto3, producto4];
    const menu = productos.map(
        (producto) => producto.nombreProducto + " $" + producto.precio + " - "
    );          
    console.log("Menu: " + menu)

    let eleccion = prompt("Este es nuestro menu, escriba lo que desea comprar: " +  menu)
    eleccion = eleccion.toLowerCase();
    while (eleccion != "expresso" && eleccion != "latte" && eleccion != "cortado" && eleccion != "capuchino" && eleccion != "alfajor") {
        alert("Vuelva a intentarlo");
        eleccion = prompt("Este es nuestro menu, escriba lo que desea comprar: " + menu);
    }
    const seleccionado = productos.find(producto => producto.id === eleccion.toLowerCase());
    console.log(seleccionado);
    let cantidad = parseInt(prompt("Cuantas cantidades desea comprar?"))
    while (isNaN(cantidad)) {
        alert("Su cantidad debe ser numerica")
        cantidad = parseInt(prompt("Cuantas cantidades desea comprar?"))
    }

    const preciototal = seleccionado.precio * cantidad
    const compra = {
        producto : seleccionado,
        cantidad : cantidad,
        preciototal : preciototal
    }

    carrito.push(compra)
    console.log(carrito)

    agregar = prompt("Desea agregar algo mas? (si/no)");
    while(agregar != "si" && agregar != "no") {
        alert("La respuesta debe ser si o no.");
        agregar = prompt("Desea agregar algo mas? (si/no)");
    }
}

alert("Su compra se ha realizado exitosamente! " + carrito.length + " productos por un total de $" + carrito.reduce((total, item) => total + item.preciototal, 0));
console.log("Su compra se ha realizado exitosamente! " + carrito.length + " productos por un total de $" + carrito.reduce((total, item) => total + item.preciototal, 0))

// me marie mucho con este codigo y seguro vos tambien, por favor serias muy amable de dar una correcion un poquito mas examinativa? muchas gracias!
