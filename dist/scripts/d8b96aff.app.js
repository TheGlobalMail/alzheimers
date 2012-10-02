define(['jquery', 'Vent', 'IntroView', 'ClipsView', 'StoriesView', 'SliderView', 'VideosView', 'Models'], 
  function($, vent, introView, clipsView, storiesView, sliderView, videosView, models) {

  var app = {};
  app.vent = vent;

  $(document).ready(function() {

    introView.render();
    
    vent.on('models:loaded', function(){

      videosView.render();
      clipsView.render();
      storiesView.render();
      sliderView.render();

    });

    vent.on('slider:ready', function(){

      // Load videos after the slider is ready
      videosView.loadVideos();

      // Trigger an initial hash change to check to see if we should slide to
      // a particular page
      $(window).trigger('hashchange');

    });

    // Load models and trigger 'models:loaded' on vent when done
    models.load();

  });

  return app;

});
