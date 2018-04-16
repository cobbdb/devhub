/**
 * var filtered = filter({
 *      user: 'abc',
 *      path: 'abc',
 *      time: 'abc'
 * }, data);
 */
module.exports = function (filter, set) {
    var name, user, pathIsValid, timeIsValid,
        results = {};

    // Empty string matches all strings.
    filter.user = filter.user || '';
    filter.path = filter.path || '';
    filter.time = filter.time || '';

    for (name in set) {
        user = set[name];
        if (name.indexOf(filter.user) >= 0) {
            console.log('checking', user);
            pathIsValid = user.path.indexOf(filter.path) >= 0;
            timeIsValid = user.time.indexOf(filter.time) >= 0;
            if (pathIsValid && timeIsValid) {
                results[name] = user;
            }
        }
    }

    return results;
};
