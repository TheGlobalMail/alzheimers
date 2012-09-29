define(['jquery'], function($) {

  return {

    adjustGridHeights: function(el){
      // Adjust the column heights on the grid
      // NOTE: this must be done before swipe is initiated
      var maxHeight = 0;
      $column = el.find('ul.grid li');
      $column.each(function() {
        if ($(this).height() > maxHeight) {
          maxHeight = $(this).height();;
        }
      });
      $column.height(maxHeight + (maxHeight*.15));
    },

    removeHash: function(){ 
      var loc = window.location;
      if ("pushState" in history){
        history.pushState("", document.title, loc.pathname + loc.search);
      }
    }

  };

});
