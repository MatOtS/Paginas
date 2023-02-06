let Display = document.querySelector(".display").innerHTML
let calculoTotal = ""
let primerOper = 0

//Ya tengo el elemento con la clase display/screen en una variable, ya le extraje el HTML y converti ese string en int(integer) todo en la variable Display.
//Ahora que ya se puede trabajar sobre esa variable, necestio poder editar el inner HTML del elemento display.
//Con eso se puede modificar el HTML del elemento screen/display, ahora, tengo que ver cómo extraer cada uno de los elementos de los botones, distinguiendo los numeros y los operadores

document.querySelector(".teclado").addEventListener("click", function(event){
    let eventClick = event.target.innerHTML
    if (eventClick == "=") {
        if (primerOper == 0) {
            calculoTotal = ""
            Display = ""
            document.querySelector(".display").innerHTML = 0
        } 
        else {
            calculoTotal = Number(Sorter(calculoTotal))
            primerOper = 0
            document.querySelector(".display").innerHTML = calculoTotal
    }} 
    else {
        if (eventClick == "AC") {
            calculoTotal = ""
            Display = ""
            document.querySelector(".display").innerHTML = 0
        }
        else if (eventClick == "←") {
            if (calculoTotal.length>1) {
                Display = backArrow(Display)
                calculoTotal = backArrow(calculoTotal)
                document.querySelector(".display").innerHTML = Number(Display)
            }
            else {
                Display = "0"
                calculoTotal = ""
                document.querySelector(".display").innerHTML = 0
    }}
        else if (isNaN(eventClick)) {
        calculoTotal+= eventClick
        Display = ""
        primerOper+=1 
    }
    else  {
      Display += event.target.innerHTML
       calculoTotal += event.target.innerHTML
       document.querySelector(".display").innerHTML = Number(Display)
}}});

function Sorter (string) {
    oper = ""
    PrimerNumero = ""
    SegundoNumero = ""
    contador = 0
    console.log("Dentro del Sorter ",string)
    for (i = 0; i<string.length;){
        if (isNaN(string.charAt(i))) {
            oper +=string.charAt(i)
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
    else {
        return 0
    }
}

function backArrow (string) {
    corregido = ""
    for (i=0;i<(string.length-1);){
        corregido+= string.charAt(i)
        i++
    }
    return corregido
}