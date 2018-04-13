var http = require('http');

module.exports = function (grunt) {
    grunt.config.merge({
        watch: {
            scripts: {
                files: ['./src/**/*.js'],
                tasks: ['update']
            },
            options: {
                nospawn: true
            }
        }
    });
    grunt.event.on('watch', function (action, filepath) {
        grunt.config.set('lastfile', filepath);
    });
};
