(function($, _, app){

  var VideosView = function(){};

  VideosView.prototype.render = function(){

    var $audioNav = $('#audio-nav-item');
    var $sectionAfterVideos = $('#own-words');

    _.each(app.models.videos, function(video, index){

      $audioNav.before('<li class="vid"><a data-page="' + (1 + index) + '">' + _.escape(video.title) + '</a></li>');

      $sectionAfterVideos.before(
        '<div class="section" id="' + video.slug + '-video">' + 
          '<div class="video vimeo-player" data-vimeo-id="' + video.vimeo + '" >' + 
          '</div>' +
          '<div class="video-txt">' +
          '<p>' + video.excerpt + '</p>' + 
          '<p class="quote">' + video.pull + '</p>' +
          '</div>' + 
        '</div>'
      );
    });

  };

  VideosView.prototype.loadVideos = function(){

    _.each(app.models.videos, function(video){
      $('.vimeo-player[data-vimeo-id=' + video.vimeo + ']').html(
        '<iframe class="player" src="http://player.vimeo.com/video/' + 
          video.vimeo + '?api=1&player_id=player-' + video.vimeo + 
          '" frameborder="0"></iframe>'
      );
    });

  };

  app.views.videosView = new VideosView();

})($, _, TGM.alzheimers);
