window.addEventListener("load", Intro);
window.addEventListener("keydown", Display);
const loader =  document.getElementById("loader")
contadorPorLinea = 0
const listMain = []
let j= 0


function hide () {
   loader.style.visibility= "hidden";
}
setTimeout("hide()", 2000);
//No entiendo por qué me marca event como depreciated, se puede usar

function Intro() {
    let NodeList = document.querySelectorAll(".letra");
    const newArray = Array.from(NodeList);
    const listSize = 5;
    for (i=0; i < newArray.length; i += listSize) {
      const listSlice = newArray.slice(i, i + listSize);
      listMain.push(listSlice);
    }
  }

function Display() {
    letra = esLetra()
    command = event.key
    if (letra != "" ) {   
        listMain[contadorPorLinea][j].innerHTML = letra
        if (j <4) {
            j++
            console.log("Esto es J despues del a suma",j)
        }
    }
    else if (command == "Enter" && listMain[contadorPorLinea][j].innerHTML != "") {
        console.log("Enter",listMain[contadorPorLinea][j])
        EnterValidar(contadorPorLinea)
    }
    else if (command == "Backspace") {
        if (j == 4 && listMain[contadorPorLinea][j].innerHTML != "") {
            console.log("Entro en el if")
            j++
            BorrarLetra()
        }
        else {
            console.log("Entro en el else")
            BorrarLetra()
        }
    }
}

function esLetra() {
    const keyCodes = window.event.keyCode
    if (keyCodes>64 && keyCodes<91) {
        return event.key
    }
    else {
        return ""
    }
}

function EnterValidar(number) {
    j= 0
    contadorPorLinea++
    return 
}

function BorrarLetra() {
    if (j>=1) {
        listMain[contadorPorLinea][j - 1].innerHTML = ""
        j--
        console.log("Borrado",j)
    }
    else if (j == 0 ) {
        console.log("Borrado con j = 0",j)
        listMain[contadorPorLinea][j].innerHTML = ""
    }
}


