//hecho en la Mac

let Display = document.querySelector(".display").innerHTML
let calculoTotal = ""
//console.log(Display)

//const oper = Display + 7

//Ya tengo el elemento con la clase display/screen en una variable, ya le extraje el HTML y converti ese string en int(integer) todo en la variable Display.
//Ahora que ya se puede trabajar sobre esa variable, necestio poder editar el inner HTML del elemento display.

//const NewDisplay = document.querySelector(".display").innerHTML = oper

//console.log(NewDisplay)

//Con eso se puede modificar el HTML del elemento screen/display, ahora, tengo que ver cómo extraer cada uno de los elementos de los botones, distinguiendo los numeros y los operadores

document.querySelector(".teclado").addEventListener("click", function(event){
    let eventClick = event.target.innerHTML
    if (eventClick == "=") {
        document.querySelector(".display").innerHTML = Number(Sorter(calculoTotal))
    } else {
        if (eventClick == "C") {
            calculoTotal = ""
            Display = ""
            document.querySelector(".display").innerHTML = "0"
        }
        else if (eventClick == "←") {
            console.log()
        }
        else if (isNaN(eventClick)) {
        calculoTotal+= eventClick
        Display = ""
    } else  {
        Display += event.target.innerHTML
        calculoTotal += event.target.innerHTML
        document.querySelector(".display").innerHTML = Number(Display)
}}});

function Sorter (string) {
    oper = ""
    PrimerNumero = ""
    SegundoNumero = ""
    contador = 0
    console.log(string)
    for (i = 0; i<string.length;){
        if (isNaN(string.charAt(i))) {
            oper +=string.charAt(i)
            console.log(oper)
            i++
            contador++
        } 
        else if (contador == 0) {
            PrimerNumero+= string.charAt(i)
            i++
        }
        else {
            SegundoNumero+= string.charAt(i)
            i++
        }
    }
    console.log(Number(PrimerNumero))
    console.log(Number(SegundoNumero))
return Calcular (oper,Number(PrimerNumero),Number(SegundoNumero))
}

function Calcular (string,Number1,Number2) {
    if(string == "+") {
        return Number1+Number2
    }
    else if(string == "-") {
        return Number1-Number2
    }
    else if(string == "×") {
        return Number1*Number2
    }
    else if(string == "/") {
        return Number1/Number2
    }
}