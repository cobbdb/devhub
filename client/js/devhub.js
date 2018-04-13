var $ = require('jquery');

$.getJSON('http://www.dcobb.media/cmg/devhub/api/ping.php?key=3.1415', function (res) {
    console.log(res);
}).fail(function (jqXHR) {
    console.error(jqXHR.status, jqXHR.statusText);
});
