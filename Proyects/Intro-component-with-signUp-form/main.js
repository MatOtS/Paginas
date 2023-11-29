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
        setTimeout(function(){
        mensajeRojo[number].style.visibility = "visible";
        string[0].style.borderColor = "red";
         },100)

        setTimeout(function(){
            string[0].style.borderColor = "black";

        },3000)
        
    }
    else {
        mensajeRojo[number].style.visibility = "hidden";
    }
}

async function CheckerEmail(string,number) {
    valor = string[0].value
    if (valor.length == 0) {
        valor = null
    }
    console.log("Esto es el email",valor)
    apiresponse = ""

    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
    await fetch(`https://www.disify.com/api/email/${valor}`, requestOptions)
    .then(response => response.json())
    .then(result => apiresponse = result)
    .catch(error => console.log('error', error));
    console.log(apiresponse,"fuera del fetch")
    if (apiresponse.format == false) {
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


