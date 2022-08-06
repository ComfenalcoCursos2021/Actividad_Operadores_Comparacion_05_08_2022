// Crear un dos input numericos y input submit, 
// con check butons selecionar 
// que tipo de operador 'Comparacion' va usar, enviar los 
// datos por el JS Y resivirlos en el PHP,
// realizar la operacion selecionada y visualizarlo
// en el HTML5
addEventListener("DOMContentLoaded", async(e)=>{
    let config = {
        method: "POST", 
        body: JSON.stringify({num1: 20, num2: 20})
    };
    let peticion = await fetch("https://comfenalcocursos.000webhostapp.com/Actividad_Operadores_Comparacion_05_08_2022/api.php", config);
    let data = await peticion.text();
    document.querySelector("#res").innerHTML = data;
})