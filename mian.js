// elements
const btn50 = document.getElementById('btn50');
const text = document.querySelector('.main__toggle-text');

// listeners
btn50.addEventListener('click', showText);


function showText() {
    text.classList.toggle('visible');
}

