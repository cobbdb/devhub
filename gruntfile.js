module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadTasks('tasks');
    grunt.registerTask('default', ['watch']);
};
