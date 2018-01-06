var Car = /** @class */ (function () {
    function Car(_num) {
        this.wheels = 4; // описываем свойство и инициализируем его
        // свойства должны быть явно описаны
        // а здесь - присваивание ранее описанному свойству
        this.num = _num;
    }
    Car.prototype.show = function () {
        console.log('car numb=' + this.num + ' wheels=' + this.wheels);
    };
    return Car;
}());
var car1 = new Car("2870-ОГО");
car1.show();
//# sourceMappingURL=app.js.map