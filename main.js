// Crear un dos input numericos y input submit, 
// con check butons selecionar 
// que tipo de operador 'Comparacion' va usar, enviar los 
// datos por el JS Y resivirlos en el PHP,
// realizar la operacion selecionada y visualizarlo
// en el HTML5
addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector("form");
    form.addEventListener("submit", async(e)=>{
        e.preventDefault();
        
        let checkboxInput = document.querySelectorAll("input[type='checkbox']");
        let checkboxNames = [];
        checkboxInput.forEach(res => checkboxNames.push(res.name));
        checkboxInput = new Set(checkboxNames);
        checkboxNames = [... checkboxInput];
        let input = new FormData(e.target);
        let json = Object.fromEntries(input.entries());
        checkboxNames.forEach(res => json[res] = input.getAll(res));

        let config = {
            method: form.method, 
            body: JSON.stringify(json)
        };
        let peticion = await fetch(form.action, config);
        let data = await peticion.text();
        document.querySelector("#res").innerHTML = data;
    })
    
})