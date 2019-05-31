# moving-avg

# Usage
```js
const MovingAvg = require('./index');

const mAvg = new MovingAvg(10, 1);

mAvg.push(2);
console.log(mAvg.avg); // 1.1
```

