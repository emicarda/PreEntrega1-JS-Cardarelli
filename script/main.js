// Ingreso de Usuario y Contrasena


/*nction loginUsuario (){
    let usuario = prompt ("Ingrese el nombre de usuario");
    let contrasena = prompt("Ingrese contraseña");
    if ((usuario == "" || contrasena == "")) {
        alert("Por favor completar los campos requeridos");
       }
    if(usuario.length < 12){
        alert("El usuario no puede tener mas de 12 caracteres.");
    }
    if(contrasena.length < 8){
        alert("La contraseña debe contener mas de 8 caracteres");
    }
}

loginUsuario();
*/


//alert("Agregar al carrito:\n 1. Chulengo con fogonero -> $30.000. \n 2. Estaca -> $17.000. \n 3. Disco de arar -> $20.000")

let producto = prompt("Agregar al carrito:\n 1. Chulengo con fogonero -> $30.000. \n 2. Estaca -> $17.000. \n 3. Disco de arar -> $20.000. \n \n Ingrese que producto desea (1, 2 o 3)")
let precio = Number


switch (producto){
    case "1":
        precio = 30000
        alert("Pagaras $" + precio)
        break;

    case "2":
        precio = 17000
        alert("Pagaras $" + precio)
        break;
    
    case "3":
        precio = 20000
        alert("Pagaras $" + precio)
        break;

    default:
        break;
}


//Formas de pago
//Efectivo 10% desc
// Tarjeta 1 sin interes
// 3 cuotas con 10% de recargo
// 6 cuotas con 20% de recargo

let formaDePago = prompt ("Indique su forma de pago: (1 efectivo, 2 tarjeta)")
let total = Number

let cuota1 = (n1, n2) => {return resultado = n1 / n2};
let cuota3= (n1, n2) => {return resultado = (n1+(n1*0.1))/n2};
let cuota6= (n1, n2) => {return resultado = (n1+(n1*0.2))/n2};


if (formaDePago =="1"){
    total = precio - (precio * 0.1)
    alert ("Total a pagar= " + total) 
} else if (formaDePago =="2"){

    let cuotas = prompt ("En cuantas cuotas quiere pagar? En 1, 3 o 6 cuotas")
    let precioTotal
    switch(cuotas){
        case "1":
            total = cuota1(precio, 1)
            alert("El precio a pagar es $" + precio + ", en 1 cuota de $" + total)
            break;

        case "3":
            total = cuota3(precio, 3)
            precioTotal = precio + (precio*0.1)
            alert ("El precio a pagar es $" + precioTotal + ", en 3 cuotas de $" + total)
            break;

        case "6":
            total = cuota6(precio, 6)
            precioTotal = precio + (precio*0.1)
            alert ("El precio a pagar es $" + precioTotal + ", en 6 cuotas de $" + total)
            break;

    default:
        break;
    }
}
