
/**
* Facade
*
* A facade is an object that provides a simplified interface to a larger body of
* code, such as a class library. For example, jQuery is essentially a facade over
* the DOM and JS, it simplifies both. It typically involves a single wrapper class
* that contains a set of members required by client. These members access the system
* on behalf of the facade client and hide the implementation details.
*
* The facade pattern is typically used when:
*
* - a simple interface is required to access a complex system,
* - a system is very complex or difficult to understand,
* - an entry point is needed to each level of layered software, or
* - the abstractions and implementations of a subsystem are tightly coupled.
*
* Facades don't just have to be used on their own, however. They can also be integrated
* with other patterns such as the Module pattern.
*
*     doSomething()
*
*     client 1             package1
*              ↘         ↗
*                 facade → package2
*              ↗         ↘
*     client 2             package3
*
* - The facade class abstracts Packages 1, 2, and 3 from the rest of the application.
* - The objects are using the Facade Pattern to access resources from the Packages.
*
* A client calls doSomething() method on the facade interface. This method actually
* consumes 3 separate more complex packages and handles all the logic for the client.
*/

// complex parts
class CPU {
  freeze() {...}
  jump(position) {...}
  execute() {...}
}

class Memory {
  load(position, data) {...}
}

class HardDrive {
  read(lba, size) {...}
}

// facade
class ComputerFacade {
  constructor() {
    this.processor = new CPU();
    this.ram = new Memory();
    this.hd = new HardDrive();
  }

  start() {
    this.processor.freeze();
    this.ram.load(BOOT_ADDRESS, this.hd.read(BOOT_SECTOR, SECTOR_SIZE));
    this.processor.jump(BOOT_ADDRESS);
    this.processor.execute();
  }
}

// client
const computerFacade = new ComputerFacade();
computerFacade.start()
