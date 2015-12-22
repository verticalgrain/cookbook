app.skrollrinit = (function($){
  'use strict';

  if ($('html').hasClass('no-touch') && !$('html').hasClass('ie8')) {
    var s = skrollr.init({
      forceHeight:false,
      smoothScrolling:false,
      edgeStrategy:'ease',
      constants: {
        viewportheight: function() {
          var viewportHeight = $( window ).height();
          return viewportHeight;
        },
        viewportheightminus: function() {
          var viewportHeightMinus = $( window ).height() -130;
          return viewportHeightMinus;
        },
        viewportheightplus: function() {
          var viewportHeightPlus = $( window ).height() + 55;
          return viewportHeightPlus;
        }
      }
    });
  }

})(jQuery);
