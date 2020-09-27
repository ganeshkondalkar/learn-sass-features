module.exports = function(grunt){

  // PROJECT CONFIGURATION
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          lineNumbers: true, // Emit comments in the generated CSS indicating the corresponding source line.
          noCache: true, // Don't cache to sassc files.
          update: true, // Only compile changed files.
          trace: true, // Show a full traceback on error.
          style: 'expanded' // nested, compact, compressed, expanded
        },
        files: {
          'src/css/main.css': 'src/sass/main.scss'
        }
      }
    },

    watch: {
      sass: {
        options: {
          debounceDelay: 350, // How long to wait before emitting events in succession for the same filepath and status
          interrupt: true // terminate the previous process and spawn a new one upon changes.
        },
        files: 'src/sass/*.scss',
        tasks: ['sass']
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['watch']);

}
