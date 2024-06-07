const productsCountEl = document.getElementById("products-count");
const addCartBtns = document.querySelectorAll(".button-section-cart");

console.log(productsCountEl);
console.log(addCartBtns);

addCartBtns.forEach((btn) =>
    btn.addEventListener("click", function() {
        const amount =  +productsCountEl.innerHTML;
        productsCountEl.innerHTML = (amount || 0 ) + 1;
    })
);

const heartButtons = document.querySelectorAll('.heart-button');

function toggleHeartButton(e) {
    const btn = e.currentTarget;

    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
    } else {

        btn.classList.add('active');
    }
}
heartButtons.forEach(btn => {
    btn.addEventListener('click', toggleHeartButton);
});