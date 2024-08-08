var Swiper = new Swiper (".mySwiper-1",{
    sliderPerView:1,
    spaceBetween:30,
    lopp:true,
    pagination: {
        el:"swiper.pagination"
        clickable: true,
    },
    navigation: {
        nextEl:"swiper-button-next",
        prevEl:"swiper-button-prev",
    }

});

var Swiper = new Swiper (".mySwiper-2",{
    sliderPerView:3,
    spaceBetween:20,
    lopp:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:"swiper-button-next",
        prevEl:"swiper-button-prev",
    },
    breakponits : {
        0:{
            sliderPerView:1,
        },
        520: {
            sliderPerView:2,
        },
        950: {
            sliderPerView:3,
        }
    }


});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        let id = input.ariaValueMax
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});




