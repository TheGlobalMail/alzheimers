(function($, _, app){

  var IntroView = function(){};

  IntroView.prototype.render = function(){

    $('#backgrounds').cycle();

  };

  app.views.introView = new IntroView();

})($, _, TGM.alzheimers);
