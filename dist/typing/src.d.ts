declare let hi: string;
declare let arr: string[];
declare let num: number[];
interface Def {
    name: string;
    age?: number;
    id: string | number;
}
declare let obj: Def;
declare function fnAny(s: any): void;
declare function fnNull(value: number): number;
declare class User {
    name: string;
    email: string;
    id: string | undefined;
    constructor(name: string);
}
declare function fnTypes(param: string): void;
declare type UseFunction = (variab: string | number) => void;
declare let funcTypes: UseFunction;
declare class CustomClass {
    counter: number;
    someMethod(value: number): () => void;
}
declare function someFunction(value: string): void;
interface User1 {
    login: string;
    email: string;
    [key: string]: string;
}
declare const someUser: User1;
declare const username: string;
declare function lookupHeadphonesManufacturer(color: "blue" | "black"): string;
