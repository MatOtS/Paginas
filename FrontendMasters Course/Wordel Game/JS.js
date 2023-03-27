window.addEventListener("keydown", Intro);
const loader =  document.getElementById("loader")
contadorPorLinea = 0
contadorGlobal = 0
j=-1

function hide () {
   loader.style.visibility= "hidden";
}
setTimeout("hide()", 2000);

//No entiendo por qué me marca event como depreciated, se puede usar

function Intro() {
    let NodeList = document.querySelectorAll(".letra");
    const newArray = Array.from(NodeList);
    console.log(newArray);
    const listSize = 5;
    const listMain = [];
  
    for (let i = 0; i < newArray.length; i += listSize) {
      const listSlice = newArray.slice(i, i + listSize);
      listMain.push(listSlice);
    }
  
    console.log(listMain);
  }

function CrearListas(list) {

    
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

function display() {
    letra = esLetra()
    command = event.key
    if (contador<5 && letra != "" ) {
        for (i=0;i<contadorPorLinea;i++);contadorPorLinea++;j++; {
            console.log(letra)
            document.querySelectorAll(".letra")[j].innerHTML = letra
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
