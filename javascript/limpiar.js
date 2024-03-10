buttonClear.addEventListener("click", () => {    
    inputDado.value = "";
    inputVeces.value = "";
    location.reload();
});

borrarHistorial.addEventListener("click", () =>{
    localStorage.clear()
    historial = ""

    const resultadoAnterior = document.getElementById("contenidoHistorial")
    resultadoAnterior.innerText = historial
})