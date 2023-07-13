let plusButton = document.querySelector('.plusButton');
let minButton = document.querySelector('.minButton');
let resetButton = document.querySelector('.resetButton');
let counterText = document.querySelector('.counterText');
let counter = 0;

plusButton.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;
});

minButton.addEventListener('click', function() {
    counter = counter + 2;
    counterText.innerText = counter;
});

resetButton.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
});


