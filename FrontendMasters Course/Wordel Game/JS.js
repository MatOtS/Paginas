window.addEventListener("keydown", display);
const loader =  document.getElementById("loader")
contador = 0
j=-1

function hide () {
   loader.style.visibility= "hidden";
}
setTimeout("hide()", 2000);

//No entiendo por qué me marca event como depreciated, se puede usar

function esLetra() {
    const keyCodes = window.event.keyCode
    if (keyCodes>64 && keyCodes<91) {
        return event.key
    }
    else {
        return ""
    }
}

function display() {
    letra = esLetra()
    command = event.key
    if (contador<5 && letra != "" ) {
        for (i=0;i<contador;i++);contador++;j++; {
            console.log(letra)
            console.log(i)
            console.log(contador)
            console.log(j)
            document.querySelectorAll(".letra")[j].innerHTML = letra
        }
    }
    else if (command == "Enter") {
        contador = 0
        console.log(contador)
    }
    else if (command == "backspace") {
        console.log(command)
    }
}
