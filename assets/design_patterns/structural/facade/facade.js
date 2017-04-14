
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
  constructor(cores = 10, threads = 20, freq = 3.00, cache = 25) {
    this.cores = cores;
    this.threads = threads;
    this.freq = freq;
    this.cache = cache;
  }

  freeze() {
    console.log('Freeze');
  }

  jump(position) {
    console.log(`Jumping to ${position}`);
  }

  execute() {
    console.log('Executing');
  }
}

class Memory {
  constructor(size = 16) {
    this.capacity = size;
  }

  load(position, data) {
    console.log(`Loading ${data} at ${position}`);
  }
}

class HardDrive {
  constructor(capacity = 500, transferRate = 1000) {
    this.capacity = capacity;
    this.transferRate = transferRate;
  }

  read(lba, size) {
    console.log(`Reading ${lba} at ${size}`);
  }
}

// facade
class Computer {
  constructor(specs) {
    const { cores, threads, freq, cache, capacity, size, transferRate } = specs;

    this.processor = new CPU(cores, threads, freq, cache, capacity);
    this.ram = new Memory(size);
    this.hd = new HardDrive(capacity, transferRate);
  }

  start(config) {
    const { bootAddress, bootSector, sectorSize } = config;

    this.processor.freeze();
    this.ram.load(bootAddress, this.hd.read(bootSector, sectorSize));
    this.processor.jump(bootAddress);
    this.processor.execute();
  }
}

// client
const specs = {
  cores: 15,
  threads: 25
};

const config = {
  bootAddress: '00.11.22.33.44',
  bootSector: 'main',
  sectorSize: 10
};

const computer = new Computer(specs);
computer.start(config);

export default Computer;
