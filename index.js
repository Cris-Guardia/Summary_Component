let result = 0;
let reactionResult = 0;
let memoryResult = 0;
let verbalResult = 0;
let visualResult = 0;

let seccionFormularios = document.getElementById('seccionFormularios');
let reactionInput = document.getElementById('reactionInput');
let memoryInput = document.getElementById('memoryInput');
let verbalInput = document.getElementById('verbalInput');
let visualyInput = document.getElementById('visualInput');

let button = document.getElementById('button');
let resultTag = document.getElementById('resultTag');

seccionFormularios.addEventListener( "keypress", () => {
    for(let i = 0; i<=1 ; i++){
        if( (parseFloat(reactionInput.value) < 0) || (parseFloat(reactionInput.value) > 100) ){
            reactionInput.value = '';
        }
        if( (parseFloat(memoryInput.value) < 0) || (parseFloat(memoryInput.value) > 100) ){
            memoryInput.value = '';
        }
        if( (parseFloat(verbalInput.value) < 0) || (parseFloat(verbalInput.value) > 100) ){
            verbalInput.value = '';
        }
        if( (parseFloat(visualyInput.value) < 0) || (parseFloat(visualyInput.value) > 100) ){
            visualyInput.value = '';
        }
    }

});

button.addEventListener('click', () => {

    let formulariosValidos = true;

    if( (parseFloat(reactionInput.value) < 0) || (parseFloat(reactionInput.value) > 100) ){
        reactionInput.value = '';
        formulariosValidos = false;
    }
    if( (parseFloat(memoryInput.value) < 0) || (parseFloat(memoryInput.value) > 100) ){
        memoryInput.value = '';
        formulariosValidos = false;
    }
    if( (parseFloat(verbalInput.value) < 0) || (parseFloat(verbalInput.value) > 100) ){
        verbalInput.value = '';
        formulariosValidos = false;
    }
    if( (parseFloat(visualyInput.value) < 0) || (parseFloat(visualyInput.value) > 100) ){
        visualyInput.value = '';
        formulariosValidos = false;
    }

    if(formulariosValidos){
        reactionResult = parseFloat(reactionInput.value);
        memoryResult = parseFloat(memoryInput.value);
        verbalResult = parseFloat(verbalInput.value);
        visualResult = parseFloat(visualInput.value);
        result = (reactionResult + memoryResult + verbalResult + visualResult)/4;
        resultTag.textContent = parseInt(result);
    }else{
        alert('Formularios no validos');
    }
});