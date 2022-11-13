"use strict";
//! Primitive Types
Object.defineProperty(exports, "__esModule", { value: true });
/* let isPresent: boolean = false;
let number: number = 70.1;
let hello: string = "world";

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol("star");
let biggy: bigint = 24n; */
//! Instance Types
/* let regexp: RegExp = new RegExp("ab+c");

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]); */
/** A first in first out collection */
/* class Queue<T> {
  private data: Array<T> = [];

  public push(item: T) {
    this.data.push(item);
  }

  public pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue(); */
//! Arrays and Tuples
/* let array: number[] = [1, 2, 3];

array = [1];
array = [1, 2, 3, 4, 5];

let tuple: [number, number] = [1, 2];

tuple = [30, 10]; */
//! Object Types and Type ALiases
/* type Point = { x: number; y: number }; // * Type ALiases

let center: Point = {
  x: 0,
  y: 0,
};

let unit: Point = {
  x: 1,
  y: 1,
}; */
//! Functions
/* type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

const sum = (...values: number[]): number => {
  return values.reduce((previous, current) => {
    return previous + current;
  });
};

console.log(add(11, 67)); */
//! Structural Typing
/* type User = { id: string };
type Product = { id: string };

let user: User = { id: "uAD548X00xa0" };
let product: Product = { id: "pFH898Y01tu0" };
user = product;
product = user;
 */
/* type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D = { x: 0, y: 0 };
let point3D = { x: 0, y: 10, z: 30 };

//* Extra info ok
point2D = point3D;
function takesPoint2D(point: Point2D) {
  console.log(point);
}
takesPoint2D(point3D);

//* Error: missing info ok
point3D = point2D;
function takesPoint3D(point: Point3D) {
  console.log(point);
}
takesPoint3D(point2D); */
//! Classes
/* class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move(distanceInMetters: number) {
    console.log(`The ${this.name} moved ${distanceInMetters} meters`);
  }
} */
/* let cat = new Animal("Cat");
cat.move(10); */
//cat.name = "Supino"; //Property 'name' is protected and only accessible within class 'Animal' and its subclasses.
/* class Birs extends Animal {
  fly(distanceInMetters: number) {
    console.log(`The ${this.name} moved ${distanceInMetters} meters`);
  }
} */
// ! Generics
/* class Queue<T> {
  data: T[] = [];

  public push(item: T) {
    this.data.push(item);
  }

  public pop(): T | undefined {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(6100);

console.log(queue.pop()?.toPrecision(1)); */
// ! any and unknown types
/* let exampleAny: any;
let exampleUnknown: unknown;

//* any
exampleAny = 123;
exampleAny = "Hello Word";

//* unknown
exampleUnknown = 123;
exampleUnknown = "Hello Word";

// * any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;

// * unknown;
// exampleUnknown.trim(); //'exampleUnknown' is of type 'unknown'

if (typeof exampleUnknown === "string") {
  exampleUnknown.trim();
}
if (typeof exampleUnknown === "boolean") {
  let unknownSetBool: boolean = true;
  unknownSetBool = exampleUnknown;
}
 */
// ! Universal Utilities
function log(value) {
    switch (typeof value) {
        case "number":
            console.log(value.toFixed(2));
            break;
        default:
            console.log(value);
            break;
    }
}
/* log(3.1416159);
log("Hello World"); */
// ! Type Assertions
/* const load = (): unknown => 'Hello World'
let hello = load();
let trimmed = (hello as string).trim() // Assertion
if(typeof hello === 'string') {
    trimmed = hello.trim()
}
log(trimmed); */
// ! Type Casting
/* let leet;

leet = '1337';

const number = +leet;

console.log(number); */
//! Modules
/* console.log(isPalindrome("hannah"));
console.log(isPalindrome("hanna")); */
//! Type Declarations
/* console.log(
    'Logged in user:',
    process.env.USER
)
import fs from 'fs';

fs.writeFileSync('hello.txt', 'Hello World') */
//! Async/Await
/* const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const mainAsync = async () => {
  for (let index = 1; index <= 10; index++) {
    await delay(1000);
    console.log(`${index}s`);
  }
};

mainAsync(); */
//! ts-node
let message = 'Hello world';
console.log(message);
