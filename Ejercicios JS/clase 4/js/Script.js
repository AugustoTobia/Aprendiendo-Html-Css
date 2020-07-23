/*var edad = 18;
if (edad < 12){
 alert('Es un niño');
} else if (edad < 19){
 alert('Es un adolecente');
} else if (edad < 65){
 alert('Es un adulto');
} else {
 alert('Es mayor');
}

var dia = "viernes";
switch (dia){
    case "lunes":
        alert ("ir a la facultad");
        break;
    case "martes":
        alert ("tomarse un té");
        break;
    case "miercoles":
        alert ("sale matambrito");
        break;
    case "jueves":
        alert ("un masaje a tu novia");
        break;
    case "viernes":
        alert ("ir a la facultad, denuevo...");
}

var num1 = 5;
var num2 = 8;
    if (num1 <= num2) {
        alert("num1 no es mayor que num2");
    } 
    if (num2 > 0) {
        alert("num2 es positivo");
    }
    if (num1 < 0 || num1 != 0) {
        alert("num1 es negativo o es distinto de cero");
    }
    if (++num1 > num2) {
        alert("incrementar en 1 el valor de num1 lo hace mayor a num2");
    }*/

/*var myArray = ["manzana", "anana", "pera", "melon", "zandia"];
var r = 0;
var Mayus;
for(r = 0; r < myArray.length; ++r)
{
    Mayus = myArray[r].toUpperCase();
    alert(Mayus);
}

var t = "";

while (r < myArray.length) {
    t = t + " " + myArray[r];
    ++r;
}
alert(t);
alert(myArray);

myArray.reverse();
myArray.shift();
myArray.pop();
myArray.sort();
myArray.push("limon");
myArray.unshift("naranja");


for (indice in myArray) {
    console.log(myArray[indice]);
}
var M = "La Manzana es Verde",
    m = M.toLocaleLowerCase(),
    erde = M.substring (15,19)
    Man = M.substring(3,6)
    splt = M.split(" ")
alert(m); //a
alert(erde); //b
alert(Man); //c
alert(splt); //d
alert(splt[3]); //Ejemplo del array con la palabra "Verde"

var texto , inicial , palabra, arr;
    texto = "una perla amarilla sobre el mar";
function Capital (texto) {
    inicial = texto.substring(0,1);
    arr = texto.split("");
    arr.shift();
    arr.unshift(inicial.toUpperCase());
    palabra = arr.join("");
    alert(palabra);
}

function capitalizar(texto) {
    var palabras = texto.split(" "),
    palabrasCapital,
    nuevotext = "";
    for (ind in palabras) {
        palabrasCapital = palabras[ind].substring(0,1).toUpperCase() + palabras[ind].substring(1).toLowerCase();
        palabras[ind] = palabrasCapital;
        nuevotext = palabras.join(" ")
    }
alert(nuevotext + ".");
}
var texto = capitalizar("uN pERRo cOmIeNdO mANzanA");

function capitalizarDos(textoDos){
    var palabrasDos = textoDos.split(" "),
        palabrasCapitalDos,
        nuevoTextoDos = "";

    for (ind in palabrasDos) {
        palabrasCapitalDos = palabrasDos[ind].substring(0,1).toUpperCase() + palabrasDos[ind].substring(1).toLowerCase() + " ";
        nuevoTextoDos += palabrasCapitalDos;
    }
alert(nuevoTextoDos + ".");
}
var textoDos = capitalizarDos("uN cOnEjO mAStiCaNdo zAnAhorIA");




function cuentavocales(texto) {
    var num = 0;  
    while(srchVocales != -1) {
        var srchVocales = texto.search(/[aeiou]/i);
        var nuevoTexto = texto.replace(/[aeiou]/i,"C");
        texto = nuevoTexto;
        if (srchVocales != -1){
            num++;
        }
    }
        return (num);
}
var texto =  cuentavocales("Encontre una mosca frotando las patas sobre un naranjo");
console.log(texto);


function cantidadDeVocales(cantidad){
    var contador = 0;
    var misLetras = cantidad.split("");
    for (indice in misLetras){
        var letra = misLetras[indice];
        var vocales = /[aeiou]/i;
        if(letra.match(vocales)){
            ++contador;
        }
    }
    return(contador)
}
    var cantidad = cantidadDeVocales ("Una manzana es verde");
    console.log(cantidad);
*/
function miFuncion(unNumero, unArray){ 
    ++miNumero;    
     miArray.pop(); 
     return(miArray)
}  
var miNumero = 15;  
var miArray = ['Un texto', true, 4, 5]; 
console.log(miFuncion(miNumero,miArray)); 

