// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';



// DONE: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // DONE: Declare properties of the Truck class
  // DONE: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;


  // DONE: Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // DONE: The constructor should call the constructor of the parent class, Vehicle
    super(); //INITIALIZING PARENT'S PROPERTIES AND METHODS

    // DONE: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (!wheels.length) {
      const wheel1 = new Wheel(18, 'Goodyear');
      const wheel2 = new Wheel(18, 'Goodyear');
      const wheel3 = new Wheel(18, 'Goodyear');
      const wheel4 = new Wheel(18, 'Goodyear');

      wheels.push(wheel1, wheel2, wheel3, wheel4);
    }

    // DONE: The constructor should initialize the properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;

  }



  // DONE: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // DONE: Get the make and model of the vehicle if it exists
    if (vehicle.make && vehicle.model) {
      const make = vehicle.make;
      const model = vehicle.model;
    }
    // DONE: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      // DONE: If it is, log that the vehicle is being towed
      console.log(`Your ${vehicle.make} ${vehicle.model} is being towed!`);
    } else {
      // DONE: If it is not, log that the vehicle is too heavy to be towed
      console.log(`Your ${vehicle.make} ${vehicle.model} is too heavy and cannot be towed.`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // DONE: The method should call the printDetails method of the parent class
    super.printDetails();

    // DONE: The method should log the details of the Truck
    // DONE: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`towingCapacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels}`);
  }
}

// Export the Truck class as the default export
export default Truck;
