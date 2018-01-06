var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(_numb) {
        var _this = 
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        _super.call(this) || this;
        _this.numb = _numb;
        return _this;
    }
    Car.prototype.beep = function () {
        console.log("car " + this.numb + " beeep!");
    };
    Car.prototype.show = function () {
        console.log("car numb=" + this.numb + " speed=" + this.speed);
    };
    return Car;
}(Transp));
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship() {
        var _this = _super.call(this) || this;
        _this.sailState = false;
        return _this;
    }
    Ship.prototype.setSail = function (_state) {
        this.sailState = _state;
    };
    Ship.prototype.start = function (_speed) {
        // переопределённый метод ОБЫЧНО должен вызвать 
        // метод класса-предка, т.е. РАСШИРИТЬ его новым поведением
        _super.prototype.start.call(this, _speed);
        this.setSail(true);
    };
    Ship.prototype.stop = function () {
        // переопределённый метод ОБЫЧНО должен вызвать 
        // метод класса-предка, т.е. РАСШИРИТЬ его новым поведением
        _super.prototype.stop.call(this);
        this.setSail(false);
    };
    Ship.prototype.show = function () {
        console.log("ship sailState=" + this.sailState
            + " speed=" + this.speed);
    };
    return Ship;
}(Transp));
var car1 = new Car("2870-ОГО");
car1.show();
car1.start(100);
car1.show();
car1.stop();
car1.show();
car1.beep();
var ship1 = new Ship();
ship1.show();
ship1.setSail(true);
ship1.show();
ship1.setSail(false);
ship1.show();
ship1.start(100);
ship1.show();
ship1.stop();
ship1.show();
//# sourceMappingURL=app.js.map