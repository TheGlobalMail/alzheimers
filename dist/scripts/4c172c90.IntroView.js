define(['jquery', 'cycle'], function($){

  var IntroView = function(){
    this.$backgrounds = $('#backgrounds');
  };

  IntroView.prototype.render = function(){

    this.$backgrounds.find('img').removeClass('hide');
    this.$backgrounds.cycle();

  };

  return new IntroView();

});
