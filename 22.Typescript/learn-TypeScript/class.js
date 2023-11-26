// Class Car
var Car = /** @class */ (function () {
    function Car(brand, colors) {
        this.brand = brand;
        this.colors = colors;
    }
    Car.prototype.description = function () {
        return "This car is a ".concat(this.brand, " and the color is ").concat(this.colors.join(','));
    };
    return Car;
}());
var Esemka = new Car('Esemka', ['red', 'blue', 'green']);
console.log(Esemka.description()); // This car is a Esemka and the color is red,blue,green
