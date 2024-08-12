
// owl-carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    stagePadding: 70,
    nav: false,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        768: {
            items: 3,

        },
        1000: {
            items: 3,
        },
        1440: {
            items: 4
        }
    }
})



