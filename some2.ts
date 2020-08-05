interface Shape {
    getArea(): number;
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
}

interface iPerson {
    name: string,
    age?: number
}
const person: iPerson = {
    name: 'name'
}

type tPerson = {
    name: string,
    age?: number
}
const tpersonImpl: tPerson = {
    name: 'name'
}

interface interPerson extends iPerson {
    add: number
}

type interPerson2 = iPerson & {
    add: number
}

const interPersonImpl: interPerson = {
    add: 10,
    name: 'aa',
}

interface abc extends iPerson {
    gg: number
}

const tperson: tPerson = {
    name: 'name',
    age:5
}

const abc: abc = {
    name: 'nam',
    gg: 10
}

interface NumberToStringConverter {
    convert: (value: number) => string;
}
  
interface BidirectionalStringNumberConverter extends NumberToStringConverter {
    convert: (value: string) => number;
}

abc.name = 'abcd'

abc = {afw:123}

type tPeople = tPerson[];

const tPeopleImpl: tPeople = [
    tperson, tperson
]

interface tPeo extends iPerson{}[];
const tPeo2: tPeo = [{name: "a", age: 10}, {name: "a", age: 10}];

function merge(a: object, b: any): any {
    return {
        ...a,
        ...b
    }
}

merge(123 , 'b')

function genericMerge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    }
}

const merged = merge([], 5);
const mergedd = genericMerge([], 5);

const merged2 = [{...merged}];
const merged3 = [{...mergedd}];

function wrap<T>(param: T) {
    return {
        param
    };
}

function wrap2(param: any) {
    return {
        param
    };
}

const wrapped = wrap(10);
const wrapped2 = wrap2(10);

interface Item<T> {
    items: T[]
}
const itemlist: Item<number> = {
    items: [1,2,3]
}
const items: Item<string> = {
    items: ['a', 'b', 'c']
}

type obj<T> = {
    a: T[]
}
const cobj: obj<number> = {
    a: [123, 124]
}
const cobjj = cobj;

class Cgen<T> {
    aab: T
    constructor (aab: T) {
        this.aab = aab
    }
    getAab(): T {
        return this.aab
    }
    get abc(): T {
        return this.abc
    }
    set abc(abc: T) {
        this.abc = abc;
    }
}
const cgen = new Cgen<number>(123);
cgen.getAab()

class Queue<T> {
    list: T[];
    get length(): number {
      return this.list.length;
    }
    enqueue(item: T): void {
      this.list.push(item);
    }
    dequeue(): T {
      return this.list.shift();
    }
}
const queue = new Queue<number>();
queue.enqueue(0);

interface Action {
    do: () => {}
}