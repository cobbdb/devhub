var filter = require('./filter.js');

/*$.getJSON('http://www.dcobb.media/cmg/devhub/api/ping.php?key=3.1415', function (res) {
    console.log(res);
}).fail(function (jqXHR) {
    console.error(jqXHR.status, jqXHR.statusText);
});*/

var data = {};


$('input').on('input', function () {
    var type = this.getAttribute('data-type'),
        value = this.value;

    console.log('input', this.getAttribute('data-type'), 'now has', this.value, 'in it!');
});
