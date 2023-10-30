const mensajeRojo = document.getElementsByClassName("error-mnj")
window.addEventListener("keydown", EnterButton)
document.querySelector(".submit").addEventListener("click", function Submit() {
    const name = document.getElementsByName("name")[0].value
    const lastName = document.getElementsByName("lastname")[0].value
    const email = document.getElementsByName("email")[0].value
    const pw = document.getElementsByName("pw")[0].value

    Checker(name,0)
    Checker(lastName,1)
    CheckerEmail(email,2)
    Checker(pw,3)
})

function EnterButton() {
    command = event.key
    if (command == "Enter") {
        console.log("Enter")
    }
}

function Checker(string,number) {
    if (string.length === 0) {
        mensajeRojo[number].style.visibility = "visible";
    }
    else {
        mensajeRojo[number].style.visibility = "hidden";
    }
}

function CheckerEmail(string,number) {
    if (string.length === 0 || !(string.includes("@"))) {
        mensajeRojo[number].style.visibility = "visible";
    }
    else {
        mensajeRojo[number].style.visibility = "hidden";
    }
}


