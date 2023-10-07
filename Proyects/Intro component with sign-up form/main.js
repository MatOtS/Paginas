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
}
)