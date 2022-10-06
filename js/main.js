function isIntoView(elem) {
	var documentViewTop = $(window).scrollTop();
	var documentViewBottom = documentViewTop + $(window).height();

	var elementTop = $(elem).offset().top;
	var elementBottom = elementTop + $(elem).height();

	return ((elementBottom <= documentViewBottom) && (elementTop >= documentViewTop));
}

function activeSection() {
	if (isIntoView($("#intro_wrapper"))){
		$("ul.menu li").removeClass("active_menu");
	} 

	else if (isIntoView($("#about_wrapper"))){
		$("#projects_wrapper, #contact_wrapper").removeClass("active_section");
		$("#about_wrapper").addClass("active_section");
		$("ul.menu li:nth-of-type(2), ul.menu li:nth-of-type(3)").removeClass("active_menu");
		$("ul.menu li:nth-of-type(1)").addClass("active_menu");
		$(".skill_container, .skill_left, .skill_right, .skill_icon, .skill_title, .skill_list").addClass("fade-in-bottom");
	}

	else if (isIntoView($("#projects_wrapper"))){
		$("#about_wrapper, #contact_wrapper").removeClass("active_section");
		$("#projects_wrapper").addClass("active_section");
		$("ul.menu li:nth-of-type(1), ul.menu li:nth-of-type(3)").removeClass("active_menu");
		$("ul.menu li:nth-of-type(2)").addClass("active_menu");
		$(".project_tile, #projects_wrapper h2").addClass("fade-in-bottom");
	}

	else if (isIntoView($("#contact_wrapper"))){
		$("#about_wrapper, #projects_wrapper").removeClass("active_section");
		$("#contact_wrapper").addClass("active_section");
		$("ul.menu li:nth-of-type(1), ul.menu li:nth-of-type(2)").removeClass("active_menu");
		$("ul.menu li:nth-of-type(3)").addClass("active_menu");
		$(".contact_title, .contact_text, .social_icons, .contact_arrow").addClass("fade-in-bottom");
	} 
}

$(document).ready(function() {
 
//	$(window).on('hashchange', function() {
//         
//         if (window.location.hash == "#about") {
//            $("#btn2").addClass("active_hover");
//             $("#btn3, #btn4").removeClass("active_hover");
//        } 
//         
//         else if (window.location.hash == "#projects") {
//             $("#btn3").addClass("active_hover");
//              $("#btn2, #btn4").removeClass("active_hover");
//         }
//             
//         else if (window.location.hash == "#contact") {
//             $("#btn4").addClass("active_hover");
//              $("#btn3, #btn2").removeClass("active_hover");
//         }
//         
//         else {
//             $("#btn2, #btn3, #btn4").removeClass("active_hover");
//         }
//	});
      
//$(window).scroll(function() {    
//    var scroll = $(window).scrollTop();
//
//    if (scroll > 25) {
//        //$("header").addClass("slide-out-left").removeClass("slide-in-left");
//        $(".side").show().addClass("slide-in-left-fast").removeClass("slide-out-left");
//    } 
//    
//    else {
//        //$("header").addClass("slide-in-left").removeClass("slide-out-left");
//        $(".side").hide().addClass("slide-out-left").removeClass("slide-in-left-fast"); 
//    }
//  
//});
     
//$(window).scroll(function() {    
//    var scroll = $(window).scrollTop();
//    
//    if (scroll >= 26 && scroll <= 999 ) {
//        $("#btn1").addClass("active_hover");
//             $("#btn2, #btn3, #btn4").removeClass("active_hover");
//    } 
//
//    else if (scroll >= 1000 && scroll <= 1700 ) {
////        $("#btn2").addClass("active_hover");
////        $("#btn1, #btn3, #btn4").removeClass("active_hover");
////        $(".skill_left").addClass("slide-in-left");
////        $(".skill_right").addClass("slide-in-right");
//    } 
//    
//    else if (scroll >= 1701 && scroll <= 2600) {
//         $("#btn3").addClass("active_hover");
//              $("#btn1, #btn2, #btn4").removeClass("active_hover");
//    } 
//    
//    else if (scroll >= 2601 && scroll <= 5000) {
//         $("#btn4").addClass("active_hover");
//              $("#btn1, #btn2, #btn3").removeClass("active_hover");
//    } 
//  
//});  

});