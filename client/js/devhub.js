var filter = require('./filter.js'),
    buildFilter = require('./build-filter.js');

$.getJSON('http://www.dcobb.media/cmg/devhub/api/ping.php?key=3.1415', function (res) {
    console.log(res);
}).fail(function (jqXHR) {
    console.error(jqXHR.status, jqXHR.statusText);
    var res = {"users":{"dcobb":[{"path":"test\/path1234.js","time":1523656809}],"mheydari":[{"path":"test\/path1.js","time":1523657365},{"path":"test\/path10.js","time":1523657356},{"path":"test\/path189.js","time":1523657489},{"path":"test\/path18989.js","time":1523659853}]}};

    $('input').on('input', function () {
        console.log('went from', res.users);
        var filtered = filter(buildFilter(), res.users);
        console.log('now using', filtered);
    });
});
