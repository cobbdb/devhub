module.exports = function (grunt) {
    grunt.config.merge({
        cssmin: {
            bundle: {
                files: {
                    'client/less/dist/devhub.min.css': 'bin/devhub.css'
                }
            }
        }
    });
};
