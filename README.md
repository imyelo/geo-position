# @yelo/geo-position
> get coords of geo-position from browser, compatible with QQ-Browser (mobile)

## Install
```
npm i --save @yelo/geo-position
```


## Usage
```
var position = require('@yelo/geo-position');

position().then(function (coords) {
  console.log(coords);
}, function (err) {
  console.error(err);
});
```


## API
### position([options])
get coords of geo-position, will return a Promise
```
position({
  maximumAge: 10 * 60 * 1000,
  timeout: 30 * 1000
}).then(function (coords) {
  console.log(coords);
}, function (err) {
  console.error(err);
}));
```


## Example
[https://imyelo.github.io/geo-position/](https://imyelo.github.io/geo-position/)


## License
THe MIT License
