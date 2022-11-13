//! implements keyword
/* type Animal = {
    name: string,
    voice(): string
}

function log(animal: Animal) {
    console.log(`Animal ${animal.name}: ${animal.voice}`)
}

class Cat implements Animal {
    constructor(public name: string) {}

    voice() {
        return 'meow';
    }
}

class Dog implements Animal {
    constructor(public name: string) {}

    voice() {
        return 'woof';
    }
}

log(new Cat('Salem'))
log(new Dog('Lassie')) */

//! Definite Assignment Assertion
/* let dice!: number;

function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
}

rollDice();

console.log(`Current Dice value: ${dice}`);

rollDice();

console.log(`After another rool: ${dice}`);

class Point {
  x!: number;
  y!: number;

  constructor() {
    this.moveRandom();
  }

  public moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
} */

//! User Defined Type Guards
/* type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Circle = {
  kind: "circle";
  radius: number;
};

type Shape = Square | Rectangle;

function isSquare(shape: Shape): shape is Square {
    return 'size' in shape;
}

function isRectangle(shape: Shape): shape is Rectangle {
    return 'width' in shape;
}

function area(shape: Shape) {
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  const _ensudeAllCasesAreHandled: never = shape;
  return _ensudeAllCasesAreHandled;
}
 */

//! Assertion functions
/* type Person = {
  name: string;
  dateOfBirth: Date;
};

function loadPerson(): Partial<Person> | null {
  console.log("Loading a person.");
  return { name: "new person", dateOfBirth: new Date(1991, 9, 30) };
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) return;
  else throw new TypeError("value is not a Date");
}

//asserts condition = 'only returns if the condition parameter is true

const maybePerson = loadPerson();

assert(maybePerson != null, "Could not load person");

console.log(`Name: ${maybePerson.name}`);

assertDate(maybePerson.dateOfBirth);
console.log(`Date of Birth: ${maybePerson.dateOfBirth.toISOString()}`)

//* TypeScript does not do any implicit assetion checking */

//! Function Overloading
/* function reverse(string: string): string;
function reverse(stringArray: string[]): string[];

function reverse(stringOrStringArray: string | string[]) {
    if(typeof stringOrStringArray == 'string') {
        return stringOrStringArray.split('').reverse().join('');
    } else {
        return stringOrStringArray.slice().reverse()
    }
}

const hello = reverse('hello')
const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o'])

console.log(hello)
console.log(h_e_l_l_o)

function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;

function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
    if(month!=null && day!= null) {
        return new Date(timestampOrYear, month - 1, day)
    } else {
        return new Date(timestampOrYear);
    }
}

const doomsday = makeDate(2000, 1, 1) // 1 Jan 2000
const epoch = makeDate(0); // 1 Jun 1970
const invalid = makeDate(2000, 1); */

//! Call Signatures
/* type Add = {
  (a: number, b: number): number,
  (a: number, b: number, c: number): number,
  debugName?: string,
};

const add: Add = (a: number, b: number, c?: number) => {
  return a + b + (c != null ? c : 0);
};

add.debugName = 'Addition Function';

console.log(add(1, 3)); */

/* type PointCreator = {
  new (x: number, y: number): { x: number; y: number };
};

const Point: PointCreator = class {
  constructor(public x: number, public y: number) {}
};
 */

//! Abstract Classes
/* abstract class Command {
    abstract commandLine(): string;

    execute() {
        console.log(`Executing: ${this.commandLine}`)
    }
}

class GitResetCommand extends Command {

    commandLine() {
        return 'git reset --hard';
    }
}

class GitFetchCommand extends Command {

    commandLine() {
        return 'git fetch --all';
    }
}

new GitResetCommand().execute();
new GitFetchCommand().execute(); */

//new Command().execute(); //Cannot create an instance of an abstract class.

//! Index Signatures
/* const strs = {
  hello: "world",
};

console.log(strs["hello"]);

const nums = {
  1337: "leet",
};

console.log(nums[1337]);

type Dictionary = {
  [key: string]: string;
};

const options: Dictionary = {
  "1": "Janeiro",
  "2": "Fevereiro",
}; */

/* type Person = {
  displayName: string;
  email: string;
};

type PersonDictionary = {
  [username: string]: Person | undefined;
};

const persons: PersonDictionary = {
  liana: { displayName: "Liana", email: "liana@gmail.com" },
};

persons["lucas"] = { displayName: "Lucas", email: "lucas@gmail.com" };

console.log(persons)

delete persons["lucas"]

console.log(persons)

const result = persons['fulano']
console.log(result, result.email); */

//! Readonly Arrays and Tuples
/* function reverseSorted1(input: number[]): number[] {
  return input.sort().reverse();
}

const start1 = [1, 2, 3, 5, 4];

const result1 = reverseSorted1(start1);
console.log(result1); //[ 5, 4, 3, 2, 1 ]
console.log(start1); //[ 5, 4, 3, 2, 1 ] Mudou o array original :( */

/* function reverseSorted2(input: readonly number[]): number[] {
  return input.slice().sort().reverse();
}

const start2 = [1, 2, 3, 5, 4];

const result2 = reverseSorted2(start2);
console.log(result2); //[ 5, 4, 3, 2, 1 ]
console.log(start2); //[ 1, 2, 3, 5, 4 ] */

/* type Neat = readonly number[];

type Long = ReadonlyArray<number>;

type Point = [number, number];

function move(point: Point, x: number, y: number): Point {
  point[0] += x;
  point[1] += y;
  return point;
}

const point: Point = [0, 0];
const moved = move(point, 10, 10);

console.log(moved); //[10, 10]
console.log(point); // [10, 10] Mudou o array original :(

type Point2 = readonly [number, number];

function move2(point: Point, x: number, y: number): Point2 {
  return [point[0] + x, point[1] + y];
}

const point2: Point2 = [0, 0];
const moved2 = move(point, 10, 10);

console.log(moved2); //[10, 10]
console.log(point2); // [0, 0] Manteve :) */

//! Double Assertion
/* type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };
type Person = { name: string; email: string };

let point2: Point2D = { x: 0, y: 0 };
let point3: Point3D = { x: 10, y: 10, z: 10 };
let person: Person = {
    name: "Lucas",
    email: "lucas@email.com"
}
 */

//point2 = point3;
//point3 = point2; //Error
//point3 = point2 as Point3D; //Ok: I trust you

//person = point3; //Error
//point3 = person; //Error
//point3 = person as Point3D; //Error: I don't trus you enough
//point3 = person as unknown as Point3D; //Ok: I doubly trust you

//! const Assertion
/* const king = "elvis";
//king = 'michael'; //Error
const upperCased = king.toUpperCase();

const dave = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "headbanging"],
} as const; */

/* dave = {
  name: "grohl",
  role: "singer",
  skills: ["singing", "drumming", "headbanging"],
};
 */
/* dave.name = "grohl";
dave.role = "singer";
dave.skills.unshift("singing"); */
/* function layout(settings: {
  align: "left" | "center" | "right";
  padding: number;
}) {
  console.log(`Performing layout: ${settings}`);
}

const example = {
  align: "left" as const, //const assertion = increased safety by limiting the mutability
  padding: 0,
};

layout(example); */

//! this parameter
/* function double(this: { value: number }) {
  this.value = this.value * 2;
}

const valid = {
  value: 10,
  double,
};

valid.double();

console.log(valid.value); //20

const invalid = {
  value: 10,
  double,
};

invalid.double(); */

//! Generic Constraints
/* type NameFields = { firstName: string; lastName: string };
function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
}

const john = addFullName({
    email: 'john@email.com',
    firstName: 'John',
    lastName: 'Trump'
});

console.log(john.email) */