// Ejercicio 1º
console.log(" - - - - - - -");
console.log("Ejercicio 1º");
console.log(" - - - - - - -");

const product = { count: 3, price: 23.30, type: "ropa" };

let precio = product.price >= 0 ? product.price : 0

let totalSinIVA = product.count * precio;

let totalConIVA;

switch(product.type) {
    case "ropa":
        totalConIVA = totalSinIVA + (totalSinIVA * 0.21);
        break;
    case "libro":
        totalConIVA = totalSinIVA + (totalSinIVA * 0.04);
        break;
    case "comida":
        totalConIVA = totalSinIVA + (totalSinIVA * 0.1);
        break;
}

console.log("Precio sin IVA", totalSinIVA);
console.log("Total con IVA", totalConIVA);

// Ejercicio 2º

console.log(" - - - - - - -");
console.log("Ejercicio 2º");
console.log(" - - - - - - -");

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
};

let retencion;

if (empleado.bruto < 12000) {
    retencion = 0;
} 
else if (empleado.bruto < 24000) {
    retencion = 8;
}
else if (empleado.bruto < 34000) {
    retencion = 16;
}
else {
    retencion = 30;  
}

retencion = empleado.hijos > 0 ? retencion - 2 : retencion;
let numeroPagas = empleado.pagas == 14 ? empleado.pagas : 12;
let netoAnual = empleado.bruto - ((empleado.bruto / 100) * retencion);
let netoMensual = netoAnual / numeroPagas;

console.log("La retención es de", retencion);
console.log("Pagas", numeroPagas);
console.log("neto anual", netoAnual);
console.log("neto mensual", netoMensual);

