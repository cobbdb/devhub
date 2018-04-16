module.exports = function (filter, set) {
    var name, user, pathIsValid, timeIsValid,
        results = [];

    // Empty string matches all strings.
    filter.user = filter.user || '';
    filter.path = filter.path || '';
    filter.time = filter.time || '';

    set.forEach(function (record) {
        var userIsValid = record.user.indexOf(filter.user) >= 0,
            pathIsValid = record.path.indexOf(filter.path) >= 0,
            timeIsValid = true;
        if (userIsValid && pathIsValid && timeIsValid) {
            results.push(record);
        }
    });

    return results;
};
