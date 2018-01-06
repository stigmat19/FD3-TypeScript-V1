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
        var _this = _super.call(this) || this;
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
        _super.prototype.start.call(this, _speed);
        this.setSail(true);
    };
    Ship.prototype.stop = function () {
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
var ship1 = new Ship();
console.log(car1 instanceof Transp);
console.log(car1 instanceof Car);
console.log(ship1 instanceof Transp);
console.log(ship1 instanceof Ship);
function trainer(tr) {
    for (var testnum = 0; testnum < 1000; testnum++) {
        tr.start(100);
        tr.stop();
    }
    console.log('training finished');
}
// функция trainer ожидает объект класса Transp
// но мы можем передать также объект любого класса-потомка
trainer(car1);
trainer(ship1);
// переменной класса-предка можно присвоить 
// объект любого класса-потомка
var trcar = car1;
var trship = ship1;
// у этих объектов можно работать теперь 
// только с теми свойствами и методами, которые есть у Transp
// переменной класса-потомка нельзя присвоить 
// объект класса-предка напрямую
// let car2:Car=trcar; - ошибка
// let ship2:Ship=trship; - ошибка
// присвоить можно только с явным преобразованием
var car3 = trcar;
var ship3 = trship;
// теперь это "честные" объекты классов Car и Ship
car3.show();
ship3.show();
//# sourceMappingURL=app.js.map