module.exports = function(grunt) {

  grunt.initConfig({
 
    watch: {
      files: ["web/scripts/*.js"],
      tasks: 'default'
    },

    concat: {
      'web/main.js': [
        "web/scripts/modernizr.custom.32065.js",
        "web/scripts/lodash.js",
        "web/scripts/soundcloud.player.api.js",
        "web/scripts/sc-player.js",
        "web/scripts/jquery.leanModal.js",
        "web/scripts/swipe.js",
        "web/scripts/app.js"
      ]
    },

    min: {
      'web/main.js': ['web/main.js']
    },

  });

  grunt.registerTask('default', 'concat');
  grunt.registerTask('dist', 'concat min');

};
