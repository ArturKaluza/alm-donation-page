// elements
const progress = document.querySelector('.progressiveBar__value');

const thanks = document.querySelector('.main__thanks');

const form = document.getElementById('form');

const btn50 = document.getElementById('btn50');
const text = document.querySelector('.main__toggle-text');

const saveBtn = document.querySelector('.main__buttons-save');

// localstorage 
const storage = localStorage;

// set progressive bar initial value
progress.style.width = chceckProgress();


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

    input.value = '';
}

function showThanks() {
    thanks.classList.add('show');

    setTimeout(() => {
        thanks.classList.remove('show');
    }, 3000)
}

function save() {
    const currentWidth = progress.style.width;
    storage.setItem('progress', JSON.stringify(currentWidth));
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


