module.exports = function (grunt) {
    grunt.config.merge({
        browserify: {
            bundle: {
                files: {
                    'bin/devhub.js': 'client/js/devhub.js'
                }
            }
        }
    });
};
