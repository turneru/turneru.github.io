//animations
AOS.init({
    delay: 500, 
    duration: 1000,
    once: true
});

//Intro typing
new TypeIt("#hello", {
    speed: 50,
    waitUntilVisible: true,
    cursorSpeed: 5000,
})
.pause(250)
.type("<span class='intro'>Hi, I'm</span>")
.go();

new TypeIt('#name', {
    speed: 50,
    waitUntilVisible: true,
    cursorSpeed: 5000,
    afterComplete: async () => {
    $(".ti-cursor").hide();
},
})
.pause(1050)
.type("<span class='turner'><span>Turner Uligian</span></span>")
.go();

//scroll links
$(document).ready(function() {	
    $(".scroll.button").click(function(event){
        event.preventDefault();
        var dest=0;
        if ($(this.hash).offset().top > $(document).height()-$(window).height()) {
            dest=$(document).height()-$(window).height();
        }
        else {
            dest=$(this.hash).offset().top - 25;
        }
        //go to destination
        $('html,body').animate({scrollTop:dest}, 100,'linear');
    }); 
    $("li .scroll, .logo .scroll").click(function(event){
        event.preventDefault();
        var dest=0;
        if ($(this.hash).offset().top > $(document).height()-$(window).height()) {
            dest=$(document).height()-$(window).height();
            $("ul.menu li").removeClass("active-menu");
            $(this).parent().addClass("active-menu");
        }
        else {
            if ($(this).hasClass("underline")) {
                    $("ul.menu li").removeClass("active-menu");
                    $(this).parent().addClass("active-menu");
                }
            dest=$(this.hash).offset().top - 95;
        }
        //go to destination
        $('html,body').animate({scrollTop:dest}, 100,'linear');
    });
    
    $(window).scroll(function() {
        activeSection();	
    });	
    activeSection();
});	

//Projects toggler	
$(document).ready(function(){
    $("div.toggler").click(function() {
        if ($('.toggle-info').is(':visible')) {
            $(".toggle-info").slideUp(500);
            $(this).addClass("closed");	
            $(".project-tile:nth-of-type(4)").removeClass("tile_border");
            $(".toggler h4.more-projects").text("View More");
        }
        else {
            $(this).prev(".toggle-info").slideDown(500);
            $(this).addClass("open");	
            $(".project-tile:nth-of-type(4)").addClass("tile_border");
            $(".toggler h4.more-projects").text("View Less");
        }
  });
});	

//Mobile Menu Open 
$(document).ready(function() {
    $('.nav-panel-mobile #toggle').click(function() {
        $(this).toggleClass('menu-active');
        $('.nav-panel-mobile #overlay').toggleClass('open');
    });
    $('.nav-panel-mobile a.scroll').click(function() {
        $('.nav-panel-mobile #toggle').toggleClass('menu-active');
        $('.nav-panel-mobile #overlay').toggleClass('open');
    });
});	

//Copyright year
var currentYear = (new Date()).getFullYear();
$(document).ready(function() {
    $("#year").text(currentYear);
});