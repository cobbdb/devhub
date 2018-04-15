let http = require('http'),
    username = require('git-username')();

module.exports = function (grunt) {
    grunt.registerTask('update', function () {
        let done = this.async();
        let path = grunt.config.get('lastfile');
        let req = http.request({
            host: 'www.dcobb.media',
            path: `/cmg/devhub/api/update.php?user=${username}&file=${path}&key=3.1415`
        });
        req.on('response', function (res) {
            if (res.statusCode !== 200) {
                grunt.log.error(`${res.statusCode} : ${res.statusMessage}`);
                done();
            } else {
                let data = '';
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on('end', function () {
                    grunt.log.ok(data);
                    done();
                });
                res.on('error', function () {
                    grunt.log.error();
                    done();
                });
            }
        });
        req.end();
    });
};
