var TGM = {};
TGM.alzheimers = {};
TGM.alzheimers.vent = $({});
TGM.alzheimers.views = {};

$(document).ready(function() {
  
  TGM.alzheimers.vent.on('slider:ready', function(){

    // Load videos after the slider is ready
    TGM.alzheimers.views.videosView.loadVideos();

    // Trigger an initial hash change to check to see if we should slide to
    // a particular page
    $(window).trigger('hashchange');

  });

  // Load models and triggers 'models:loaded' on vent
  TGM.alzheimers.models.load();

});
