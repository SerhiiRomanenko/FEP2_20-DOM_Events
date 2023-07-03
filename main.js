//
// Пишемо свій слайдер зображень
// відображаємо зображення та кнопки Next, Prev з боків від зображення
// При натисканні на Next - показуємо наступне зображення
// При натисканні на Prev - попереднє
// При досягненні останнього зображення – ховати кнопку Next. Аналогічно з першим зображенням та кнопкою Prev.


let sliderImages = document.querySelector(".slider__images");
let sliderPrevButton = document.querySelector(".slider__prevButton");
let sliderNextButton = document.querySelector(".slider__nextButton");


sliderPrevButton.addEventListener("click", function () {

    for (let i = 2; i <= sliderImages.children.length - 1; i++) {

        if (sliderImages.children[i].classList.contains("active")) {
            sliderImages.children[i].classList.remove("active");
            sliderImages.children[i - 1].classList.add("active");
            sliderPrevButton.style.display = "inline-block";
            sliderNextButton.style.display = "inline-block";
            return;
        } else if (sliderImages.children[1].classList.contains("active")) {
            sliderPrevButton.style.display = "none";
            sliderImages.children[1].classList.remove("active");
            sliderImages.children[0].classList.add("active");
            return;
        }
    }
})

sliderNextButton.addEventListener("click", function () {
    for (let i = 0; i <= sliderImages.children.length  - 1; i++) {

        if (sliderImages.children[i].classList.contains("active")) {
            sliderImages.children[i].classList.remove("active");
            sliderImages.children[i + 1].classList.add("active");
            sliderNextButton.style.display = "inline-block";
            sliderPrevButton.style.display = "inline-block";
            return;
        }
        else if (sliderImages.children[sliderImages.children.length - 2].classList.contains("active")) {
            sliderImages.children[sliderImages.children.length - 2].classList.remove("active");
            sliderImages.children[sliderImages.children.length - 1].classList.add("active");
            sliderNextButton.style.display = "none";
            return;
        }
    }
})