var fs = require('fs'),
    sys = require('util');

exports.get = function(fileName, key) {
    var configJson = {};
    try {
        var str = fs.readFileSync(fileName, 'utf8');
        configJson = JSON.parse(str);
    } catch (ex) {
        sys.debug(ex);
    }
    return configJson[key];
}
