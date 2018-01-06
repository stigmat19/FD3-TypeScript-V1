var Transp = /** @class */ (function () {
    function Transp() {
        this.speed = 0;
    }
    Transp.prototype.start = function (_speed) {
        this.speed = _speed;
    };
    Transp.prototype.stop = function () {
        this.speed = 0;
    };
    return Transp;
}());
var transp1 = new Transp;
console.log(transp1 instanceof Transp);
console.log(transp1 instanceof String);
function trainer(tr) {
    for (var testnum = 0; testnum < 1000; testnum++) {
        tr.start(100);
        tr.stop();
    }
    console.log('training finished');
}
trainer(transp1);
//# sourceMappingURL=app.js.map