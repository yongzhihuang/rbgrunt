module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    exec: {
      build: {
        command: 'node node_modules/requirejs/bin/r.js -o require-config.js'
      }
    },

    // all of our configuration will go here
    // configure jshint to validate js files -----------------------------------
    jshint: {
        options: {
          reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
        },

      // when this task is run, lint the Gruntfile and all js files in src
        build: ['Grunfile.js', 'app/js/*.js','app/js/collections/*.js','app/js/models/*.js','app/js/views/*.js','app/js/templates/*.js']
    },

    watch: {

      // for stylesheets, watch css and less files
      // only run less and cssmin
      // stylesheets: {
      //   files: ['css/*.css'],
      //   tasks: ['cssmin']
      // },

      // for scripts, run jshint and uglify
      scripts: {
        files: ['Grunfile.js', 'app/js/*.js','app/js/collections/*.js','app/js/models/*.js','app/js/views/*.js','app/js/templates/*.js'],
        tasks: ['jshint']
      }
    }

  });

  grunt.registerTask('copy-require', function() {
    grunt.file.mkdir('build/js/lib');
    grunt.file.copy('node_modules/requirejs/require.js', 'build/js/lib/require.js');
  });

  grunt.registerTask('lint', 'jshint');
  grunt.registerTask('build', ['exec', 'copy-require']);
};