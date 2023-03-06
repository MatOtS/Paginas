window.addEventListener("keydown", display);
const loader =  document.getElementById("loader")
contador = 0


function hide () {
   loader.style.visibility= "hidden";
}
setTimeout("hide()", 2000);

//No entiendo por qué me marca event como depreciated, se puede usar

function CrearListas(lista, numero) {
    const newlista = []
    for (i=0;i<5;i++) {        
        newlista.push(lista[i]);
    }
    return newlista
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


}

function BorrarLetra() {
    document.querySelectorAll(".letra")[j].innerHTML = ""
    contador--
    console.log(contador)

}


function display() {
    letra = esLetra()
    lista = CrearListas(document.querySelectorAll(".letra"),contador)
    command = event.key
    if (contador<5 && letra != "" ) {
        for (i=0;i<contador;i++);contador++; {
            console.log(letra)
            lista[i].innerHTML = letra
        }
    }
    else if (contador == 5 && letra != "") {
        console.log(contador)
        document.querySelectorAll(".letra")[j].innerHTML = letra
    }
    else if (command == "Enter") {
        EnterValidar(contador, )
    }
    else if (command == "Backspace") {
        BorrarLetra()
    }
}
