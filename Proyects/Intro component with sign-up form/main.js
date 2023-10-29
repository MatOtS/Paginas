const mensajeRojo = document.getElementsByClassName("error-mnj")
document.querySelector(".submit").addEventListener("click", function Submit() {
    const name = document.getElementsByName("name")[0].value
    const lastName = document.getElementsByName("lastname")[0].value
    const email = document.getElementsByName("email")[0].value
    const pw = document.getElementsByName("pw")[0].value
    console.log("Funciona")
    console.log(name)
    console.log(lastName)
    console.log(email)
    console.log(pw)

    Checker(name,0)
    Checker(lastName,1)
    CheckerEmail(email,2)
    Checker(pw,3)
}
)

function Checker(string,number) {
    if (string.length === 0) {
        console.log(mensajeRojo)
        mensajeRojo[number].style.visibility = "visible";
    }
}

function CheckerEmail(string,number) {
    if (string.length === 0 || !(string.includes("@"))) {
        mensajeRojo[number].style.visibility = "visible";
    }
}


