module.exports = function (record) {
    var tr = document.createElement('tr'),
        name = document.createElement('td'),
        path = document.createElement('td'),
        badgeTD = document.createElement('td'),
        badge = document.createElement('div');

    name.innerHTML = record.user;
    path.innerHTML = record.path;

    badge.className = 'badge badge-pill badge-';
    if (record.time < 2) {
        badge.className += 'danger';
        badge.innerHTML = '&lt; 2 min';
    } else if (record.time < 90) {
        badge.className += 'warning';
        badge.innerHTML = parseInt(record.time) + ' min';
    } else if (record.time < 1440) {
        badge.className += 'info';
        badge.innerHTML = parseInt(record.time / 60) + ' hr';
    } else {
        badge.className += 'success';
        badge.innerHTML = '&gt; 1 day';
    }
    badgeTD.appendChild(badge);

    tr.appendChild(name);
    tr.appendChild(path);
    tr.appendChild(badgeTD);

    return tr;
};
