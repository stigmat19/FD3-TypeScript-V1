var Color;
(function (Color) {
    Color[Color["BLACK"] = 0] = "BLACK";
    Color[Color["YELLOW"] = 1] = "YELLOW";
    Color[Color["RED"] = 8] = "RED";
    Color[Color["GREEN"] = 9] = "GREEN";
})(Color || (Color = {}));
;
var col1 = Color.BLACK;
console.log(col1);
console.log(Color.YELLOW);
console.log(Color.GREEN);
console.log(Color[1]);
//# sourceMappingURL=app.js.map