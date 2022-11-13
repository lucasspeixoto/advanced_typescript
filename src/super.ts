//! Partial<T>
/* export type Partial<T> = {
  [P in keyof T]?: T[P];
}; */

/* type Point = { x: number; y: number };

type PartialPoint = Partial<Point>;

export class State<T> {
  constructor(public current: T) {}

  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });
state.update({ y: 10 }); */

//! Required<T>
/* export type Required<T> = {
  [P in keyof T]-?: T[P];
}; */

/* type PartialPoint = { x?: number; y?: number };

type Point = Required<PartialPoint>;

const point: Point = { x: 0, y: 0 };

type CircleConfig = {
  color?: string;
  radius?: number;
};

class Circle {

    private config: Required<CircleConfig>;

    constructor(config: CircleConfig) {
        this.config = {
            color: config.color ?? 'green',
            radius: config.radius ?? 0
        }
    }

    draw() {
        console.log(
            'Drawing a circle.',
            'Color: ', this.config.color,
            'Radius: ', this.config.radius
        )
    }
}
 */

//! Readonly<T>

/**
 * Make all properties in T readonly
 */
/* export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
 */
/* type Point = { x: number; y: number };

const point: Readonly<Point> = {
  x: 10,
  y: 15,
};

// point.x = 12; */
/* function makeReadonly<T>(object: T): Readonly<T> {
  return Object.freeze({ ...object });
}

const editablePoint = {x: 0, y: 0};
editablePoint.x = 10;

const readonlyPoint = makeReadonly(editablePoint);
//readonlyPoint.x = 12; */

//! Record<K, V>

/* type Persons = Record<string, { name: string; role: string }>;

const persons: Persons = {};
persons["000"] = { name: "Liana", role: "Supervisor" };
persons["111"] = { name: "Lucas", role: "Developer" };

persons["222"] = { name: "Black Adam" };

type PersonsVerbose = { [key: string]: { name: string; role: string } }; */

/* type Roles = "supervisor" | "developer";

let peopleWithRoles: Record<Roles, string[]> = {
  supervisor: ["Liana"],
  developer: ["Lucas"],
};

peopleWitgRoles = {
  supervisor: ["Liana"],
}; */

/* type Point = Record<"x" | "y", number>;

type PageInfo = {
  id: string;
  title: string;
};

type PagesVerbose = {
  home: PageInfo;
  services: PageInfo;
  about: PageInfo;
  contact: PageInfo;
};

type Pages = Record<
  "home" | "services" | "about" | "contact",
  { id: string; title: string }
>;
 */

//! AutoComplete literal unions with primitives
/* type Padding = 'small' | 'normal' | 'large' | string;

function getPadding(padding: Padding): string {
    if(padding === 'small') return '12px';
    if(padding === 'normal') return '16px';
    if(padding === 'large') return '24px';

    return padding;
}

let padding: Padding;
padding = 'small'; // 12px
padding = '8px'; //8px
padding = 'large' */

//! undefined x optional
/* type ExampleOptional = {
  name?: string;
};
let optional: ExampleOptional;
optional = { name: undefined };
optional = {};

type ExampleUnion = {
  name: string | undefined;
};
let union: ExampleUnion;
union = { name: undefined };
//union = {};// Error: 'name' is missing

function logOptional(message?: string) {
  console.log(message);
}

function logUnion(message: string | undefined) {
  console.log(message);
}

logOptional(undefined);
logOptional();

logUnion(undefined);
logUnion(); */

/* function logOptional(message: string, error?: Error) {
  if (error != undefined) {
    console.log(error, message);
  } else {
    console.log(message);
  }
}

function logUnion(message: string, error: Error | undefined) {
  if (error != undefined) {
    console.log(error, message);
  } else {
    console.log(message);
  }
} */

//! satisfies operator
/* const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255],
  // ^^^ temos um typo aqui
};

// Conseguimos usar métodos de array aqui
const redComponent = palette.red.at(0);

// Mas não aqui, porque só podemos usar strings
const greenNormalized = palette.green.toUpperCase(); */

/* type Colors = "red" | "green" | "blue"
type RGB = [red: number, green: number, blue: number]

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255]
} satisfies Record<Colors, string | RGB>;

// Sem o satisfies => Property 'at' does not exist on type 'string | RGB'.
const redComponent = palette.red.at(0);

// Sem o satisfies => Property 'toUpperCase' does not exist on type 'string | RGB'.
const greenNormalized = palette.green.toUpperCase(); */

//! PropertyKey
/* const str: string = "key";
const num: number = 30101994;
const sym: symbol = Symbol();

const valid = {
  [str]: "valid",
  [num]: "valid",
  [sym]: "valid",
};

const obj = {};

const invalid = {
  [obj]: "invalid",
}; */

//type ValidKey = keyof any;

/* let example: ValidKey;
example = str;
example = num;
example = sym;

example = obj; */

/* let example: PropertyKey;
example = str;
example = num;
example = sym;

example = obj; */

//! ThisType<T> Utility

/* type Mathh = {
  double(): void;
  half(): void;
}; */

/* export const math: Mathh = {
    double(this: {value: number}) {
        this.value +=2;
    },

    half(this: {value: number}) {
        this.value /=2;
    }
} */

/* export const math: Mathh & ThisType<{ value: number }> = {
  double() {
    this.value += 2;
  },

  half() {
    this.value /= 2;
  },
};
 */

/* type StateDescription<D, M> = {
  data: D;
  methods: M & ThisType<D & M>;
};

function createState<D, M>(desc: StateDescription<D, M>): D & M {
  return { ...desc.data, ...desc.methods };
}

let state = createState({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    },
  },
});

state.x = 10;
state.y = 20;
state.moveBy(5, 5);
console.log(state) */

//! Awaited<T> Utility
/* async function example<T>(input: T) {
    const output: Awaited<T> = await input;
} */

//! String manipulation utilities
/* export type UppercaseSimple<T> = T extends "a" ? "A" : T extends "b" ? "B" : T;

type a = UppercaseSimple<'a'>; */

/* type abba = Uppercase<'abba'>;
type Loud = 'HELLO FAM';
type Quiet = Lowercase<Loud>;

type Hello = 'fee fi fo fum';
type Better = Capitalize<Hello>;

type UncomfortableGreeting = Uncapitalize<Loud>;

type Scream = Uppercase<'Hello!'>;

type CV = Uppercase<'résumé'>;

type Getter<T extends string> = `get${Capitalize<T>}`;

type Setter<T extends string> = `get${Capitalize<T>}`;

type Name = 'name';

type GetName = Getter<Name>;
type SetName = Setter<Name>;
 */

//! Mapped Types as Clauses
type State = {
  name: string;
  age: number;
};

/**
 * {
 *  name: (value: string) => void
 *  age: (value: number) => void
 * }
 */
export type Setters<State> = {
  [K in keyof State & string as `set${Capitalize<K>}`]: (
    value: State[K]
  ) => void;
};

export type Getters<State> = {
  [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K];
};

/* type SetProperty<K extends string> = `set${Capitalize<K>}`;

type ExampleName = SetProperty<"name">;
type ExampleAge = SetProperty<"age">; */

export type Store<State> = Setters<State> & Getters<State>;

type PersonState = {
    name: string,
    age: number
}

type PersonStore = Store<PersonState>;

declare const personStore: PersonStore;
personStore.setName('Lucas');
personStore.setAge(31);
const name: string = personStore.getName();
const age: number = personStore.getAge();

