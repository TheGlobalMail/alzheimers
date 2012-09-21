$(document).ready(function() {

  var slider = window.slider = new Swipe(document.getElementById('container'), {

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
