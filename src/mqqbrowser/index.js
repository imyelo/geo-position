var Promise = require('bluebird');
var debug = require('debug')('@yelo/geo-position');
var load = require('load-script');
var platform = require('../platform');

module.exports = function getGeolocation () {
  debug('get position by mqqbrowser');

  if (!platform.isMQQBrowser()) {
    return function () {
      return Promise.reject(new Error('cannot execute mqqbrowser bridge on an unavailable platform'));
    };
  }

  return new Promise(function (resolve, reject) {
    load('http://jsapi.qq.com/get?api=app.getGeoLocation', function (err, script) {
      if (err) {
        return reject(err);
      }

      browser.app.getGeoLocation(function (position) {
        if (position.ret !== 'true') {
          return reject(new Error('cannot get geo-location by x5'));
        }
        resolve({
          latitude: position.latitude || 0,
          longitude: position.longitude || 0
        });
      }, reject);
    });
  });
};
