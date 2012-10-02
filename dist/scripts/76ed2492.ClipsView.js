define(['jquery', 'lodash', 'Models', 'ViewHelper', 'scplayer'], function($, _, models, helper){

  var ClipsView = function(){};

  ClipsView.prototype.render = function(){

    var $audioNav = $('#audio-nav-item');
    var $audioShare = $('#audio-share');

    $audioNav.find('a').html(models.audioPage.title);
    $('#audio-title').html(models.audioPage.title);
    $('#audio-content').html(models.audioPage.excerpt)

    _.each(models.clips, function(clip, index){
      $audioShare.before(
        '<li class="audio" style="background-image: url(' + clip.thumbnail + 
        ');"><h2><a href="' + clip.soundcloud + '" class="sc-player"></a></h2></li>'
        );
    });
    
    // Enable sound player
    if ($.isFunction($.scPlayer.defaults.onDomReady)){
      $('a.sc-player, div.sc-player').scPlayer();
    }

    helper.adjustGridHeights($('#own-words'));

  };

  return new ClipsView();

});
