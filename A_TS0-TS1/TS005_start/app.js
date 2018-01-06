var elem = this.document.getElementById("content");
var Car = /** @class */ (function () {
    function Car(_num, _price) {
        this.num = _num;
        this.price = _price;
    }
    Car.prototype.getInfo = function () {
        return 'car num=' + this.num + ' price=' + this.price;
    };
    return Car;
}());
var car1 = new Car("2870 ОГО", 1200);
elem.innerHTML = "Информация о машинке: " + car1.getInfo();
//# sourceMappingURL=app.js.map