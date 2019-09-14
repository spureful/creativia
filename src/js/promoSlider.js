//СЛАЙДЕР НА ПРОМО

(function sliderPromo() {

 
    const slider = document.querySelector('.promo__slider');
    const slides = document.querySelectorAll('.promo__slide');
    const btnBack = document.querySelector('.promo__slide-arrow_left');
    const btnForward = document.querySelector('.promo__slide-arrow_right');

    let sliderWidth = slider.offsetWidth;

    let currentSlide = 0;
    let nextSlide = 1;





    btnBack.addEventListener('click', function (e) {




        if (currentSlide < (slides.length - 1)) {

            currentSlide += 1;

            sliderWidth = slider.offsetWidth * currentSlide;

        } else {

            currentSlide = 0;

            sliderWidth = 0;


        }

        for (let slide of slides) {

            slide.style.transform = `translateX(${'-' + sliderWidth  + 'px'})`;
            slide.classList.remove('active');

        }

        slides[currentSlide].classList.add('active');

    });


    btnForward.addEventListener('click', function (e) {



        if  (currentSlide == 0) {



            currentSlide = slides.length - 1;

            sliderWidth = slider.offsetWidth * (slides.length - 1);


        } else if (currentSlide > 0 ) {



            currentSlide -= 1;

            sliderWidth -= slider.offsetWidth;

        } 
        else if (currentSlide >= (slides.length - 1)) {
            currentSlide = 0;

            sliderWidth = 0;
        }

        for (let slide of slides) {

            slide.style.transform = `translateX(${`-` + sliderWidth  + 'px'})`;
            slide.classList.remove('active');

        }

        slides[currentSlide].classList.add('active');



    });

}());
