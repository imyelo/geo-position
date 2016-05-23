var position = require('..');

document.getElementById('button').onclick = function () {
  position().then(function (coords) {
    alert(JSON.stringify(coords));
  }, function (err) {
    alert(err.message);
  });
};

// /**
//  - 通过js api来获取地理位置信息
//  - @return {[type]} [description]
//  */
// function getGps(suc, err) {
//     try {
//         browser.app.getGeoLocation(function(pos) {
//             if (pos.ret == 'true') {          //调用成功
//                 suc(pos);
//             } else {
//                 getGpsByH5(suc, err);
//             }
//         }, function () {
//             getGpsByH5(suc, err);
//         });
//     } catch (ex) {
//         getGpsByH5(suc, err);
//     }
// }

// /**
//  - 通过H5来获取地理位置信息
//  - @return {[type]} [description]
//  */
// function getGpsByH5 (suc, err) {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(pos) {
//             if (pos.coords) {
//                 suc && suc(pos.coords);
//             } else {
//                 err && err();
//             }
//         }, function (ex) {
//             err && err();
//         });
//     } else {
//         err && err();
//     }
// }

// getGps(function (result) {
//   alert('success');
//   alert(JSON.stringify(result, null, 2));
// }, function () {
//   alert('err');
// });
