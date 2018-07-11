'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
      watch: {
          files: './scss/style.scss',
          tasks: ['sass']
      },
      sass: {
          dev: {
              files: {
                  './css/style.css': './scss/style.scss'
              }
          }
      },
      browserSync: {
          dev: {
              bsFiles: {
                src : './css/*.css'
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
          }
      }
  });

  // load npm tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // define default task
  grunt.registerTask('default', ['browserSync', 'watch']);
};