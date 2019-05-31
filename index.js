class MovingAvg {
    constructor(size, fill = 0) {
        this.histI = 0;
        this.size = size;
        this.hist = new Array(size).fill(fill);
        this.sum = fill * size;
    }
    push(num) {
        this.sum = this.sum - this.hist[this.histI] + num;
        this.hist[this.histI++] = num;
        this.histI %= this.size;
    }
    get avg() {
        return this.sum / this.size;
    }
}
module.exports = MovingAvg;
//# sourceMappingURL=index.js.map