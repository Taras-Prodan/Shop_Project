const productsCountEl = document.getElementById("products-count");
const addCartBtns = document.querySelectorAll(".button-section-cart");

console.log(productsCountEl);
console.log(addCartBtns);

addCartBtns.forEach((btn) =>
    btn.addEventListener("click", function() {
        // const amount =  +productsCountEl.innerHTML;
        // productsCountEl.innerHTML = (amount || 0 ) + 1;
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
);


// const heartButtons = document.querySelectorAll('.heart-button');
// function toggleHeartButton(e) {
//     const btn = e.currentTarget;

//     if (btn.classList.contains('active')) {
//         btn.classList.remove('active');
//     } else {
//         btn.classList.add('active');
//     }
// }
// heartButtons.forEach(btn => {
//     btn.addEventListener('click', toggleHeartButton);
// });

let likeBtns = document.querySelectorAll(".heart-button");

likeBtns.forEach((btn) =>
    btn.addEventListener("click", function () {
        btn.classList.toggle("liked");
    })
);
// for(let i = 0; i < likeBtns.length; i++){
//     likeBtns[i].addEventListener('click', function(){
//         console.log("liked");
//     })
// }

//change quantity 

const decrementBtns = document.querySelectorAll(".decrement-button")[0];
const incrementBtns = document.querySelectorAll(".increment-button")[0];
const inputFields = document.querySelectorAll(".product-quantity input")[0];

console.log(decrementBtns);
console.log(incrementBtns);
console.log( inputFields);

let currentValue = +inputFields.value;
toogleDisableState(currentValue);

function toogleDisableState(count){
    decrementBtns.disabled = count <= 1;
    incrementBtns.disabled = count >= 5;
}

incrementBtns.addEventListener("click", function(){
    let currentValue = +inputFields.value;
    let newValue = currentValue + 1;
    inputFields.value = newValue;

    toogleDisableState(newValue);
 });

decrementBtns.addEventListener("click", function(){
    let currentValue = +inputFields.value;
    let newValue = currentValue - 1;
    inputFields.value = newValue;
   
    toogleDisableState(newValue);
 });


 //add click

 $(".slider-wrapper").slick({
    adaptiveHeight: true,
    dots: true,
 });
 

 //more details 
 let detailsBtns = document.querySelectorAll('.button-section-details');
 console.log(detailsBtns);

