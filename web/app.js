$(document).ready(function() {

  $.ajax({
    url: 'http://198.101.244.116/?feed=json',
    dataType: 'jsonp',
    success: function(posts){
      var videos
      var $navItemAfterVideos = $('#nav-item-after-video');
      var $sectionAfterVideos = $('#audio-section');
      var maxHeight = 0, slider, $column;

      _.chain(posts)
        .select(function(video){ return _.find(video.categories, function(cat){ return cat === 'Videos'}); })
        .sortBy(function(video, index){ return video.order; })
        .map(function(video, index){
          $navItemAfterVideos.before('<li class="vid"><a data-page="' + (1 + index) + '">' + _.escape(video.title) + '</a></li>');
          $sectionAfterVideos.before(
            '<div class="section">' + 
              '<div class="video" data-vimeo-id="' + video.vimeo + '" >' + 
                '<iframe class="player" width="1000px" height="1000px" src="http://player.vimeo.com/video/' + video.vimeo + '?api=1&player_id=player-' + video.vimeo + '" frameborder="0"></iframe>' +
              '</div>' +
              '<div class="video-txt">' +
              '<p>' + video.content + '</p>' + 
              '<p class="quote">' + video.pull + '</p>' +
              '</div>' + 
            '</div>'
          );
        })
        .value();

      // Enable sound player
      $('a.sc-player, div.sc-player').scPlayer();

      $('a.arrow.right').removeClass('hide');
      window.slider = slider = new Swipe(document.getElementById('container'), {

        callback: function(e, index, el){

          var child, $soundcloudPlayers, $video;

          child = index + 1;
          if (child === 1){
            $('a.arrow.left').addClass('hide');
            $('a.arrow.right').removeClass('hide');
          }else if (child === $('ul[data-role="navigation"] li').length){
            $('a.arrow.right').addClass('hide');
            $('a.arrow.left').removeClass('hide');
          }else{
            $('a.arrow').removeClass('hide');
          }

          // Toggle soundcloud player
          $soundcloudPlayers = $(el).find('.sc-player');
          if ($soundcloudPlayers.length){
            $soundcloudPlayers.show();
          }else{
            $('.sc-player').hide();
          }

          $('ul[data-role="navigation"] li:not(:nth-child(' + child + '))').removeClass('active');
          $('ul[data-role="navigation"] li:nth-child(' + child + ')').addClass('active');
          $('html, body').animate({scrollTop : 0}, 'fast');
        }
      });

      $('a[data-action="prev"]').click(function(e){
        e.preventDefault();
        slider.prev();
      });

      $('a[data-action="next"]').click(function(e){
        e.preventDefault();
        slider.next();
      });

      // Adjust the column heights on the grid
      // NOTE: this must be done before swipe is initiated
      $column = $('ul.grid li');
      $column.each(function() {
        if ($(this).height() > maxHeight) {
          maxHeight = $(this).height();;
        }
      });
      $column.height(maxHeight + (maxHeight*.15));

      // Add modal support
      $('a[rel="modal"]').leanModal({ closeButton: 'a[rel="close-modal"]', overlay: 0.8 });

      $('ul[data-role="navigation"] a').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0}, 'fast');
        slider.slide($(this).data('page'));
      });
      $('ul[data-role="navigation"] li').show();
    }
  });

});
