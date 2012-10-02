define(['jquery'], function($) {

  return {

    // Adjust the column heights on the grid so each cell in a row is the
    // same height
    // NOTE: this must be done before swipe is initiated
    adjustGridHeights: function(el){

      var maxHeight = 0, $cell1, $cell2, adjustedHeight;
      var $column = el.find('ul.grid li');
      $column.each(function(index) {
        if (index % 2 === 0){
          $cell1 = $(this);
        }else{
          $cell2 = $(this);
          if ($cell2.height() > $cell1.height()) {
            maxHeight = $cell2.height();
          }else{
            maxHeight = $cell1.height();
          }
          adjustedHeight = maxHeight + (maxHeight * .15);
          $cell1.height(adjustedHeight);
          $cell2.height(adjustedHeight);
        }
      });

    },

    removeHash: function(){ 
      var loc = window.location;
      if ("pushState" in history){
        history.pushState("", document.title, loc.pathname + loc.search);
      }
    }

  };

});
