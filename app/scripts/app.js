define(['jquery', 'Vent', 'IntroView', 'ClipsView', 'StoriesView', 'SliderView', 'VideosView', 'Models'], 
  function($, vent, introView, clipsView, storiesView, sliderView, videosView, models) {

  var app = {};
  app.vent = vent;

  // Intro view needs to wait until all images are preloaded
  $(window).load(function() {
    introView.render();
  });

  $(document).ready(function() {
    
    vent.on('models:loaded', function(){

      videosView.render();
      clipsView.render();
      storiesView.render();
      sliderView.render();

    });

    vent.on('slider:ready', function(){

      // Trigger an initial hash change to check to see if we should slide to
      // a particular page
      $(window).trigger('hashchange');

    });

    // Load models and trigger 'models:loaded' on vent when done
    models.load();

  });

  return app;

});
