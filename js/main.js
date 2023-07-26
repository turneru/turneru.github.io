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
		$(".name_border").css("opacity, 1")
	} 

	else if (isIntoView($("#projects_wrapper .nav_anchor"))){
		$("#about_wrapper, #contact_wrapper").removeClass("active_section");
		$("#projects_wrapper").addClass("active_section");
		$("ul.menu li:nth-of-type(2), ul.menu li:nth-of-type(3)").removeClass("active_menu");
		$("ul.menu li:nth-of-type(1)").addClass("active_menu");
		$("h2, .projects_intro, .project_tile:nth-of-type(1), .project_tile:nth-of-type(2)").addClass("fade-in-bottom");
	}
	
	else if (isIntoView($("#projects_wrapper .project_tile:nth-of-type(2)"))){
		$(".project_tile:nth-of-type(3)").addClass("fade-in-bottom");
	}
	
	else if (isIntoView($("#projects_wrapper .project_tile:nth-of-type(3)"))){
		$(".project_tile:nth-of-type(4)").addClass("fade-in-bottom");
	}
	
	else if (isIntoView($("#projects_wrapper .project_tile:nth-of-type(4)"))){
		$(".toggler").addClass("fade-in-bottom");
	}
	
	else if (isIntoView($("#about_wrapper .nav_anchor"))){
		$("#projects_wrapper, #contact_wrapper").removeClass("active_section");
		$("#about_wrapper").addClass("active_section");
		$("ul.menu li:nth-of-type(1), ul.menu li:nth-of-type(3)").removeClass("active_menu");
		$("ul.menu li:nth-of-type(2)").addClass("active_menu");
		$("h2, h3").addClass("fade-in-bottom");
		$(".skill_container, .skill_wrapper").addClass("fade-in-bottom");
	}

	else if (isIntoView($("#contact_wrapper"))){
		$("#about_wrapper, #projects_wrapper").removeClass("active_section");
		$("#contact_wrapper").addClass("active_section");
		$("ul.menu li:nth-of-type(1), ul.menu li:nth-of-type(2)").removeClass("active_menu");
		$("ul.menu li:nth-of-type(3)").addClass("active_menu");
		$(".contact_title, .contact_text, .contact_button,.social_icons").addClass("fade-in-bottom");
	} 
}

$(document).ready(function(){
	if ($(window).width() > 768) {
		$(window).scroll(function() {
			if($(this).scrollTop() >= 50) {
				$('header').addClass('scrolled');   
			}
			else {
				$('header').removeClass('scrolled');   
			}
		});
	}
});		

$(window).on('resize', function() {
	if ($(window).width() > 768) {
		$(window).scroll(function() {
			if($(this).scrollTop() >= 50) {
				$('header').addClass('scrolled');   
			}
			else {
				$('header').removeClass('scrolled');   
			}
		});	
	}
});			