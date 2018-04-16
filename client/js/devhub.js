var filter = require('./filter.js'),
    buildFilter = require('./build-filter.js'),
    buildTable = require('./build-table-body.js');

$.getJSON('http://www.dcobb.media/cmg/devhub/api/ping.php?key=3.1415', function (res) {
    //var res = {"records":[{"user":"dcobb","path":"test\/path1234.js","time":1523656809},{"user":"mheydari","path":"test\/path1.js","time":1523657365},{"user":"mheydari","path":"test\/path10.js","time":1523657356},{"user":"mheydari","path":"test\/path189.js","time":1523657489},{"user":"mheydari","path":"test\/path18989.js","time":1523659853}]};

    res.records.forEach(function (record) {
        // Elapsed time in seconds.
        record.time = Date.now() / 1000 - record.time;
        // Save as minutes.
        record.time /= 60;
    });

    buildTable(res.records);
    $('input').on('input', function () {
        var filtered = filter(buildFilter(), res.records);
        buildTable(filtered);
    });
}).fail(function (jqXHR) {
    console.error(jqXHR.status, jqXHR.statusText);
});
