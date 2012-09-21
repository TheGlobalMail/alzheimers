$(document).ready(function() {

  var maxHeight = 0, slider, $column;

  $column = $('ul.grid li');
  $column.each(function() {
      // Store the highest value
      if ($(this).height() > maxHeight) {
          maxHeight = $(this).height();;
      }
  });
  // Set the height
  $column.height(maxHeight + (maxHeight*.15));

  slider = new Swipe(document.getElementById('container'), {

    callback: function(e, index, el){
      var child = index + 1;
      $('ul[data-role="navigation"] li:not(:nth-child(' + child + '))').removeClass('active');
      $('ul[data-role="navigation"] li:nth-child(' + child + ')').addClass('active');
    }

  });

  $('ul[data-role="navigation"] a').click(function(e){
    e.preventDefault();
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
