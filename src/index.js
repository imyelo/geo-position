var Promise = require('bluebird');
var debug = require('debug')('@yelo/geo-position');
var platform = require('./platform');
var mqqbrowser = require('./mqqbrowser');

function getPositionByStandard (options) {
  debug('get position by standard');
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var coords = position.coords;
      resolve({
        latitude: coords.latitude || 0,
        longitude: coords.longitude || 0
      });
    }, reject, options);
  });
};

var position = module.exports = function (options) {
  options = options || {};
  if (!platform.isMQQBrowser()) {
    return getPositionByStandard(options);
  }
  return mqqbrowser().timeout(options.timeout || 5 * 1000).catch(function (err) {
    debug('error: ' + err);
    return getPositionByStandard(options);
  });
};
