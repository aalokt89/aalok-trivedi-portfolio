//navigation script

$(document).ready(function () {
	var menuLink = $('.nav__navLink');

	//smooth scrolling when clicked
	menuLink.click(function (e) {
		e.preventDefault();

		$('html, body ').animate({ scrollTop: $(this.hash).offset().top }, 500);
	});

	//switch active link
	$(window).scroll(function (e) {
		var scrollBarLocation = $(this).scrollTop();

		// switch menu active when scrolled
		menuLink.each(function () {
			var sectionOffset = $(this.hash).offset().top;

			if (sectionOffset <= scrollBarLocation) {
				$(menuLink).removeClass('nav__navLink--active');
				$(this).addClass('nav__navLink--active');
			}
		});
	});
});
