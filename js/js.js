//navigation script

$(document).ready(function () {
	var menuLink = $('#main-nav li a');

	//smooth scrolling when clicked
	menuLink.click(function (e) {
		e.preventDefault();

		$('html, body ').animate({ scrollTop: $(this.hash).offset().top }, 1000);
	});

	//switch active link
	$(window).scroll(function (e) {
		var scrollBarLocation = $(this).scrollTop();

		// switch menu active when scrolled
		menuLink.each(function () {
			var sectionOffset = $(this.hash).offset().top;

			if (sectionOffset <= scrollBarLocation) {
				$(menuLink).removeClass('active');
				$(this).addClass('active');
			}
		});
	});
});
