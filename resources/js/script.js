$(document).ready(function() {
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-booking').click(function() {
       $('html,body').animate({scrollTop: $('.js--section-booking').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-tours').click(function() {
       $('html,body').animate({scrollTop: $('.js--section-tours').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-international').click(function() {
       $('html,body').animate({scrollTop: $('.js--section-international').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-footer').click(function() {
       $('html,body').animate({scrollTop: $('.js--section-footer').offset().top}, 1000); 
    });
    
    $('.btn-bottom').click(function() {
       $('html,body').animate({scrollTop: $('header').offset().top}, 1000); 
    });
    

    /* Bottom Home Button */
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('.btn-bottom').addClass('sticky');
        } else {
            $('.btn-bottom').removeClass('sticky');
        }
    })
    
    
    
});