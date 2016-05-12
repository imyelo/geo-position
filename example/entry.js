var position = require('..');

document.getElementById('button').onclick = function () {
  position().then(function (coords) {
    alert(coords.latitude + ':' + coords.longitude);
  }, alert);
};
