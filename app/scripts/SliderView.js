define(['jquery', 'lodash', 'Vent', 'Models', 'ViewHelper', 'swipe', 'modal'], 
  function($, _, vent, models, helper, Swipe){

  var SliderView = function(){};

  SliderView.prototype.render = function(){
    this.setupSlider();
    this.setupArrows();
    this.setupMain();
    this.setupHotKeys();
    this.setupHashChange();
    this.setupModals();
    this.setupNav();
    this.setupShareBox();
    vent.trigger('slider:ready');
  };

  SliderView.prototype.setupSlider = function(){

    var _this = this;

    // Set index on each section to make jumping to them easy
    $('#sections .section').each(function(index){
      $(this).attr('data-section-index', index);
    });

    $('a.arrow.right').removeClass('hide');

    $('#sections').height($('#sections .intro').height());
    window.slider = slider = new Swipe(
      document.getElementById('container'),
      { callback: _.bind(this.slideComplete, this) }
    );

    $('#sections .section.loading').removeClass('loading');
  };

  SliderView.prototype.slideComplete = function(e, index, el){

    var child, $soundcloudPlayers, $video;
    var $backgrounds = $('#backgrounds');

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
      // Get rid of the play and pause text. We're doing this in js as setting
      // a negative margin seems to mess with ipad
      $soundcloudPlayers.find('.sc-play,.sc-pause').text('');
      $soundcloudPlayers.show();
    }else{
      $('.sc-player').hide();
    }

    if ($backgrounds.cycle){
      if ($(el).hasClass('intro')){
        $backgrounds.cycle('resume');
      }else{
        $backgrounds.cycle('pause');
      }
    }

    $('ul[data-role="navigation"] li:not(:nth-child(' + child + '))').removeClass('active');
    $('ul[data-role="navigation"] li:nth-child(' + child + ')').addClass('active');
    $('html, body').animate({scrollTop : 0}, 'fast');

    if ($(el).attr('id')){
      location.hash = '#!' + $(el).attr('id');
      _gaq.push(['_trackPageview',location.pathname + location.search  + location.hash]);
    }else{
      helper.removeHash();
    }
    $('#sections').height($(el).height());

    helper.removeLoading();
  };

  SliderView.prototype.setupMain = function(){
    $('#main a.brand').click(function(e){
      e.preventDefault();
      slider.slide(0);
    });
  };
    
  SliderView.prototype.setupArrows = function(){
    $('a[data-action="prev"]').click(function(e){
      e.preventDefault();
      slider.prev();
    });
    $('a[data-action="next"]').click(function(e){
      e.preventDefault();
      slider.next();
    });
  };

  SliderView.prototype.setupHotKeys = function(){
    $(document).keydown(function(e){
      if (e.keyCode === 37){
        e.preventDefault();
        slider.prev();
      }else if (e.keyCode === 39){
        e.preventDefault();
        slider.next();
      }
    });
  };

  SliderView.prototype.setupHashChange = function(){
    $(window).bind('hashchange', function(){
      var hash = location.hash;
      var validHash = (hash.indexOf('#!') === 0);
      var section = hash.replace( /^#!/, '' );
      var $section, index;
      if (!section){
        // Forward to home
        if (slider.getPos !== 0){
          slider.slide(0);
        }
      }else{
        if (validHash){
          // If we've found a matching section for the hash, slide to it
          $section = $('#' + section + '[data-section-index]');
          if ($section.length){
            // Don't bother sliding if we're already on the section. This
            // will occur when the ui triggers a slide which then triggers
            // a hash change when the slide is complete
            index = parseInt($section.data('section-index'));
            if (index !== slider.getPos()){
              slider.slide($section.data('section-index'));
            }
          }
        }else{
          helper.removeLoading();
        }
      }
    });
  };

  SliderView.prototype.setupModals = function(){
    $('a[rel="modal"]').leanModal({ closeButton: 'a[rel="close-modal"]', overlay: 0.8 });
  };

  SliderView.prototype.setupNav = function(){

    // Set index on each nav link
    $('ul[data-role="navigation"] a').each(function(index){
      $(this).data('page', index);
    });

    $('ul[data-role="navigation"] a').click(function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop : 0}, 'fast');
      slider.slide($(this).data('page'));
    });
    $('ul[data-role="navigation"] li').show();
  };

  SliderView.prototype.setupShareBox = function(){

    $('a.share').click(function(e){

      var $shareBox = $('#share-box');
      var close = function(){ $shareBox.fadeOut().removeClass('active'); };
      e.preventDefault();
      e.stopPropagation();
      if ($shareBox.hasClass('active')){
        close();
      }else{
        if ($shareBox.hasClass('inactive')){
          $shareBox.removeClass('inactive').addClass('active');
        }else{
          $shareBox.fadeIn().addClass('active');
        }
        $('html').one('click', function(){
          close();
        });
      }
    });
  };


  return new SliderView();

});
