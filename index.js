let result = 0;
let reactionResult = 0;
let memoryResult = 0;
let verbalResult = 0;
let visualResult = 0;

let reactionInput = document.getElementById('reactionInput');
let memoryInput = document.getElementById('memoryInput');
let verbalInput = document.getElementById('verbalInput');
let visualyInput = document.getElementById('visualInput');

let button = document.getElementById('button');
let resultTag = document.getElementById('resultTag');

button.addEventListener('click', () => {
    reactionResult = parseFloat(reactionInput.value);
    memoryResult = parseFloat(memoryInput.value);
    verbalResult = parseFloat(verbalInput.value);
    visualResult = parseFloat(visualInput.value);
    result = (reactionResult + memoryResult + verbalResult + visualResult)/4;
    resultTag.textContent = parseInt(result);
});