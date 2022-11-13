"use strict";
//! Lexical this
/* class Person {
  private _age: number;

  constructor(_age: number) {
    this._age = _age;
  }

  growOld() {
    this._age++;
  }

  getAge() {
    return this._age;
  }
}

const person = new Person(0);
const growOld = person.growOld;
growOld()
console.log(`Age: ${person.getAge()}`) */
//! readonly modifier
/* type Point = {
  readonly x: number;
  readonly y: number;
};
const point: Point = {
  x: 0,
  y: 0,
}; */
//point = { x: 1, y: 1 };
//point.x = 1;
//point.y = 1; //Cannot assign to 'y' because it is a read-only property.
/* class Animal {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}
const sheep = new Animal('Sheep');
console.log(sheep.name); */
//! Union types
/**
 * @param input a command or an array of commands
 * @returns a single trimmed string
 */
/* function formatCommandLine(input: string | string[]) {
  let line = "";

  if (typeof input === "string") {
    line = input.trim();
  } else {
    line = input.map((x: string) => x.trim()).join(" ");
  }

  return line;
}

console.log(formatCommandLine('hello '))
console.log(formatCommandLine(['hello ', ' world '])) */
// ! Union Types
//type Padding = number | string;
/**
 * Takes a string and adds `padding` to the left
 * If `padding` is a number, then that number of spaces is added to the left
 * If `padding` is a string, then `padding` is appended to the left
 */
/* function padLeft(value: string, padding: Padding) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expected number of string, got ${padding}.`);
}

console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", " "));
console.log(padLeft("Hello world", "---")); */
//console.log(padLeft('Hello world', false))
//! Literal Types
/* type Direction = 'North' | 'East' | 'South' | 'West';
let direction: Direction

direction = 'North';
direction = 'West'

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1) as DiceValue
}

if(rollDice() === 4) {
    throw new Error('Not possible!')
} */
// ! Type Narrowing
/* class Cat {
  meow() {
    console.log("meow");
  }
}

class Dog {
  bark() {
    console.log("woof");
  }
}

type Animal = Cat | Dog;

function speak(animal: Animal) {
  if (animal instanceof Cat) {
    animal.meow();
  }
  if (animal instanceof Dog) {
    animal.bark();
  }
}

type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;
function area(shape: Shape) {
  if ("size" in shape) {
    return shape.size * shape.size;
  }
  if ("width" in shape) {
    return shape.width * shape.height;
  }
}
console.log(area({ size: 2 }));
console.log(area({ width: 2, height: 3 }));
 */
//! Discriminated Unions
/* type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  kind: "circle";
  radius: number;
};

type Shape = Square | Rectangle | Circle;

function area(shape: Shape) {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  }
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}
console.log(area({ kind: "square", size: 2 }));
console.log(area({ kind: "rectangle", width: 2, height: 3 }));
console.log(area({ kind: "circle", radius: 3 })); */
// ! Class Parameter Properties
/* class Person {
  constructor(public name: string, public age: number) {}
}

const adam = new Person("Adam", 120000);
console.log(adam.name, adam.age); */
//! Intersection types
/* type Point2D = {
  x: number;
  y: number;
};
type Point3D = Point2D & {
  z: number;
};

let point3d: Point3D = { x: 0, y: 0, z: 0 };

type Person = { name: string };
type Email = { email: string };
type Phone = { phone: string };
type ContactDetails =
    & Person
    & Email
    & Phone;

function contact(details: ContactDetails) {
  console.log(details.name, details.email, details.phone);
}

contact({
  name: "Lucas",
  email: "lspeixotodev@gmail.com",
  phone: "19982621117",
}); */
//! Optional modifier
/* type Person = {
  name: string;
  email: string;
  phone?: string;
};
let lucas: Person = {
  name: "Lucas",
  email: "lspeixotodev@gmail.com",
  phone: "19982621117",
};
let liana: Person = {
  name: "Liana",
  email: "lianacgf@gmail.com",
};

console.log(liana.phone); */
/* class Point {
  x?: number;
  y?: number;
}

const point = new Point();
console.log(point.x); //undefined
point.x = 0;
point.y = undefined;
 */
//! Non-null Assertion Operator
/* type Point = {
  x: number;
  y: number;
};

let point: Point;
function initialize() {
  point = { x: 0, y: 0 };
}
initialize()
console.log(point!.x, point!.y)
//* -----------------------------

type Person = {
    name: string,
    email?: string | null | undefined
}

function sendEmail(email: string): void {
    console.log(`Sent email to: ${email}`);
}

function ensureContactable(person: Person): void {
    if(person.email == null) throw new Error(`Person ${person.name} is not contactable`)
}

function contactWrong(person: Person): void {
    ensureContactable(person);
    sendEmail(person.email!);
}

function contactCorrect(person: Person): void {
    if(person.email == null) throw new Error(`Person ${person.name} is not contactable`)
    sendEmail(person.email); // Sem necessidade no Non Null Assertion (!)
} */
//! Interfaces
/* interface Point2D {
  x: number;
  y: number;
}

interface Point3D extends Point2D {
  z: number;
}

let point3D: Point3D = {
  x: 0,
  y: 0,
  z: 0
};
 */
//! Types x Interfaces
/**
 * Types
 *  - Unios
 *  - Intersections (&)
 *  - Primitives
 *  - Shorthand Functions
 *  - Advanced Type Functions
 *
 * Interfaces
 *  - Declaration Merging
 *  - Familiarity (extends)
 */
//! Never type
/* const fail = (message: string) => {
  throw new Error(message);
};

type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  kind: "circle";
  radius: number;
};

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  if (s.kind === "square") {
    return s.size * s.size;
  } else if (s.kind === "rectangle") {
    return s.width * s.height;
  } else if (s.kind === 'circle') {
    return Math.PI * (s.radius ** 2);
  }

  const _ensureAllCasesAreHandled: never = s;
  return _ensureAllCasesAreHandled;
} */
