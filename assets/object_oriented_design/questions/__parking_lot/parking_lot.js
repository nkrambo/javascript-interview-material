
/**
* Parking Lot
*
* Design a parking lot using object-oriented principals.
*/

class ParkingLot {
  constructor(name, address, ) {
    this.isFull = false;
    this.isEmpty = false;
    this.employees = [];
    this.floors = [];
    this.currentCapacity = 0;
    this.totalCapcity = 0;
  }

  // add staff member
  addStaff(member) {
    this.employees.push(member);
  }


  // car in
  carIn() {
    // issue ticket
    // mark spot taken
  }

  // car out
  carOut(ticket) {
    // charge
    // free spot
  }

  calculateFee(time) {
    // under 1 hr is free in non-peak
    // peak times are double rate
    // all day is discounted (full 8 hrs)
  }

}

class Car {
  constructor(model, licenseID) {

  }
}

class ParkingSpace {
  constructor(type) {
    this.type = type;
  }
}

class Floor {
  constructor() {

  }
}

class Employee {
  constructor(firstName, lastName, dob, role) {
    this.id = new Date().getTime();
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.role = role;
  }

}

class Customer {
  constructor(firstName, lastName, duration, parkID, licenseID) {
    this.id = new Date().getTime();
    this.firstName = firstName;
    this.lastName = lastName;
    this.duration = duration;
    this.parkID = parkID;
    this.licenseID = licenseID;
    this.parked = false;
    this.log = new Log();
  }

  getExpiryDate() {

  }

  // ask to renew 7 days before expiry
}

class Log {
  constructor() {
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry);
  }
}


export default ParkingLot;
