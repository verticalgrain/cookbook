app.toggle = (function($){
  'use strict';

  function init(){
    //toggle();
  }

  function toggle() {
    if (navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i)) {
      $('.toggle').on('click',function() {
        $('body').toggleClass('ingredients-active');
      })
    }
  }

  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(document).on('ready', init);

})(jQuery);
