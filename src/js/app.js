document.getElementById("abrirModal").addEventListener("click", function(){
    document.getElementsByClassName("modalOtraCuenta")[0].style.display="block"
    return false
});
document.getElementsByClassName("modal_cerrar")[0].addEventListener("click", function(){
    document.getElementsByClassName("modalOtraCuenta")[0].style.display="none"
})
