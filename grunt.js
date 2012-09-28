module.exports = function(grunt) {

  grunt.initConfig({
 
    watch: {
      files: ["web/scripts/app/*.js", "web/scripts/vendor/*.js"],
      tasks: 'default'
    },

    concat: {
      'web/scripts/main.js': [
        "web/scripts/vendor/modernizr.custom.32065.js",
        "web/scripts/vendor/lodash.js",
        "web/scripts/vendor/soundcloud.player.api.js",
        "web/scripts/vendor/sc-player.js",
        "web/scripts/vendor/jquery.leanModal.js",
        "web/scripts/vendor/swipe.js",
        "web/scripts/vendor/swipe.js",
        "web/scripts/vendor/jquery.cycle.lite.js",
        "web/scripts/app/app.js",
        "web/scripts/app/Models.js",
        "web/scripts/app/IntroView.js",
        "web/scripts/app/ViewHelper.js",
        "web/scripts/app/VideosView.js",
        "web/scripts/app/ClipsView.js",
        "web/scripts/app/StoriesView.js",
        "web/scripts/app/SliderView.js"
      ]
    },

    min: {
      'web/scripts/main.js': ['web/scripts/main.js']
    },

  });

  grunt.registerTask('default', 'concat');
  grunt.registerTask('dist', 'concat min');

};
