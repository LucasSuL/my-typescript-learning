// tuple: an array that could contain different types of elements in it (have order)
let user: [number, string] = [1, "josh"];
console.log(user[0].toString());

// if not explicitly assign values, the default value type will be number (0, 1, 2...)
// enum: prefix with 'const' will make ts compiler generate a more simpler js code
const enum Size {
  Small = "s",
  Middle = "m",
  Large = "l",
}
let size: Size = Size.Middle;
console.log(size);

// function: func-name (para-name : type) : returnType{}
function calculateTax(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}

//objects: this is a type aliase (like Class in Java and Constructor in C)
type Employee = {
  id: number;
  readonly name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Josh",
  retire: (date) => {
    console.log(date);
  },
};

// union types
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.3;
  } else {
    return parseInt(weight) * 2.2;
  }
}

let res = kgToLbs("10kg"); //22
console.log(res);

// intersection types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let msgBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// literal types : similar to enum but more concise
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction): void {
  console.log(direction);
}
move("up");
// move('wrong')  this is invalid

// nullable
// used when we are unsure about whether the input is valid or not
function processValue(value: number | null) {
  if (value !== null) {
    console.log(value * 2);
  } else {
    console.log("value is null");
  }
}

processValue(20);
processValue(null); // valid input

// optional chain
// if we are not sure about whether an object or addtribute is valid or not, just add "?"
type Customer = {
  date?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  if (id === 0) return null;
  else return { date: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.date?.getFullYear());
