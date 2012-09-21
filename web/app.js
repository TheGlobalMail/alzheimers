$(document).ready(function() {

  var maxHeight = 0, slider, $column;

  // Adjust the column heights on the grid
  // NOTE: this must be done before swipe is initiated
  $column = $('ul.grid li');
  $column.each(function() {
      if ($(this).height() > maxHeight) {
          maxHeight = $(this).height();;
      }
  });
  $column.height(maxHeight + (maxHeight*.15));

  // Add modal support
  $('a[rel*=modal]').leanModal({ closeButton: 'a[rel="close-modal"]', overlay: 0.8 });

  $('a.arrow').removeClass('hide');
  slider = new Swipe(document.getElementById('container'), {
    callback: function(e, index, el){
      var child = index + 1;
      $('ul[data-role="navigation"] li:not(:nth-child(' + child + '))').removeClass('active');
      $('ul[data-role="navigation"] li:nth-child(' + child + ')').addClass('active');
      $('html, body').animate({scrollTop : 0}, 'fast');
    }
  });

  $('ul[data-role="navigation"] a').click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop : 0}, 'fast');
    slider.slide($(this).data('page'));
  });

  $('a[data-action="prev"]').click(function(e){
    e.preventDefault();
    slider.prev();
  });

  $('a[data-action="next"]').click(function(e){
    e.preventDefault();
    slider.next();
  });

});
