var Promise = require('bluebird');
var platform = require('./platform');
var mqqbrowser = require('./mqqbrowser');

function getPositionByStandard (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var coords = position.coords;
      resolve({
        latitude: coords.latitude || 0,
        longitude: coords.longitude || 0
      });
    }, reject, options || {});
  });
};

var position = module.exports = function (options) {
  if (!platform.isMQQBrowser()) {
    return getPositionByStandard(options);
  }
  return (platform.isIOS() ? mqqbrowser.ios() : mqqbrowser.android()).catch(function (err) {
    alert(err);
    return getPositionByStandard(options);
  });
};
