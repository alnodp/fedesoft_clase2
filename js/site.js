// debugger;
var ar;
ar = ['h', 'o', 'l', 'a']
console.log(ar);
console.error(ar);
console.warn("longitud de ar:", ar.length, ar); // Longitud del arreglo y arreglo Advertencia
console.log("Longitud de ar: " + ar.length + ar); // Longitud del arreglo y arreglo contenido


var miNombre = "Juan Camilo"; // cammel case, paseal case.
for (var i = 0; i < miNombre.length; i++) {
    console.log(miNombre[i], "=>", i);
}
// for(declarar variables,condición,instrucciones de cambio)
// i++ >> instrucciones de cambio
// i -- >> i=i-1


var x = "palabra"
x[2].toUpperCase(); // Mayuscula
x[2].toLowerCase(); // Minuscula



// Las letras en posiciones pares sean mayusculas
// las letras en posiciones impares sea    n minusculas

// Se imprime letra a letra y muestra la posicion
// al final debe mostrar la palabra completa
var completo = "";
var palabra = "Juan Camilo";
var p = "Juan Camilo";
for (var i = 0; i < palabra.length; i++) {
    console.log(palabra[i], "=>", i);
}
for (var i = 0; i < palabra.length; i++) {
    if (i % 2 == 0) {
        completo += (palabra[i].toUpperCase());
    }
    else {
        completo += (palabra[i].toLowerCase());
    }
}
console.log(completo);




// Funciones

function isPar(x) {
    return x % 2 == 0 ? true : false;  // if core
}
function convertChar(c, isUp) {
    return isUp ? c.toUpperCase() : c.toLowerCase();
}
function getlast(t) {
    return +[t.length - 1];
}

function mostrarTexto(t) {
    var tmp = "";
    for (var i = 0; i < t.length; i++) {
        tmp = tmp + convertChar(t[i], isPar(i));
        console.log(getLast(tmp), "=>", i);
    }
    console.log(tmp);
}

// =======================================================================

var persona = {
    nombre: 'Felipe',
    apellido: 'Molina',
    docType: 'CC',
    docNum: '123123123123',
    cel: '30192822892'
};

console.log('persona: ', persona);
alert('persona: '+ JSON.stringify(persona));

var ar = [1,2,3,4,5];
console.log(ar);
ar = ar.map(item => item+1);
console.log(ar);

var ar2 = ar.filter(item => item < 3);
console.log(ar2);

var ar3 = ar.reduce((ac, cur) => {
    console.log('cur ' + cur);
    return cur + ac;
}, 0);
console.log(ar3);
console.log(ar3);