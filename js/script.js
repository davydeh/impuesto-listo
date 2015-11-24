(function($){
	$('.il-navicon').click(function(event) {
		$('.main-nav').toggleClass('shown');
	});

	$('body').delegate('.content-wrapper', 'click', function(event) {
		if(!$(event.target).hasClass('main-nav')){
			$('.main-nav').removeClass('shown');
		}
	});

	$('a[href*=#]:not([href=#])').click(function(event){
		event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 700);
		$('.register__email').focus();
	});


})(jQuery);