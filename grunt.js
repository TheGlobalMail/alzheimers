module.exports = function(grunt) {

  grunt.initConfig({
 
    watch: {
      files: ["web/scripts/app/*.js"],
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
        "web/scripts/app/app.js"
      ]
    },

    min: {
      'web/scripts/main.js': ['web/scripts/main.js']
    },

  });

  grunt.registerTask('default', 'concat');
  grunt.registerTask('dist', 'concat min');

};
