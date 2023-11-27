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
         },970)

        setTimeout(function(){
            string[0].style.borderColor = "black";

        },4000)
        
    }
    else {
        mensajeRojo[number].style.visibility = "hidden";
    }
}

async function CheckerEmail(string,number) {
    valor = string[0].value
    console.log("Esto es el email",valor)
    resultAPI = ""
    const url = 'https://email-validator8.p.rapidapi.com/api/v2.0/email';
    const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'f727b70df3msh31d43fbed324c8ap15b18bjsn9b3ab175783e',
		'X-RapidAPI-Host': 'email-validator8.p.rapidapi.com'
	},
	body: new URLSearchParams({
		email: valor
	})
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        resultAPI = result
    } catch (error) {
        console.error(error);
    }
    console.log(resultAPI,"fuera del fetch")
    if (resultAPI.valid == false) {
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


