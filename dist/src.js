"use strict";
let hi = "Hello scr.ts";
let arr = ["1", "2"];
let num = [1, 2];
let obj = {
    name: "John",
    id: 12345,
};
/* noImplicitAny */
// @ts-ignore - игнорирует правило здесь!
function fnAny(s) {
    console.log(s.substr(3));
}
/* strictNullChecks */
function fnNull(value) {
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
    constructor(name) {
        this.name = name;
    }
}
/* strictFunctionTypes */
function fnTypes(param) {
    console.log(param.toUpperCase());
}
// @ts-ignore - игнорирует правило здесь!
let funcTypes = fnTypes; // Здесь подсветит ошибку. Из-за несовпадения типа входного параметра: string|number !== string
/* noImplicitThis */
class CustomClass {
    constructor() {
        this.counter = 1;
    }
    someMethod(value) {
        return function () {
            // @ts-ignore - игнорирует правило здесь!
            console.log(value * this.counter); //Здесь происходит потеря this (решается стрелкой)
        };
    }
}
/* strictBindCallApply */
function someFunction(value) {
    console.log(value);
}
// @ts-ignore - игнорирует правило здесь!
someFunction.call(undefined, false); //  для таких случаев нужен отдельный флаг
const someUser = {
    login: "hello",
    email: "hello@example.com",
};
// @ts-ignore - игнорирует правило здесь!
const username = someUser.name; // данная строка приведёт к ошибке
/* noImplicitReturns */
// @ts-ignore - игнорирует правило здесь!
function lookupHeadphonesManufacturer(color) {
    // Ругается на отсутсвие return
    if (color === "blue") {
        return "beats";
    }
    // забыли return
}
console.log(hi);
//# sourceMappingURL=src.js.map