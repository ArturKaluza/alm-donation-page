// elements
const progress = document.querySelector('.progressiveBar__value');
const prgoressTooltip = document.querySelector('.progressiveBar__tooltip');

const thanks = document.querySelector('.main__thanks');

const form = document.getElementById('form');
const inputElem = document.getElementById('value');

const btn50 = document.getElementById('btn50');
const text = document.querySelector('.main__toggle-text');

const saveBtn = document.querySelector('.buttons__save');

// localstorage 
const storage = localStorage;

// set progressive bar initial value
progress.style.width = chceckProgress();

// set input value
inputElem.value = chceckInputValue();

// set toolrip initial value
prgoressTooltip.innerHTML = `<span class="progressiveBar__tooltip-span">$${500 - parseInt(progress.style.width)}</span> still needed for this project`;

// listeners
form.addEventListener('submit', donate);

btn50.addEventListener('click', showText);

saveBtn.addEventListener('click', save);

function donate(e) {
    e.preventDefault();
    const input = e.target.dollar;
    
    // get width of progressBar value
    const parseValue = parseInt(progress.style.width);
       
    // set new width
    progress.style.width = parseValue + parseInt(input.value) + 'px';
    
    showThanks();

    // set tooltip value
    prgoressTooltip.innerHTML = `<span class="progressiveBar__tooltip-span">$${500 - parseInt(progress.style.width)}</span> still needed for this project`;

    input.value = '';
}

function showThanks() {
    thanks.classList.add('show');

    setTimeout(() => {
        thanks.classList.remove('show');
    }, 3000)
}

function save() {
    // save progressBar
    const currentWidth = progress.style.width;
    storage.setItem('progress', JSON.stringify(currentWidth));

    // save input value
    storage.setItem('input', JSON.stringify(inputElem.value));
}

function showText() {
    text.classList.toggle('visible');
}

function chceckProgress() {
    const prog = JSON.parse(storage.getItem('progress'));
    
    if (prog !== null) {
        return prog;
    }
    return '53px';
}

function chceckInputValue() {
    const val = JSON.parse(storage.getItem('input'))

    if (val !== null) {
        return val;
    }
    return '';
}

