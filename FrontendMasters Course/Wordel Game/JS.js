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
    if (contadorPorLinea<5 && letra != "" ) {
        for (j<=contadorPorLinea;;) {
            console.log("Esto es J",j)
            console.log("Esto es cont",contadorPorLinea)
            console.log(letra)
            listMain[contadorPorLinea][j].innerHTML = letra
            j++

        }
    }
    else if (contadorPorLinea == 5 && letra != "") {
        console.log(contadorPorLinea)
        document.querySelectorAll(".letra")[j].innerHTML = letra
    }
    else if (command == "Enter") {
        EnterValidar(contadorPorLinea, )
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
    i++

}

function BorrarLetra() {
    document.querySelectorAll(".letra")[j].innerHTML = ""
    contadorPorLinea--
    j--
    console.log(contadorPorLinea)

}


