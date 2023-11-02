const mensajeRojo = document.getElementsByClassName("error-mnj")
document.querySelector(".submit").addEventListener("click", function Submit() {
    const name = document.getElementsByName("name")
    const lastName = document.getElementsByName("lastname")
    const email = document.getElementsByName("email")
    const pw = document.getElementsByName("pw")

    Checker(name,0)
    Checker(lastName,1)
    CheckerEmail(email,2)
    Checker(pw,3)
})


function Checker(string,number) {
    console.log(string)
    valor = string[0].value
    if (valor.length === 0) {
        mensajeRojo[number].style.visibility = "visible";
        string[0].style.borderColor = "red";

        setTimeout(function(){
            string[0].style.borderColor = "black";
        },3000)
        
    }
    else {
        mensajeRojo[number].style.visibility = "hidden";
    }
}

function CheckerEmail(string,number) {
    valor = string[0].value
    console.log(string)
    if (valor.length === 0 || !(string.includes("@"))) {
        mensajeRojo[number].style.visibility = "visible";
        string[0].style.borderColor = "red";
        setTimeout(function(){
            string[0].style.borderColor = "black";
        },3000)
    }
    else {
        mensajeRojo[number].style.visibility = "hidden";
    }
}


