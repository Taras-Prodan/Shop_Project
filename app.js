let productsCountEl = document.getElementById("products-count");
let addCartBtns = document.querySelectorAll(".button-section-cart");

console.log(productsCountEl);
console.log(addCartBtns);

addCartBtns.forEach((btn) => 
    btn.addEventListener("click", function() {
        const amount =  +productsCountEl.innerHTML;
        productsCountEl.innerHTML = (amount || 0 ) + 1;
    })
);