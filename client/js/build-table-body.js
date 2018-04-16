var buildRow = require('./build-table-row.js');

module.exports = function (set) {
    var body = document.getElementsByTagName('tbody')[0];
    body.innerHTML = '';
    set.forEach(function (record) {
        var row = buildRow(record);
        body.appendChild(row);
    });
};
