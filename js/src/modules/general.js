app.general = (function($){
  'use strict';

  function init(){
    animatedScroll();
  }

  function animatedScroll() {
  	$('a.u-anchor').click(function() {
  		var elementClicked = $(this).attr("href");
  		var destination = $(elementClicked).offset().top - 80;
  		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 500 );
  		return false;
  	});
	}

  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(document).on('ready', init);

})(jQuery);
