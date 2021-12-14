$(document).ready(function(){
    //Efeito de fumaça
   /* $(".info").ripples({
        dropRadius:25,
        perturbance:0.5,
    });*/




    //Botão toggler
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    }) 

    //Magnific Popup
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery:{
            enabled: true
        }
    });

    //Carrosel de imagens do cardápio
    $('.carrosel').slick({
        centerMode: true,
        mobileFirst: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });

    //Carrosel de imagens churrascaria
    $('.fotos-churrascaria').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });

    // Fixar menu de navegação no topo
    $(window).scroll(function(){
        let position = $(this).scrollTop();


        console.log(position)
        
        if(position >= 584) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');

        }
    })
    

})