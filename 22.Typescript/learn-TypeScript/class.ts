// Class Car
class Car {
    brand: string;
    colors: string[];

    constructor(brand: string, colors: string[]) {
        this.brand = brand;
        this.colors = colors;
    }

    description(){
        return `This car is a ${this.brand} and the color is ${this.colors.join(',')}`;
    }
}

const Esemka = new Car('Esemka', ['red', 'blue', 'green']);
console.log(Esemka.description()); // This car is a Esemka and the color is red,blue,green