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
        if (ValidWord == true) {
            EnterValidar(contadorPorLinea)
            ValidarPalabra()
        }
        else {
            NoEsPalabra()
        }
        
    }
    else if (command == "Backspace") {
        if (j == 4 && listMain[contadorPorLinea][j].innerHTML != "") {
            j++
            BorrarLetra()
        }
        else {
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
    }
    else if (j == 0 ) {
        listMain[contadorPorLinea][j].innerHTML = ""
    }
}

async function GetWordOfDay() {
    const promise = await fetch("https://words.dev-apis.com/word-of-the-day");
    const palabra = await promise.json();
    return palabra
}

async function ValidWord (word) {
    const resPost = await fetch("https://words.dev-apis.com/validate-word", {
        method: "POST",
        body: JSON.stringify({ word: word }),
        });
    const { validWord } = await resPost.json();
    console.log(validWord)
    return validWord
}

function NoEsPalabra () {
    //aca tengo que borrar lo que se escribió y poner algun marco en rojo 
    //que inique el error y poner j en 0
}

function ValidarPalabra() {
    //Aca tengo que revisar letra por letra y pintar de amarillo, verde o gris según corresponda
}