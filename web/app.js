(function($){

  var position = 0;

  window.right = function(e){
    position++;
    $("#sections").css("transform","translateX("+ position * -1000 + "px)");
  }

  window.left = function(e){
    position--;
    $("#sections").css("transform","translateX("+ position * -1000 + "px)");
  }


})($);

$(document).ready(function() {

  $('a[data-action="left"]').click(window.left);
  $('a[data-action="right"]').click(window.right);

});
