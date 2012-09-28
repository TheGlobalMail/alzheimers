(function($, _, app){

  var ClipsView = function(){};

  ClipsView.prototype.render = function(){

    var $audioNav = $('#audio-nav-item');
    var $audioShare = $('#audio-share');

    $audioNav.find('a').html(app.models.audioPage.title);
    $('#audio-title').html(app.models.audioPage.title);
    $('#audio-content').html(app.models.audioPage.excerpt)

    _.each(app.models.clips, function(clip, index){
      $audioShare.before(
        '<li class="audio" style="background-image: url(' + clip.thumbnail + 
        ');"><h2><a href="' + clip.soundcloud + '" class="sc-player"></a></h2></li>'
        );
    });
    
    // Enable sound player
    if ($.isFunction($.scPlayer.defaults.onDomReady)){
      $('a.sc-player, div.sc-player').scPlayer();
    }

    app.views.helpers.adjustGridHeights($('#own-words'));

  };

  app.views.clipsView = new ClipsView();

})($, _, TGM.alzheimers);
