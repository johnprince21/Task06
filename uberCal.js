class Uber {
    distance = 15;
    wait = 10;
    consructor(distance, wait) {
        this.distance = distance;
        this.wait = wait;
    }
    get distance() { return this.distance; }
    set distance(value) { this.distance = value; }
    get wait() { return this.wait; }
    set wait(value) { this.wait = value; }
calculatePrice(dis) {
        //1km = Rs.12
        //min = Rs.75
        let min = 90;
        this.distance = dis;
        let price = dis * 6;
        let res = 0;
        if (min > price) {
            res = min;
        } else {
            res = price;
        }
        console.log(res);
        return res;
}
    calculateWait(w) {
        let res = 0;
this.wait = w;
        let result = 0;
        //30min wait is Rs.100
        if (w > 15 && w < 30) {
            result = 50;
}
        if (w < 15) {
            result = 0;
        }
        if (w > 30) {
            result = Math.floor(w / 30);
            res = result * 100;
}
        console.log(res);
        return res;
    }
}
let raid = new Uber(300, 45);
let p1 = (raid.calculatePrice(300))
let w1 = (raid.calculateWait(45))
console.log(p1 + w1);