module.exports = function (grunt) {
    grunt.config.merge({
        less: {
            bundle: {
                files: {
                    'bin/devhub.css': 'client/less/devhub.less'
                }
            }
        }
    });
};
