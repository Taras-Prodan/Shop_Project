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


// const heartButtons = document.querySelectorAll(".heart-button");
// const imageEl = document.querySelector("img");

// function changeImg(e){
//     const imgSrc = imageEl.getAttribute("src");
//     if(imgSrc === "Demo_shop/blue-heart.png"){
//         imageEl.setAttribute("src", "Demo_shop/white-heart.png")
//         imageEl.style.backgroundColor = "#2c71b8";
//     }else{
//         imageEl.setAttribute("src", "Demo_shop/blue-heart.png")
//     }
// }

// heartButtons.forEach((btn)=>
//     btn.addEventListener("click", changeImg)
// )


// console.log(heartButtons);
// console.log(imageEl);

const heartButtons = document.querySelectorAll(".heart-button");

// Вибір всіх зображень з класом 'heart-image'
const imageEls = document.querySelectorAll(".heart-image");

function changeImg(e){
    // Визначаємо, на яке зображення впливає конкретна кнопка
    const btn = e.currentTarget.location;
    const img = btn;

    if (!img) return; // Якщо не знайдено зображення, нічого не робити

    const imgSrc = img.getAttribute("src");
    if(imgSrc === "Demo_shop/blue-heart.png"){
        img.setAttribute("src", "Demo_shop/white-heart.png");
        img.style.backgroundColor = "#2c71b8";
    }else{
        img.setAttribute("src", "Demo_shop/blue-heart.png");
        img.style.backgroundColor = ""; // Знімаємо фон, якщо зображення не біле
    }
}

heartButtons.forEach((btn) => {
    btn.addEventListener("click", changeImg);
});

console.log(heartButtons);
console.log(imageEls);