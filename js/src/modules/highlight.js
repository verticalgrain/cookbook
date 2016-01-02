app.highlight = (function($){
  'use strict';

  function init(){
    highlight();
  }

  function highlight() {
    $('.highlight li').on('click',function() {
      $('.highlight li').removeClass('is-active');
      $(this).addClass('is-active');
    })
  }

  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(document).on('ready', init);

})(jQuery);
