
 $(document).ready(function() {
     
  
    if ($.cookie('active') == null) {
        $("#age-verify").css("display", "inherit");
    }
   
    $("#overAge").click( function () {
      $.cookie('active', 'yes', { expires: 7 }); 
        $("#age-verify").addClass("hidden");
        
    });

     $("#underAge").click( function () {
      $("#age-verify").addClass("under");
    });

    $("#goBack").click( function () {
        window.history.back();
    });
    
    
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");

    });

    $(".menu a").on("click", function () {
      $(".hamburger").toggleClass("is-active");
      
    });
    
    $(".menu-btn").click(function(){
          $("body").toggleClass("open");
            
    }); 
    
    
    $(".beer1").click( function () {
         $(".beer_wrapper").hide( "slide", {direction: "left" }, 300, function() { 
         $(".beer_nav").show( "slide", {direction: "up" }, 400 );
             $(".beer1_bio").show( "slide", {direction: "right" }, 400 );
         });
    });
      
    $(".beer2").click( function () {
         $(".beer_wrapper").hide( "slide", {direction: "left" }, 300, function() { 
         $(".beer_nav").show( "slide", {direction: "up" }, 400 );
             $(".beer2_bio").show( "slide", {direction: "right" }, 400 );
         });
    });
    
    $(".beer3").click( function () {
         $(".beer_wrapper").hide( "slide", {direction: "left" }, 300, function() { 
         $(".beer_nav").show( "slide", {direction: "up" }, 400 );
             $(".beer3_bio").show( "slide", {direction: "right" }, 400 );
         });
    });
    
    $(".beer4").click( function () {
         $(".beer_wrapper").hide( "slide", {direction: "left" }, 300, function() { 
         $(".beer_nav").show( "slide", {direction: "up" }, 400 );
             $(".beer4_bio").show( "slide", {direction: "right" }, 400 );
         });
    });
      
    $(".beer5").click( function () {
         $(".beer_wrapper").hide( "slide", {direction: "left" }, 300, function() { 
         $(".beer_nav").show( "slide", {direction: "up" }, 400 );
             $(".beer5_bio").show( "slide", {direction: "right" }, 400 );
         });
    });
    
    $(".beer6").click( function () {
         $(".beer_wrapper").hide( "slide", {direction: "left" }, 300, function() { 
         $(".beer_nav").show( "slide", {direction: "up" }, 400 );
             $(".beer6_bio").show( "slide", {direction: "right" }, 400 );
         });
    });
    
    
    $(".back").click( function () {
         $(".beer1_bio, .beer2_bio, .beer3_bio, .beer4_bio, .beer5_bio, .beer6_bio").hide( "slide", {direction: "right" }, 300, function() { 
         $(".beer_nav").hide( "slide", {direction: "up" }, 400 );
         $(".beer_wrapper").delay(300).show( "slide", {direction: "left" }, 400);    
         });
    });    
});