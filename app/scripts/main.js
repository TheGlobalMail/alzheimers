require.config({
  shim: {
    swipe: {
      deps: ['jquery', 'modernizer'],
      exports: 'Swipe'
    },
    cycle: {
      deps: ['jquery']
    },
    modal: {
      deps: ['jquery']
    },
    soundcloud: {
      exports: 'soundcloud'
    },
    scplayer: {
      deps: ['jquery', 'soundcloud']
    }
  },

  paths: {
    lodash: 'vendor/lodash',
    jquery: 'vendor/jquery.min',
    soundcloud: 'vendor/soundcloud.player.api',
    scplayer: 'vendor/sc-player',
    modal: 'vendor/jquery.leanModal',
    cycle: 'vendor/jquery.cycle.lite',
    swipe: 'vendor/swipe',
    modernizer: 'vendor/modernizr.custom.54365'
  }
});
 
require(['app'], function(app) {

  // go!

});
