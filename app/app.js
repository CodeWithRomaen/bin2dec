//look for button press
let btn = document.querySelector('#convert-btn');
let formInput = document.querySelector("#form-input");
let form = document.querySelector('#form');

btn.addEventListener('click', function(event){
    event.preventDefault();

    formInput.reportValidity() ? bin2dec(formInput.value) :null;
    
});


function bin2dec(value) {
    let decimal = 0;
    for(let i = value.length-1; i >= 0; i--) {
        decimal += parseInt(value[i])*Math.pow(2,value.length-1-i);
    }
    renderToScreen(decimal,value);
}

function renderToScreen(decimal,value) {
    const binaryField = document.querySelector('.binary-text');
    const decimalField = document.querySelector('.decimal-text');

    binaryField.innerHTML = value;
    decimalField.innerHTML = decimal;
}