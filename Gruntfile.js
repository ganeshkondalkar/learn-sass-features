module.exports = function(grunt){

  const sass = require('dart-sass');

  require('load-grunt-tasks')(grunt);

  // PROJECT CONFIGURATION
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        sourceComments: true, // Enables the line number and file where a selector is defined to be emitted into the compiled CSS
        outputStyle: 'expanded' // compressed, expanded
      },
      dist: {
        files: {
          'src/css/main.css': 'src/sass/main.scss'
        }
      }
    },

    watch: {
      options: {
        debounceDelay: 350, // How long to wait before emitting events in succession for the same filepath and status
        interrupt: true // terminate the previous process and spawn a new one upon changes.
      },
      gruntfile: {
        options: {},
        files: 'Gruntfile.js',
        tasks: ['default']
      },
      sass: {
        options: {},
        files: 'src/sass/**/*.scss',
        tasks: ['sass']
      }
    }

  });


  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass', 'watch']);

}
