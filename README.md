# moving-avg

## Usage
```js
const MovingAvg = require('moving-avg');

const mAvg = new MovingAvg(10, 1);

mAvg.push(2);
console.log(mAvg.avg); // 1.1
```

