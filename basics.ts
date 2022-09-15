// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters


///// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'John';

let isInstructor: boolean;

isInstructor = true;

///// More complex types
// Arrays
let hobbies: string[]; //same with number[] or boolean[]

hobbies = ['Sports', 'Cooking']

// Objects

////// Creating a type alias
type Person = { 
  name: string;
  age: number;
}; 

let person: Person;

person = {
  name: 'John',
  age: 32
};

// person = {
//   isEmployee: true
// }

// let people: { //storing an array of such objects, combining features and types
//   name: string;
//   age: number;
// }[]; 
let people: Person[]; // using the alias created above to simplify, creates an array of Person

// Type inference

let course = 'React - The Complete Guide'; // variable auto detects type from assignment (type of string for course)
// can also set to course: string = 'string', but is redundant since it detects type from assignment
// course = 123; // shows error since type is set to string

///// Variables with multiple types aka UNION TYPES

let course2: string | number = 'Angular is good.'
course2 = 123; // can use string or number since type of union was assigned


/////// FUNCTIONS combined with types

function add(a: number, b: number) {
  return a + b; // the return type is inferred as number
}

// special return type
function printOutput(value: any) {
  console.log(value);
}


///// Understanding Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3] TS doesn't infer the numbers in the array in updatedArray
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatedArray[0].split('');


///// Classes & Interfaces w/ TypeScript (blueprints for objects)

class Student { // private methods and properties can only be used inside the class, public can be used outside
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(
    public first: string, 
    public last: string, 
    public age: number, 
    private courses: string[]
    ) {}

  enroll(courseName: string) { // this is how we add a method
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}


const student = new Student('John', 'Pierce', 29, ['Angular']);
student.enroll('React'); // adds to courses array

// student.listCourses() => lists Angular and React



////// Interfaces feature
// What are interfaces? Interfaces are object type definitions
interface Human { // can also use the type keyword to create an alias in place of interface, interfaces can be implemented by classes, they force classes to have that structure by the interface, whereas types cannot
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: 'Max',
  age: 32,
  greet() {
    console.log('Hello!');
  },
};

class Instructor implements Human { // interfaces don't just act as object types, they force us to set up a specific structure
  firstName: string;
  age: number;
  greet() {
    console.log('Hello!!!');
  }
}