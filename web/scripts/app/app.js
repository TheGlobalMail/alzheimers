var TGM = {};
TGM.alzheimers = {};
TGM.alzheimers.vent = $({});
TGM.alzheimers.views = {};

$(document).ready(function() {

  var app = TGM.alzheimers;

  app.views.introView.render();
  
  app.vent.on('models:loaded', function(){

    app.views.videosView.render();
    app.views.clipsView.render();
    app.views.storiesView.render();
    app.views.sliderView.render();

  });

  app.vent.on('slider:ready', function(){

    // Load videos after the slider is ready
    app.views.videosView.loadVideos();

    // Trigger an initial hash change to check to see if we should slide to
    // a particular page
    $(window).trigger('hashchange');

  });

  // Load models and trigger 'models:loaded' on vent when done
  app.models.load();

});
