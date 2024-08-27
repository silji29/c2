$(function(){
    // 0. Popup
    $('.notice ul li:first-child').on('click',function(){
        $('#popup').fadeIn();
    })
    $('#popup .close').on('click',function(){
        $('#popup').fadeOut();
    })

    // 1-1-1. gnb
    $('.gnb li').on('mouseenter',function(){
        $(this).find('.depth2').stop().slideDown();
    })
    $('.gnb li').on('mouseleave',function(){
        $(this).find('.depth2').stop().slideUp();
    })

    // 1-2-1. Main Slide
    let num = 0;
    setInterval(function(){
        if(num < 2){
            num ++;
        }else{
            num = 0;
        }
        $('.slide li').fadeOut();
        $('.slide li').eq(num).fadeIn()
    },3000)
})