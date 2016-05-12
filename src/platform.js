exports.isMQQBrowser = function isMQQBrowser () {
  return /MQQBrowser/.test(window.navigator.userAgent);
}

exports.isIOS = function isIOS () {
  return /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
}
