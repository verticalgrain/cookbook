app.toggle = (function($){
  'use strict';

  function init(){
    //toggle();
  }

  function toggle() {
    $('.toggle').on('click',function() {
      $('body').toggleClass('ingredients-active');
    })
  }

  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(document).on('ready', init);

})(jQuery);
