const Display = Number(document.querySelector(".screen").innerHTML)

console.log(Display)

const oper = Display + 7

//Ya tengo el elemento con la clase display/screen en una variable, ya le extraje el HTML y converti ese string en int(integer) todo en la variable Display.
//Ahora que ya se puede trabajar sobre esa variable, necestio poder editar el inner HTML del elemento display.

const NewDisplay = document.querySelector(".screen").innerHTML = oper

console.log(NewDisplay)

//Con eso se puede modificar el HTML del elemento screen/display, ahora, tengo que ver cómo extraer cada uno de los elementos de los botones, distinguiendo los numeros, los operadores y los borradores
//Una buena idea sería guardar estos "diferenciadores" en funciones: 
function Numeros()
function Operadores()
function Borradores()