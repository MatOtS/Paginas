window.addEventListener("load", Intro);
window.addEventListener("keydown", Display);
const loader =  document.getElementById("loader")
contadorPorLinea = 0
const listMain = []
let j= 0
coleccion = document.getElementsByClassName("container-box")
linea = []

function hide () {
   loader.style.visibility= "hidden";
}
setTimeout("hide()", 2000);

function Intro() {
    let NodeList = document.querySelectorAll(".letra");
    const newArray = Array.from(NodeList);
    const listSize = 5;
    for (i=0; i < newArray.length; i += listSize) {
      const listSlice = newArray.slice(i, i + listSize);
      listMain.push(listSlice);
    }
  }

async function Display() {
    letra = esLetra()
    command = event.key
    if (letra != "" ) {   
        listMain[contadorPorLinea][j].innerHTML = letra
        if (j <4) {
            j++
        }
    }
    else if (command == "Enter" && listMain[contadorPorLinea][j].innerHTML != "") {
        palabra = AppendPalabra()
        for (k=0;k<coleccion[contadorPorLinea].children.length;){
            linea.push(coleccion[contadorPorLinea].children[k])
            k++
        }
        if (await ValidWord(palabra) === true) {
            console.log("Es palabra")
            console.log(contadorPorLinea)
            await ValidarPalabra()
            EnterValidar(contadorPorLinea)
        }
        else {
            console.log("No es palabra")
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

function AppendPalabra() {
    pal = ""
    for (k=0;k<=j;) {
        pal = pal.concat(listMain[contadorPorLinea][k].innerHTML)
        k++
    }
    return pal
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
    const palabraDia = await promise.json();
    return palabraDia
}

async function ValidWord (word) {
    const resPost = await fetch("https://words.dev-apis.com/validate-word", {
        method: "POST",
        body: JSON.stringify({ word: word }),
        });
    const { validWord } = await resPost.json();
    return validWord
}

function NoEsPalabra () {
    //aca tengo que borrar lo que se escribió y poner algun marco en rojo 
    //que inique el error y poner j en 0 y que el marco vuelva al color original
    for (;j>=0;) {
        listMain[contadorPorLinea][j].innerHTML = ""
        j--
    }
    j = 0
    CambiarColor("red")
}

async function ValidarPalabra() {
    //Aca tengo que revisar letra por letra y pintar de amarillo, verde o gris según corresponda
    palabraDia = await GetWordOfDay()
    console.log(palabra)
    console.log(palabraDia)
    console.log(contadorPorLinea)
    for (i= 0;i<5;) {
        if (palabra[i] == palabraDia.word[i]) {
            CambiarColor("green")
        }
        else if (palabraDia.word.includes(palabra[i])) {
            CambiarColor("yellow")
        }
        else {
            CambiarColor("grey")
        }
    i++
    }  
}

function CambiarColor(color) {
    console.log(color)
    if (color == "red"){
        linea.forEach(function(element){
            element.style.borderColor = "red";
        });
        setTimeout(function(){
            linea.forEach(function(element){
                element.style.borderColor = "black";
            });
        },1000)
    }
    else if (color == "green"){
        console.log(color)
        linea.forEach(function(element){
            element.style.borderColor = "green";
        });
    }
    else if (color == "yellow"){
        console.log(color)
        linea.forEach(function(element){
            element.style.borderColor = "yellow";
        });
    }
    else {
        console.log(color)
        linea.forEach(function(element){
            element.style.borderColor = "grey";
        });
    }
    setTimeout(function(){
        linea= [];},1500)
}