var Promise = require('bluebird');
var platform = require('../platform');

module.exports = (function () {
  if (!platform.isMQQBrowser() || platform.isIOS()) {
    return function () {
      return Promise.reject(new Error('cannot execute android bridge on an unavailable platform'));
    };
  }

  var ANDROID_CALLBACK_PREFIX = 'X5MTT_CB_';

  return function getGeolocation () {
    return new Promise(function (resolve, reject) {
      var id = +new Date();
      var success = ANDROID_CALLBACK_PREFIX + id + '_SUCCESS';
      var fail = ANDROID_CALLBACK_PREFIX + id + '_FAIL';
      window[success] = resolve;
      window[fail] = reject;
      window.x5mtt.getGeolocation(JSON.stringify({
        cbSuccess: success,
        cbError: fail
      }));
    });
  };
})();
