define(['jquery', 'lodash', 'Models', 'ViewHelper', 'scplayer'], function($, _, models, helper){

  var ClipsView = function(){};

  ClipsView.prototype.render = function(){

    var grid = [];
    var $audioNav = $('#audio-nav-item');
    
    $audioNav.find('a').html(models.audioPage.title);

    grid.push(this.renderIntro());

    _.each(models.clips, function(clip, index){
      grid.push(
        '<img class="portrait" src="' + clip.thumbnail + '" />' +
        '<div class="player">' +
        '<h2><a href="' + clip.soundcloud + '" class="sc-player"></a></h2>' +
        '</div>'
      );
    });

    grid.push('<h2>Would you like to share your experiences with dementia, either via audio or words?</h2>' +
      '<a href="#share-your-story" rel="modal" class="btn"></a>'
    );
    $('#own-words table.grid').html(helper.renderTable(grid, 'audio'));
    
    // Enable sound player
    if ($.isFunction($.scPlayer.defaults.onDomReady)){
      $('a.sc-player, div.sc-player').scPlayer();
    }

  };

  ClipsView.prototype.renderIntro = function(){
    return '<h1 id="audio-title">' + models.audioPage.title + '</h1>' + 
      '<p id="audio-content">' + models.audioPage.excerpt + '</p>' + 
      '<a class="btn" href="#share-your-story" rel="modal"></a>';
  };

  return new ClipsView();

});
