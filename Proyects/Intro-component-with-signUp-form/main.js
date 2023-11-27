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
    var http = require("https");
    var options = {
      "method": "GET",
      "hostname": "api.kickbox.io",
      "port": null,
      "path": "/v2/verify?timeout=6000&email=EMAIL&apikey=test_e5f32e1012686c28daaf6f743781895aa0f65cc0f15336cce95ad73a52d3d28b",
      "headers": {}
    };
    
    var req = http.request(options, function (res) {
      var chunks = [];
    
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
    
      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });
    
    req.write("{}");
    req.end();
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


