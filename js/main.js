;(function(window, document, $, undefined) {
  var screenSmMin       = 768,
      donkeyPicSelector = '.introduction-row .picture img',
      introSelector     = '.introduction-row .intro';

  /**
   * Update introduction column height
   *
   * Update height of the introduction column to match
   * the donkey image only for medium+ sized screens.
   */
  var updateIntroHeight = function() {
    if (window.innerWidth > screenSmMin) {
      $(introSelector).css({
        'height': $(donkeyPicSelector).outerHeight(true) + 'px'
      });
    } else {
      $(introSelector).css({
        'height': 'auto'
      });
    }
  };

  $(window).on('load', function() {
    updateIntroHeight();
    $(window).on('resize orientationchange', $.debounce(200, updateIntroHeight));
  });
}(window, document, jQuery));
