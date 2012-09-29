define(['jquery', 'cycle'], function($){

  var IntroView = function(){};

  IntroView.prototype.render = function(){

    $('#backgrounds img').removeClass('hide');
    $('#backgrounds').cycle();

  };

  return new IntroView();

});
