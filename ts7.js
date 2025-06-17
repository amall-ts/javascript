
class Car {
    constructor(name, company) {
        this.name = name
        this.company = company
    }

    info() {
        console.log(`Car name is ${this.name}, Company:${this.company}`);

    }
}

let cars = new Car("swift", "suzuki")

cars.info()

           