module.exports = function (grunt) {
    grunt.config.merge({
        uglify: {
            bundle: {
                files: {
                    'client/js/dist/devhub.min.js': 'bin/devhub.js'
                }
            }
        }
    });
};
