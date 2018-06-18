// elements
const progress = document.querySelector('.progressiveBar__value');
const prgoressTooltip = document.querySelector('.progressiveBar__tooltip');

const thanks = document.querySelector('.main__thanks');

const donators = document.querySelector('.main__content-donators');

const form = document.getElementById('form');
const inputElem = document.getElementById('value');

const textShowBtn = document.querySelector('.hiddenText__btn-show');
const textContent = document.querySelector('.hiddenText__content');
const textCloseBtn = document.querySelector('.hiddenText__btn-close');

const saveBtn = document.querySelector('.buttons__save');

// localstorage 
const storage = localStorage;

// set progressive bar initial value
progress.style.width = '53px';

// set input value
inputElem.value = chceckInputValue();

// set tooltip initial value
prgoressTooltip.innerHTML = `<span class="progressiveBar__tooltip-span">$${500 - parseInt(progress.style.width)}</span> still needed for this project`;

// listeners
form.addEventListener('submit', donate);

//btn50.addEventListener('click', showText);
textShowBtn.addEventListener('click', showText);
textCloseBtn.addEventListener('click', hideText);

saveBtn.addEventListener('click', save);

function donate(e) {
    e.preventDefault();
    const input = e.target.dollar;
    
    // check input value
    if (!input.value.trim()) {
        return;
    };

    // get width of progressBar value
    const parseValue = parseInt(progress.style.width);
       
    // set new width
    progress.style.width = parseValue + parseInt(input.value) + 'px';
    
    showThanks();

    // set tooltip value
    prgoressTooltip.innerHTML = `<span class="progressiveBar__tooltip-span">$${500 - parseInt(progress.style.width)}</span> still needed for this project`;
    if (parseInt(progress.style.width) >= 500) {
        prgoressTooltip.innerHTML = `The project raised <span class="progressiveBar__tooltip-span">$${parseInt(progress.style.width) - 500}</span> over a target.`;
        
        // disabled input
        inputElem.setAttribute('disabled', null);
    }

    // increment numbers of donators
    donators.innerHTML = parseInt(donators.innerHTML) + 1;

    input.value = '';
}

function showThanks() {
    thanks.classList.add('show');

    setTimeout(() => {
        thanks.classList.remove('show');
    }, 3000)
}

function save() {
    // save input value
    storage.setItem('input', JSON.stringify(inputElem.value));
}

function showText() {
    textContent.classList.add('show');
    textCloseBtn.classList.add('show-closeBtn');
}

function hideText() {
    textContent.classList.remove('show');
    textCloseBtn.classList.remove('show-closeBtn');
}

function chceckInputValue() {
    const val = JSON.parse(storage.getItem('input'))

    if (val !== null) {
        return val;
    }
    return '';
}

