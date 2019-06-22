$(document).ready(function() {
    
  $(".hamburger").click(function () {
//        $(".overlay").fadeToggle(800);
      $(this).toggleClass("is-active");
//        $(".overlay").toggleClass("overlay-active");
   });

 $('.menu a').on('click', function () {
//        $(".overlay").fadeToggle(800);
      $(".hamburger").toggleClass('is-active');
      
  });
    
    
    
    $('.menu-btn').click(function(){
          $('body').toggleClass('open');
            
        });
    
    


$('.beer1').click( function () {
    $( ".beer1_bio" ).toggle(200); 
    $( ".beer_wrapper" ).fadeOut(300);
});
    

$('.back').click( function () {
    $( ".beer1_bio" ).toggle(200); 
    $( ".beer_wrapper" ).fadeIn(300);
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


