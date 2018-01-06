var car1 = {
    num: '2870-ОГО',
    model: 'Волга',
    show: function (prefix) {
        console.log(prefix + " " + this.num + " " + this.model);
        console.log(prefix + " " + this.price);
    }
};
car1.show("INFO #1:");
var car2 = {
    num: '2870-ОГО',
    model: 'Волга',
    show: function (prefix) {
        console.log(prefix + " " + this.num + " " + this.model);
        console.log(prefix + " " + this.price);
    }
};
car2.show("INFO #2:");
var car3 = {
    num: '2870-ОГО',
    model: 'Волга',
    show: function (prefix) {
        console.log(prefix + " " + this.num + " " + this.model);
        //console.log(prefix+" "+this.price); - ошибка
    }
};
car3.show("INFO #3:");
//# sourceMappingURL=app.js.map