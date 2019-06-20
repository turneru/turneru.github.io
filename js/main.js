$(document).ready(function() {
    
    $(".hamburger").click(function () {
        $(".overlay").fadeToggle(800);
        $(this).toggleClass("is-active");
        $(".overlay").toggleClass("overlay-active");
    });

    $('.menu a').on('click', function () {
        $(".overlay").fadeToggle(800);
        $(".hamburger").toggleClass('is-active');
        
    });
    
//var linkLocation = 0
//
//    $("body").css("display", "none");
// 
//    $("body").fadeIn(2000);
// 
//    $("a.transition").click(function(event){
//        event.preventDefault();
//        linkLocation = this.href;
//        $("body").fadeOut(500, redirectPage);      
//    });
//         
//    function redirectPage() {
//        window.location = linkLocation;
//    }
//    
    
    
});



(function ($) {

    'use strict';

    $(document).ready(function () {

        // Init here.
        var $body = $('body'),
            $main = $('#main'),
            $site = $('html, body'),
            transition = 'fade',
            smoothState;

        smoothState = $main.smoothState({
            onBefore: function($anchor, $container) {
                var current = $('[data-viewport]').first().data('viewport'),
                    target = $anchor.data('target');
                current = current ? current : 0;
                target = target ? target : 0;
                if (current === target) {
                    transition = 'fade';
                } else if (current < target) {
                    transition = 'moveright';
                } else {
                    transition = 'moveleft';
                }
            },
            onStart: {
                duration: 800,
                render: function (url, $container) {
                    $main.attr('data-transition', transition);
                    $main.addClass('is-exiting');
                    $site.animate({scrollTop: 0});
                }
            },
            onReady: {
                duration: 400,
                render: function ($container, $newContent) {
                    $container.html($newContent);
                    $container.removeClass('is-exiting');
                }
            },
        }).data('smoothState');

    });

}(jQuery));