module.exports = function () {
    var filter = {};
    $('input').each(function () {
        var type = this.getAttribute('data-type');
        filter[type] = this.value;
    });
    return filter;
};
