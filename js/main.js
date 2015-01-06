;(function(window, document, $, undefined) {
  var screenSmMin  = 768,
      donkeyPicCol = '.introduction-row .picture',
      introCol     = '.introduction-row .intro';

  /**
   * Update introduction column height
   *
   * Update height of the introduction column to match
   * the donkey image only for medium+ sized screens.
   */
  var updateIntroHeight = function() {
    if (window.innerWidth > screenSmMin) {
      $(introCol).css({
        'height': $(donkeyPicCol + ' img').outerHeight(true) + 'px'
      });
    } else {
      $(introCol).css({
        'height': 'auto'
      });
    }
  };

  $(window).on('load', function() {
    updateIntroHeight();
    $(window).on('resize orientationchange', $.debounce(200, updateIntroHeight));

    // table-cell class given to intro & donkey pic columns
    // in order to try and minimize jankyness on load. But once
    // the heights are set with JS, this class can be removed.
    $(introCol + ', ' + donkeyPicCol).removeClass('table-cell');
  });
}(window, document, jQuery));
