window.addEventListener("keydown", PressTecla);
const loader =  document.getElementById("loader")

function hide () {
   loader.style.visibility= "hidden";
}
setTimeout("hide()", 2000);

//No entiendo por qué me marca event como depreciated, se puede usar

function PressTecla() {
    console.log(event.key)
}