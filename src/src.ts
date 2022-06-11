let hi: string = "Hello scr.ts";
let arr: string[] = ["1", "2"];
let num: number[] = [1, 2];
interface Def {
  name: string;
  age?: number;
  id: string | number;
}

let obj: Def = {
  name: "John",
  id: 12345,
};

/* noImplicitAny */

// @ts-ignore - игнорирует правило здесь!
function fnAny(s): void {
  console.log(s.substr(3));
}

/* strictNullChecks */

function fnNull(value: number): number {
  return value * 2;
}
fnNull(5); // Всё ок
// @ts-ignore - игнорирует правило здесь!
fnNull(undefined); // Здесь подсветит ошибку.
// @ts-ignore - игнорирует правило здесь!
fnNull(null); // Здесь подсветит ошибку.

// Если флаг будет "false" ошибки не подсветятся и возможен неожиданный результат в коде

/* strictPropertyInitialization */

class User {
  name: string;
  // @ts-ignore - игнорирует правило здесь!
  email: string; // Здесь подсветит ошибку.
  id: string | undefined; // А здесь нет, так как условно может быть типа undefined.

  constructor(name: string) {
    this.name = name;
  }
}

/* strictFunctionTypes */

function fnTypes(param: string): void {
  console.log(param.toUpperCase());
}

type UseFunction = (variab: string | number) => void;
// @ts-ignore - игнорирует правило здесь!
let funcTypes: UseFunction = fnTypes; // Здесь подсветит ошибку. Из-за несовпадения типа входного параметра: string|number !== string

/* noImplicitThis */

class CustomClass {
  counter: number = 1;

  someMethod(value: number) {
    return function () {
      // @ts-ignore - игнорирует правило здесь!
      console.log(value * this.counter); //Здесь происходит потеря this (решается стрелкой)
    };
  }
}

/* strictBindCallApply */

function someFunction(value: string) {
  console.log(value);
}

// @ts-ignore - игнорирует правило здесь!
someFunction.call(undefined, false); //  для таких случаев нужен отдельный флаг

/*  noPropertyAccessFromIndexSignature*/

interface User1 {
  // явно указанные параметры
  login: string;
  email: string;

  // произвольные параметры
  [key: string]: string;
}

const someUser: User1 = {
  login: "hello",
  email: "hello@example.com",
};

// @ts-ignore - игнорирует правило здесь!
const username = someUser.name; // данная строка приведёт к ошибке

/* noImplicitReturns */
// @ts-ignore - игнорирует правило здесь!
function lookupHeadphonesManufacturer(color: "blue" | "black"): string {
  // Ругается на отсутсвие return
  if (color === "blue") {
    return "beats";
  }
  // забыли return
}

console.log(hi);
