
window.onload = function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
		  new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};

function isIntoView(elem) {
	var documentViewTop = $(window).scrollTop();
	var documentViewBottom = documentViewTop + $(window).height();
	var elementTop = $(elem).offset().top;
	var elementBottom = elementTop + $(elem).height();
	return ((elementBottom <= documentViewBottom) && (elementTop >= documentViewTop));
}

function activeSection() {
	if (isIntoView($("#intro-wrapper"))){
		$("ul.menu li").removeClass("active-menu");
		$(".name-border").css("opacity, 1")
	} 

	else if (isIntoView($("#projects-wrapper .nav-anchor"))){
		$("#about-wrapper, #contact-wrapper").removeClass("active-section");
		$("#projects-wrapper").addClass("active-section");
		$("ul.menu li:nth-of-type(2), ul.menu li:nth-of-type(3)").removeClass("active-menu");
		$("ul.menu li:nth-of-type(1)").addClass("active-menu");
		//$("h2, .projects_intro, .project-tile:nth-of-type(1), .project-tile:nth-of-type(2)").addClass("fade-in-bottom");
	}
	
	// else if (isIntoView($("#projects-wrapper .project-tile:nth-of-type(2)"))){
	// 	$(".project-tile:nth-of-type(3)").addClass("fade-in-bottom");
	// }
	
	// else if (isIntoView($("#projects-wrapper .project-tile:nth-of-type(3)"))){
	// 	$(".project-tile:nth-of-type(4)").addClass("fade-in-bottom");
	// }
	
	// else if (isIntoView($("#projects-wrapper .project-tile:nth-of-type(4)"))){
	// 	$(".toggler").addClass("fade-in-bottom");
	// }
	
	else if (isIntoView($("#about-wrapper .nav-anchor"))){
		$("#projects-wrapper, #contact-wrapper").removeClass("active-section");
		$("#about-wrapper").addClass("active-section");
		$("ul.menu li:nth-of-type(1), ul.menu li:nth-of-type(3)").removeClass("active-menu");
		$("ul.menu li:nth-of-type(2)").addClass("active-menu");
		//$("h2, h3").addClass("fade-in-bottom");
		//$(".skill-container, .skill-wrapper").addClass("fade-in-bottom");
	}

	else if (isIntoView($("#contact-wrapper"))){
		$("#about-wrapper, #projects-wrapper").removeClass("active-section");
		$("#contact-wrapper").addClass("active-section");
		$("ul.menu li:nth-of-type(1), ul.menu li:nth-of-type(2)").removeClass("active-menu");
		$("ul.menu li:nth-of-type(3)").addClass("active-menu");
		//$(".contact_title, .contact_text, .contact_button,.social-icons").addClass("fade-in-bottom");
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