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
        
        if(position >= 826) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');

        }
    });

    //Botão seta voltar ao topo
    $(window).scroll(function(){
        let position = $(this).scrollTop();

        if(position >= 826){
            $('#voltar-topo').addClass('scrollTop');
        } else {
            $('#voltar-topo').removeClass('scrollTop');  
        }
    });

    //Suavizar o scroll para navegação
    $('.nav-item a, header-link, .btn-adiante, .navbar-brand, #pedir-agora, #voltar-topo').click(function(link){
        link.preventDefault();
        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 1000);
    })
    

})