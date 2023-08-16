//Intro typing
window.onload = function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
		  new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};

//Scrolled into View actions
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
	}
	
	else if (isIntoView($("#about-wrapper .nav-anchor"))){
		$("#projects-wrapper, #contact-wrapper").removeClass("active-section");
		$("#about-wrapper").addClass("active-section");
		$("ul.menu li:nth-of-type(1), ul.menu li:nth-of-type(3)").removeClass("active-menu");
		$("ul.menu li:nth-of-type(2)").addClass("active-menu");
	}

	else if (isIntoView($("#contact-wrapper"))){
		$("#about-wrapper, #projects-wrapper").removeClass("active-section");
		$("#contact-wrapper").addClass("active-section");
		$("ul.menu li:nth-of-type(1), ul.menu li:nth-of-type(2)").removeClass("active-menu");
		$("ul.menu li:nth-of-type(3)").addClass("active-menu");
	} 
}