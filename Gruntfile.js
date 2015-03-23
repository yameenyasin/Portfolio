module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            src: {
                files: ['**/*.css','**/*.html']
            }
        },
        browserSync:{
           dev:{
               bsFiles:{
                  src:['public'] 
               },
               options:{
                   watchTask:true,
                   server:'./public',
                   injectChanges:false
               }
           }
            
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default',['browserSync', 'watch']);
};