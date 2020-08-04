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

