class MovingAvg {
    private sum: number;
    private hist: number[];
    private histI: number = 0;
    readonly size: number;

    constructor(size: number, fill: number = 0) {
        this.size = size;
        this.hist = new Array(size).fill(fill);
        this.sum = fill * size;
    }

    push(num: number) {
        this.sum = this.sum - this.hist[this.histI] + num;

        this.hist[this.histI++] = num;
        this.histI %= this.size;
    }

    get avg(): number {
        return this.sum / this.size;
    }
}

module.exports = MovingAvg;