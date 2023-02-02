//hecho en la Mac

let Display = document.querySelector(".display").innerHTML
let operador = ""
//console.log(Display)

//const oper = Display + 7

//Ya tengo el elemento con la clase display/screen en una variable, ya le extraje el HTML y converti ese string en int(integer) todo en la variable Display.
//Ahora que ya se puede trabajar sobre esa variable, necestio poder editar el inner HTML del elemento display.

//const NewDisplay = document.querySelector(".display").innerHTML = oper

//console.log(NewDisplay)

//Con eso se puede modificar el HTML del elemento screen/display, ahora, tengo que ver cómo extraer cada uno de los elementos de los botones, distinguiendo los numeros y los operadores

document.querySelector(".teclado").addEventListener("click", function(event){
    console.log(event.target.innerText)
    let eventClick = event.target.innerHTML
    let operador = ""
    if (isNaN(eventClick)) {
        operador = eventClick
        console.log(operador)
    } else {
    console.log(operador)
    Display += event.target.innerHTML
    document.querySelector(".display").innerHTML = Number(Display)
}});

function noNumero () {
    let valor = ""
    let oper = ""

}