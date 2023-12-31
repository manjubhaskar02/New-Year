const h2 = document.querySelector('h2');
const container = document.querySelector('.container');
const glow = document.querySelector('.glow');
h2.onclick = function () {
    container.classList.toggle('newyear');
    this.classList.toggle('active');
    glow.style.display = "block";

}