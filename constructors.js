class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}
const jeep = new Car('Jeep', 'SUV', 2017, 'true')
console.log({jeep});
// Rental class
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = new Date(rentalStartDate);
        this.rentalEndDate = new Date(rentalEndDate);
    }
    calculateRentalDuration() {
        const  differenceInMilliseconds = this.rentalEndDate - this.rentalStartDate;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        return differenceInDays;
    }
}
const uber = new Rental ('Audi', 'Maryann', "2024-4-12", "2024-6-6")
console.log({uber});












