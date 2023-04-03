window.addEventListener("load", Intro);
window.addEventListener("keydown", Display);
const loader =  document.getElementById("loader")
contadorPorLinea = 0
contadorGlobal = 0
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
    console.log(listMain)
  }

function Display() {
    letra = esLetra()
    command = event.key
    if (j<5 && letra != "" ) {
        console.log("Esto es J",j)
        console.log("Esto es cont",contadorPorLinea)
        listMain[contadorPorLinea][j].innerHTML = letra
        if (j <4) {
            console.log(j)
            j++
        }
    }
    else if (j == 5 && letra != "") {
        console.log("Esto en contPLinea al final",contadorPorLinea)
        console.log("Esto en j al final",j)
        listMain[contadorPorLinea][j].innerHTML = letra
    }
    else if (command == "Enter" && j==4) {
        EnterValidar(contadorPorLinea)
    }
    else if (command == "Backspace") {
        BorrarLetra()
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
    listMain[contadorPorLinea][j].innerHTML = ""
    if (j>0) {
        j--
    }
    console.log(j)

}


