//! typeof operator
/* const center = {
  x: 0,
  y: 0,
  z: 0,
};

//type Point = typeof center;

const unit: typeof center = {
  x: center.x + 1,
  y: center.y + 1,
  z: center.z + 1,
};

const personResponse = {
  name: "liana",
  email: "liana@email.com",
  firstName: "Liana",
  lastName: "Fernandes",
};

type PersonResponse = typeof personResponse;

function processResponse(person: PersonResponse) {
  console.log(`Full name: ${person.firstName} ${person.lastName}`);
}
 */

//!Lookup tyes
/* export type SubmitRequest = {
  transactionId: string;
  personal: {
    title: string;
    email: string;
    phone: string;
    previousAliases: {
      firstName: string;
      middleName: string;
      lastName: string;
    }[];
  };
  consent: {
    undestandInformation: boolean;
    informationTrue: boolean;
    informationCOnsidered: boolean;
    consentToDisclosing: boolean;
    indemnifyAgainstLiability: boolean;
  };
  payment: {
    creditCardToken: string;
  };
};

type PaymentRequest = SubmitRequest["payment"];
type PreviousAliasRequest = SubmitRequest["personal"]["previousAliases"][0];

const userPaymentRequest: PreviousAliasRequest = {
  firstName: "Lucas",
  middleName: "Sacramoni",
  lastName: "Peixoto",
};

export function getPayment(): PaymentRequest {
  return {
    creditCardToken: "45xa5jk5nlku!pm@ghty%$",
  };
} */

//! keyof type operator
/* type Person = {
  name: string;
  age: number;
  location: string;
};

type User = {
  id: string;
  email: string;
};

const liana: Person = {
  name: "Liana",
  age: 28,
  location: "Bauru - SP",
};

const user: User = {
  id: "45xa5jk5nlku!pm@ghty%$",
  email: "user@email.com",
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];

  console.log("Getting:", key, value);

  return value;
}

logGet(liana, "age");

logGet(user, "id");

function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) {
  console.log("Setting", key, value);

  obj[key] = value;
}

console.log(liana)
logSet(liana, 'age', 29)
console.log(liana) */

//! Conditional Types
/* type IsNumber<T> = T extends number ? "number" : "other";

type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;

const isNumber = (value: unknown) =>
  typeof value === "number" ? "number" : "other";

const withNumber = isNumber(123);
const withOther = isNumber("hi"); */

/* export type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends symbol
  ? "symbol"
  : T extends bigint
  ? "bigint"
  : T extends Function
  ? "function"
  : T extends null
  ? "null"
  : "object";

function typeName<T>(t: T): TypeName<T> {
  return typeof t as TypeName<T>;
}

const str = typeName("hello world");
const num = typeName(30101991);
const bool = typeName(true);
const obj = typeName(null);

console.log(str, num, bool);
 */

//! Conditional Types with Unions and never
/* function error(message: string): never {
  throw new Error(message);
}

//const notAllowed: never = "some string";

const allowed: never = error("this is okay");
const example: string = error('I will not return');

type Verbose = string | never;
type Concise = string;
 */
/**
 * Exclude null and undefined from T
 */
/* export type NoEmpty<T> = T extends null | undefined ? never : T;

type Example = NoEmpty<string | null>;
type Expanded0 = NoEmpty<string> | NoEmpty<null>;
type Expanded1 =
  | (string extends null | undefined ? never : string)
  | (null extends null | undefined ? never : string); */

//! infer keyword and ReturnType<T>
/*
type IsArray<T> = T extends Array<any> ? "array" : "other";

type WithArray = IsArray<string[]>;
type WithNoArray = IsArray<number>;

type UnboxArray<T> = T extends Array<infer Member> ? Member : T;

export function createPerson(firstName: string, lastName: string) {
  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
  };
}

 type ReturnType<T> =
    T extends (...args: any) => infer R
    ? R
    : never;

    
    function logPerson(person: ReturnType<typeof createPerson>) {
    type Person = ReturnType<typeof createPerson>; 
  console.log("Person:", person.firstName, person.lastName, person.fullName);
}
*/

//! Mapped types
/* export type Point = {
  x: number;
  y: number;
  z: number;
};

type Readonly<T> = {
    readonly [Item in keyof T]: T[Item]
};

const center: Readonly<Point> = {
    x: 0,
    y: 0,
    z: 0,
  };

  
center.x = 100;

console.log(center) */

//! Mapped type modifiers
/* export type Point = {
  readonly x: number;
  y?: number;
};

export type Mapped<T> = {
  -readonly [P in keyof T]-?: T[P];
};

export type Result = Mapped<Point>;
 */

/* export type Partial<T> = {
    [P in keyof T]?: T[P]
}
export class State<T> {
  constructor(public current: T) {}

  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });
state.update({ y: 10 });

console.log(state.current) */

//! Template Literal Type
/* let jsStringLiteral;
jsStringLiteral = "hello";
jsStringLiteral = "whatever";

let jsTemplateLiteral;
jsTemplateLiteral = `Example ${jsStringLiteral}`;
jsTemplateLiteral = `Example: ${3.14}`; */

/* let str: string;
str = "whatever you want";
let strLiteral: "hello";
strLiteral = "hello";
//strLiteral = "anything else is an error";

let templateLiteral: `Example: ${string}`;
templateLiteral = 'Example: hello'; */

/* type CSSValue =
  //implies px
  | number
  // number + px|em|rem
  | `${number}px`
  | `${number}em`
  | `${number}rem`;

function size(input: CSSValue) {
  return typeof input == "number" ? input + "px" : input;
}

size(123);
size("100px");
size("12em"); */
//size("12ex"); //Error
