/*Con el siguiente código se elige el o los productos que necesita 
un cliente (Ganadores de masa/proteínas/snacks)
y el tipo del o los productos (A, B o C): */

/*Con las siguientes líneas ingresamos los datos del usuario: */
let nombre = prompt("Ingresa tu nombre: ");
let apellido = prompt("Ingresa tu apellido: ");

/*Definimos 4 variables para cada opción de los menús (Productos y tipos)*/
let opcion;
let respuesta;
let opcion2;
let respuesta2;
/*Definimos una variable para el precio total a pagar*/
let precioT = 0;

/*Definimos la clase producto, con la que crearemos los objetos comprados*/
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


/*Definimos un array para todos los productos de la tienda*/
const productosDeTienda = [];
/*Definimos un array de objetos que son los productos adquiridos por el cliente*/
const productos = [];

/*En el siguiente doble do-while se elige el producto que el cliente necesita mientras elija una opción válida*/

/*Función para llenar artículos*/
function productosDisponibles() {
    const ganadorA = new Producto("Ganador A", 350);
    productosDeTienda.push(ganadorA);
    const ganadorB = new Producto("Ganador B", 450);
    productosDeTienda.push(ganadorB);
    const ganadorC = new Producto("Ganador C", 600);
    productosDeTienda.push(ganadorC);
    const proteinaA = new Producto("Proteína A", 1100);
    productosDeTienda.push(proteinaA);
    const proteinaB = new Producto("Proteína B", 1150);
    productosDeTienda.push(proteinaB);
    const proteinaC = new Producto("Proteína C", 1400);
    productosDeTienda.push(proteinaC);
    const SnackA = new Producto("Snack A", 150);
    productosDeTienda.push(SnackA);
    const SnackB = new Producto("Snack B", 250)
    productosDeTienda.push(SnackB);;
    const SnackC = new Producto("Snack C", 300);
    productosDeTienda.push(SnackC);
}

do {
    do {
        opcion = parseInt(prompt("¿Qué tipo de productos necesita?\nIngresa 1 para ganadores de masa.\nIngresa 2 para proteínas\nIngresa 3 para snacks.\nIngresa 4 para ver todos los productos disponibles\nIngresa 5 para ver productos de un precio específico\nIngresa 6 para ver los productos elegidos\nIngresa otro número para salir"));
    } while (opcion < 0 && option > 6);

    switch (opcion) {
        case 1:
            console.log(`${nombre} ${apellido}!, ha elegido ganadores de masa.`);
            elegirGa();
            break;
        case 2:
            console.log(`${nombre} ${apellido}!, ha elegido proteínas.`);
            elegirPr();
            break;
        case 3:
            console.log(`${nombre} ${apellido}!, ha elegido snacks.`);
            elegirSn();
            break;
        case 4:
            console.log(`${nombre} ${apellido}!, ha elegido mostrar todos los productos de la tienda.`);
            productosDisponibles();
            mostrarProductos();
            break;
        case 5:
            console.log(`${nombre} ${apellido}!, ha elegido mostrar productos de un precio específico.`);
            productosDisponibles();
            buscarProductoPorPrecio()
            break;
        case 6:
            console.log(`${nombre} ${apellido}!, ha elegido mostrar productos elegidos por un cliente.`);
            mostrarProductos();
            break;
        default:
            console.log(`${nombre} ${apellido}!, ha elegido salir.`);
            break
    }
    respuesta = prompt("¿Desea adquirir productos de otra categoría? \n- Sí (Introduce S o s)\n- No (Introduce otro caracter)`");
} while (respuesta == 's' || respuesta == 'S')

/*En todas las funciones se crean objetos /

/*Función para elegir Ganadores de masa (Derivado de líneas 15 y 20)*/
function elegirGa() {
    do {
        do {
            opcion2 = parseInt(prompt("¿Qué ganador necesita?\nGanador A - $350 (Introduce 1)\nGanador B - $450 (Introduce 2)\nGanador C - $600 (Introduce 3)\n"));
        } while (opcion2 < 0 && option2 > 3);

        switch (opcion2) {
            case 1:
                console.log(`${nombre} ${apellido}!, ha elegido GA ($350).`);
                precioT += 350;
                const ganadorA = new Producto("Ganador A", 350);
                productos.push(ganadorA);
                break;
            case 2:
                console.log(`${nombre} ${apellido}!, ha elegido GB ($450)..`);
                precioT += 450;
                const ganadorB = new Producto("Ganador B", 450);
                productos.push(ganadorB);
                break;
            case 3:
                console.log(`${nombre} ${apellido}!, ha elegido GC ($600).`);
                precioT += 600;
                const ganadorC = new Producto("Ganador A", 600);
                productos.push(ganadorC);
                break;
        }
        respuesta2 = prompt(`${nombre} ${apellido}, ¿Desea elegir otro producto de esta categoría? \n- Sí (Introduce S o s)\n- No (Introduce otro caracter)`);
    } while (respuesta2 == 's' || respuesta2 == 'S')
    console.log(`${nombre} ${apellido}, pagará un total de $${precioT}`);
}

/*Función para elegir Proteínas (Derivado de líneas 15 y 24)*/
function elegirPr() {
    do {
        do {
            opcion2 = parseInt(prompt("¿Qué proteína necesita?\nProteína A - $1100 (Introduce 1)\nProteína B - $1150 (Introduce 2)\nProteína C - $1400 (Introduce 3)\n"));
        } while (opcion2 < 0 && option2 > 3);

        switch (opcion2) {
            case 1:
                console.log(`${nombre} ${apellido}!, ha elegido PA ($1100).`);
                precioT += 1100;
                const proteinaA = new Producto("Proteína A", 1100);
                productos.push(proteinaA);
                break;
            case 2:
                console.log(`${nombre} ${apellido}!, ha elegido PB ($1150).`);
                precioT += 1150;
                const proteinaB = new Producto("Proteína B", 1150);
                productos.push(proteinaB);
                break;
            case 3:
                console.log(`${nombre} ${apellido}!, ha elegido PC ($1400).`);
                precioT += 1400;
                const proteinaC = new Producto("Proteína C", 1400);
                productos.push(proteinaC);
                break;
        }
        respuesta2 = prompt(`${nombre} ${apellido}, ¿Desea elegir otro producto de esta categoría? \n- Sí (Introduce S o s)\n- No (Introduce otro caracter)`);
    } while (respuesta2 == 's' || respuesta2 == 'S')
    console.log(`${nombre} ${apellido}, pagará un total de $${precioT}`);
}

/*Función para elegir Snacks (Derivado de líneas 15 y 28)*/
function elegirSn() {
    do {
        do {
            opcion2 = parseInt(prompt("¿Qué snacks necesita?\nSnacks A - $150 (Introduce 1)\nSnacks B - $250 (Introduce 2)\nSnacks C - $300 (Introduce 3)\n"));
        } while (opcion2 < 0 && option2 > 3);

        switch (opcion2) {
            case 1:
                console.log(`${nombre} ${apellido}!, ha elegido SA ($150).`);
                precioT += 150;
                const SnackA = new Producto("Snack A", 150);
                productosDeTienda.push(SnackA);
                productos.push(SnackA);
                break;
            case 2:
                console.log(`${nombre} ${apellido}!, ha elegido SB ($250).`);
                precioT += 250;
                const SnackB = new Producto("Snack B", 250);
                productosDeTienda.push(SnackB);
                productos.push(SnackB);
                break;
            case 3:
                console.log(`${nombre} ${apellido}!, ha elegido SC ($300).`);
                precioT += 300;
                const SnackC = new Producto("Snack C", 300);
                productosDeTienda.push(SnackC);
                productos.push(SnackC);
                break;
        }
        respuesta2 = prompt(`${nombre} ${apellido}, ¿Desea elegir otro producto de esta categoría? \n- Sí (Introduce S o s)\n- No (Introduce otro caracter)`);
    } while (respuesta2 == 's' || respuesta2 == 'S')
    console.log(`${nombre} ${apellido}, pagará un total de $${precioT}`);
}

/*Médoto agregado para el segundo desafío complementario que espira hoy 13/2022*/
function mostrarProductos() {
    console.log("El cliente ha elegido los siguientes productos: ");
    for (let index = 0; index < productosDeTienda.length; index++) {
        console.log(productosDeTienda[index]);
    };
}

/*Con este método se imprimen productos que coincidan en precio con el producto ingresado*/
function buscarProductoPorPrecio() {
    precioPropuesto = parseInt(prompt("¿De qué precio quieres el producto?"));
    const preciosIguales = [];
    for (let index = 0; index < productosDeTienda.length; index++) {
        console.log(productosDeTienda[index].precio);
        if (productosDeTienda[index].precio === precioPropuesto) {
            preciosIguales.push(productosDeTienda[index]);
        }
    };
    console.log("El producto encontrado con ese precio es: " );
    preciosIguales.forEach(element => console.log(element));
}

function menorPrecio() {
    precioPropuesto = parseInt(prompt("¿Productos menores a qué precio quieres ver?"));

    for (let index = 0; index < productos.length; index++) {
        console.log(productos[index]);
    };

    let articulosMenoresAPrecio = productos.filter(producto => producto.precio < precioPropuesto)
    console.log("Los artículos con precio menor a $" + precioPropuesto + " son:");
    console.table(articulosMenoresAPrecio);
}

/*Poner métodos para mostrar nombres, precios, marcas*/

/*Poner métodos para mostrar productos según sus precios*/

