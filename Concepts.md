# Basic computer science concepts

This file briefly goes through basic computer science concepts that you might get asked on an interview.

## Table of Contents

- [Operating systems](#operating-systems)
- [Computer Networking](#computer-networking)
- [Design Patterns](#design-patterns)
- [Solid Principles](#solid-principles)
- [Grasp Principles](#grasp-principles)

## Operating systems

Know about locks and mutexes and semaphores and monitors and how they work. Know about deadlock and livelock and how to avoid them. Know what resources a processes needs, and a thread needs, and how context switching works, and how it's initiated by the operating system and underlying hardware. Know a little about scheduling.

### Deadlock

A deadlock is a situation in which processes block each other due to resource acquisition and none of the processes makes any progress as they wait for the resource held by the other process.

In an operating system, a deadlock occurs when a process or thread enters a waiting state because a requested system resource is held by another waiting process, which in turn is waiting for another resource held by another waiting process. If a process remains indefinitely unable to change its state because resources requested by it are being used by another process that itself is waiting, then the system is said to be in a deadlock.

![Deadlock](/images/deadlock.png)

### Livelock

Livelock is a deadlock-like situation in which processes block each other with a repeated state change yet make no progress.
The difference between a deadlock is that processes block each other and wait indefinitely but they change their resource state continuously. The notable point is that the resource state change has no effect and does not help the processes make any progress in their task.
A real-world example of livelock occurs when two people make a telephone call to each other and both find the line is busy. Both gentlemen decide to hang up and attempt to call after the same time interval. Thus, in the next retry too, they ended up in the same situation. This is an example of a live lock as this can go on forever.

### Starvation

Starvation is the outcome of a deadlock, livelock, or as a result of continuous resource denial to a process, when a process is unable to gain regular access to the shared resources it requires to complete a task and thus, unable to make any progress.
One of the possible solutions to prevent starvation is to use a resource scheduling algorithm with a priority queue that also uses the aging technique.

### Mutex

A Mutex is a Mutually exclusive flag. Is like a token you need to be able to use the resources and its exclusive, only one can have it to use the resources.

## Computer Networking

Is the way computers exchange information around the world, its architecture is abstracted in 7 layers based on the Open Systems Interconnection model (OSI).

### 7. Application

HTTP/HTTPS -> Web Surfing
FTP -> File Transfer
SMTP -> Emails
Telnet -> Virtual terminals

### 6. Presentation

Translation -> Data compression -> Encryption/Decryption
SSL (Secure Sockets Layer)

### 5. Session

Enable sending and receiving data -> API(Application Programming interfaces)
Authentication + Authorization + Session management

### 4. Transport

Reliability of the communication through:
Segmentation + Flow Control + Error control(checksum)
TCP (Transmission Control Protocol) -> Connection-oriented Transmission
UDP (User Datagram Protocol) -> Connectionless Transmission

### 3. Network

Works for the transmission of packages between one computer and another.
Logical Addressing (IPv4/IPv6) + Routing + Path determination

### 2. Data link

Access the media(framing) +
Controls how data is place and received from the media (Media Acces Control - MAC)

### 1. Physical

Converts bits into signals(light on )

### Resources - Computer Networking

[OSI summary](https://www.youtube.com/watch?v=keeqnciDVOo)
[OSI in deep](https://www.youtube.com/watch?v=vv4y_uOneC0)

## Design patterns

### Creational patterns

Specifies how objects should be created.

#### Singleton

Restricts the instantiation of a class to one "single" instance and provide a global point of access to it.
![Singleton](/images/singleton.png?raw=true "Singleton")
Example: A Settings instantiation

```typescript
class Settings {
    static instance: Settings;
    public readonly mode = 'dark';

    // prevent new with private constructor
    private constructor(){}

    static getInstance(): Settings {
        if(!Settings.instance){
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }
}
const settings = new Settings() // throws error
const settings = Settings.getInstance();
```

However, in JavaScript we have global data an objects are passed around by reference, so we can actually implement the singleton pattern by simply creating a global object:

```typescript
const settings = {
    dark: 'true'
}
```

#### Factory

Creating objects without having to specify the exact class of the object that will be created.
![Factory](/images/factory.png?raw=true "Factory")
Example: Factory of buttons that creates buttons for Android and iOS depending on the platform you are, insted of doing and if case everytime you create a new button.

```typescript
class IOSButton {}
class AndroidButton {}

// Without factory
const button1 = os === 'ios' ? new IOSButton() : new AndroidButton()
const button2 = os === 'ios' ? new IOSButton() : new AndroidButton()

// With factory
class ButtonFactory{
    createButton(os: string): IOSButton | AndroidButton {
        if (os === 'ios') {
            return new IOSButton();
        }
        else{
            return new AndroidButton();
        }
    }
}
const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);
```

#### Prototype

Specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum.
Prototype allows objects to be clones of other objects, rather then extended via inheritance.
Is an alternative way to implement inheritance, as these can result messy if we have a lot of classes, also allows to specify which objects to create at run-time.
![Prototype](/images/prototype.png?raw=true "Prototype")

```typescript
const zombie = {
  eatBrains() {
    return 'yum 🧠';
  }
}

const chad = Object.create(zombie, { name: { value: 'chad'} });

chad.__proto__;
Object.getPrototypeOf(chad);

const babyChad = Object.create(chad, { baby: { value: true } });
```

#### Builder

The builder pattern is a creational design pattern that lets you construct complex objects step by step. It JavaScript, we can achieve this with method chaining.
![Builder](/images/builder.png?raw=true "Builder")

```typescript
class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut?: boolean
  ) {}

  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addKraut() {
    this.kraut = true;
    return this;
  }
}

const myLunch = new HotDog('gluten free')
  .addKetchup()
  .addMustard()
  .addKraut();
```

### Structural patterns

Identifying a simple way to realize relationships between objects.

#### Facade

Defines a simplified higher-level interface of an existing interface to ease usage for common tasks.
It is often to used to hide low-level details of a subsystem.
Watch out for oversimplification and oververticalization(so specific to a single use case that is no longer for general use).

![Facade](/images/facade.png?raw=true "Facade")

```typescript
class PlumbingSystem {
  // low evel access to plubming system
  setPressure(v: number) {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  // low evel access to electrical system
  setVoltage(v: number) {}
  turnOn() {}
  turnOff() {}
}

class House {

  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.electrical.setVoltage(120);
    this.electrical.turnOn();
    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }

  public shutDown() {
    this.plumbing.turnOff();
    this.electrical.turnOff();
  }

}

const client = new House();
client.turnOnSystems();
client.shutDown();
```

#### Proxy

The proxy pattern lets you provide a substitute or placeholder for another object to control access to it.
They can be use to handle the use of objects without directly changing the original object, instead handling the change with a personalized logic.
They are also commonly used when you have a very large object that would be expensive to duplicate in memory.
An example would be an ATM implementation, where the ATM might hold proxy objects for bank information that exists in the remote server.

![Proxy](/images/proxy.png?raw=true "Proxy")

```typescript
const original = { name: 'jeff' };

const reactive = new Proxy(original, {
  get(target, key) {
    console.log('Tracking: ', key);
    return target[key];
  },
  set(target, key, value) {
    console.log('updating UI...');
    return Reflect.set(target, key, value);
  },
});

reactive.name; // 'Tracking: name'

reactive.name = 'bob'; // 'updating UI...'
```

#### Adapter

Convert the interface of a class into another interface clients expect.
An adapter lets classes work together that could not otherwise because of incompatible interfaces.
It is often used to make existing classes work with others without modifying their source code. (Legacy systems)

![Adapter](/images/adapter.png?raw=true "Adapter")

#### Bridge

Decouple an abstraction from its implementation allowing the two to vary independently.
The bridge uses encapsulation, aggregation, and can use inheritance to separate responsibilities into different classes.
Allows you to create a product that is usable by a wide variety of costumers and a wide variety of situations.
Allowing different implementations to be added in the future.

![Bridge](/images/bridge.png?raw=true "Bridge")

#### Composite

Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.
For example AWT Java library, where you have components that can be buttons, labels, text components... that at the same time has a textField, textArea...

![Composite](/images/composite.png?raw=true "Composite")

### Behavioral patterns

Identifying communication patterns between objects

#### Strategy

Enables selecting an algorithm at runtime.
Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use.
Example: Pay with credit card, debit card, bitcoin, cash...

![Strategy](/images/strategy.png?raw=true "Strategy")

```typescript
interface PayStrategy {
    pay(amount: number): boolean;
}

class CreditCardPayment implements PayStrategy {
    pay(amount: number): boolean {
        // ... code to charge with credit card
        console.log(`Charging with credit card ${amount}`);
        return true;
    }
}

class DebitCardPayment implements PayStrategy {
    pay(amount: number): boolean {
        // ... code to charge with debit card
        console.log(`Charging with debit card ${amount}`);
        return true;
    }
}

// So now we are totally able to set up the strategy that we want to use
let strategy: PayStrategy = null
if (creditCard){
    strategy = new CreditCardPayment()
}
else{
    strategy = new DebitCardPayment()
}
strategy.pay(100)
```

#### Observer

The observer pattern is used to notify a set of interested parties when a state change occurs.
Subject -> Observers
Publish/Suscribe
The rxjs library is a popular implementation of this pattern.

![Observer](/images/observer.png?raw=true "Observer")

```typescript
import { Subject } from 'rxjs';

const news = new Subject();

const tv1 = news.subscribe(v => console.log(v + 'via Den TV'));
const tv2 = news.subscribe(v => console.log(v + 'via Batcave TV'));
const tv3 = news.subscribe(v => console.log(v + 'via Airport TV'));

news.next('Breaking news: ');
news.next('The war is over ');

tv1.unsubscribe();
```

#### Mediator

Defines a separate (mediator) object that encapsulates the interaction between a set of objects.
The mediator provides a middle layer between objects that communicate with each other. This pattern implemented frequently in JavaScript libaries via plugin systems (like Webpack) and middleware (like Express).

![Mediator](/images/mediator.png?raw=true "Mediator")

```typescript
import express from 'express';
const app = express();

// Middleware logic
function mediator(req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

app.use(mediator);

// Mediator runs before each route handler
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About');
});
```

#### State

A clean way for an object to partially change its type at runtime.
Allows an object to alter its behavior when its internal state changes.
The state pattern is used to encapsulate the state of an object so that it can be changed and accessed independently of the object.
In JavaScript, finite state machines are sometimes used to maintain a predictable flow of data in an application via libraries like XState.

![State](/images/state.png?raw=true "State")

```typescript
//Without state pattern
class Human {
    think(mood){
        switch (mood){
            case 'happy':
                return 'I am happy 🙂';
            case 'sad':
                return 'I am sad 🙁';
            default:
                return 'I am neutral';
        }
    }
}

// With state pattern
interface State {
  think(): string;
}

class HappyState implements State {
  think() {
    return 'I am happy 🙂';
  }
}

class SadState implements State {
  think() {
    return 'I am sad 🙁';
  }
}


class Human {
  state: State;

  constructor() {
    this.state = new HappyState();
  }

  changeState(state) {
    this.state = state;
  }

  think() {
    return this.state.think();
  }
  
}

const human = new Human();
console.log(human.think());
human.changeState(new SadState());
console.log(human.think());
```

#### Iterator

The iterator pattern is used to traverse a collection of elements.
Iterators are used to access the elements of an aggregate object sequentially without exposing its underlying representation.
Most programming languages provide abstrations for iteration like the for loop.

![Iterator](/images/iterator.png?raw=true "Iterator")

```typescript
function range(start: number, end: number, step=1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start+step;
        return { value: start, done: false };
      }
      return { done: true, value: end }; 
    }
  }
}

for (const n of range(0, 100, 5)) {
  console.log(n);   
}
```

#### Command

An object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.
Example: A Progress bar.
Suppose a program has a sequence of commands that it executes in order. If each command object has a getEstimatedDuration() method, the program can easily estimate the total duration. It can show a progress bar that meaningfully reflects how close the program is to completing all the tasks.

![Command](/images/command.png?raw=true "Command")

### Resources - Design Patterns

[Design Patterns](https://www.youtube.com/watch?v=tv-_1er1mWI)

## SOLID principles

### S -> Single Responsibility Principle

A class should have only one responsibility.

### O -> Open-Closed Principle

A software module (it can be a class or method ) should be open for extension but closed for modification.

### L -> Liskov Substitution Principle

Derived classes must be substitutable for their base classes.
Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.

### I -> Interface Segregation Principle

Many client-specific interfaces are better than one general-purpose interface.

### D -> Dependency Inversion Principle (DIP)

Depend upon abstractions, not concretions.
Program to an interface, not to an implementation.
High-level modules should not depend upon low-level modules. Both should depend upon abstractions.
Dont connect concrete implementations, but abstractions(interfaces)

### Resources - SOLID principles

[SOLID principles](https://www.youtube.com/watch?v=2X50sKeBAcQ)

## GRASP principles

### Information Expert

You should assign a responsibility to the class which has the information necessary to fulfill that responsibility.

### Creator

Helps to decide which class should be responsible for creating a new instance of a class.
According to Larman, a class, B, should be given the responsibility to create another class, A, if any of the following conditions are true:

a) B contains A
b) B aggregates A
c) B has the initializing data for A
d) B records A
e) B closely uses A

### Controller

The first purpose of the Controller is to encapsulate a system operation.
The second purpose of the Controller is to provide a layer between the UI and the Domain Model.

### Indirection

Problem: Where to assign responsibility, to avoid direct coupling between two (or more) things? How to de-couple objects so that low coupling is supported and reuse potential remains higher?
Solution: Assign the responsibility to an intermediate object to mediate between other components or services so that they are not directly coupled.

### Low coupling

This principle states that one should assign a responsibility so that the dependency between the classes remains low.

### High cohesion

Attempts to keep objects appropriately focused, manageable and understandable.

### Polymorphism

Problem: How to handle alternatives based on type? How to create pluggable software components?
Solution: When related alternatives or behaviors vary by type (class), assign responsibility for the behavior—using polymorphic operations—to the types for which the behavior varies. (Polymorphism has several related meanings. In this context, it means "giving the same name to services in different objects".

### Protected variations

The protected variations pattern protects elements from the variations on other elements (objects, systems, subsystems) by wrapping the focus of instability with an interface and using polymorphism to create various implementations of this interface.

### Pure fabrication

A pure fabrication is a class that does not represent a concept in the problem domain, specially made up to achieve low coupling, high cohesion, and the reuse potential thereof derived.