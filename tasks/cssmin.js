module.exports = function (grunt) {
    grunt.config.merge({
        cssmin: {
            bundle: {
                files: {
                    'client/less/dist/devhub.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.css',
                        'bin/devhub.css'
                    ]
                }
            }
        }
    });
};
