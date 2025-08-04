// Example of Arrow Functions in JavaScript
// Closures in JavaScript

// Example 1: Basic closure
function createCounter() {
  let count = 0; // Private variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Example 2: Closure with parameters
function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayBonjour = createGreeter("Bonjour");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayBonjour("Bob")); // "Bonjour, Bob!"

// Example 3: Practical use case - private data
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    deposit: function (amount) {
      balance += amount;
      return `Deposited ${amount}. New balance: ${balance}`;
    },
    withdraw: function (amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return `Withdrew ${amount}. New balance: ${balance}`;
    },
    getBalance: function () {
      return `Current balance: ${balance}`;
    },
  };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // "Current balance: 100"
console.log(account.deposit(50)); // "Deposited 50. New balance: 150"
console.log(account.withdraw(30)); // "Withdrew 30. New balance: 120"
console.log(account.withdraw(200)); // "Insufficient funds"

/* 
Closures Explanation:
- A closure is a function that has access to variables from its outer (enclosing) scope
- These variables persist even after the outer function has completed execution
- Closures "remember" the environment in which they were created
- They enable data encapsulation and private variables in JavaScript
- Used in: module patterns, factory functions, callback functions, and event handlers
- Help to prevent pollution of the global namespace
- Provide a way to create function factories and maintain state between function calls
- Key mechanism for implementing functional programming patterns in JavaScript
*/

// Traditional function expression
const greet = function (name) {
  return `Hello, ${name}!`;
};

// Arrow function equivalent
const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

// Arrow function with implicit return (when body is a single expression)
const greetShort = (name) => `Hello, ${name}!`;

// Arrow function with multiple parameters
const add = (a, b) => a + b;

// Arrow function with no parameters
const sayHi = () => "Hi there!";

// Using arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

// Example execution
console.log(greet("John")); // "Hello, John!"
console.log(greetArrow("Jane")); // "Hello, Jane!"
console.log(greetShort("Mike")); // "Hello, Mike!"
console.log(add(5, 3)); // 8
console.log(sayHi()); // "Hi there!"
console.log(doubled); // [2, 4, 6, 8, 10]

/* 
Arrow Function Explanation:
- Arrow functions are a concise way to write functions in ES6+
- They use the => syntax instead of the function keyword
- They don't have their own 'this' binding (inherits from parent scope)
- Shorter syntax for single expressions (implicit return)
- Cannot be used as constructors (no 'new' keyword)
- Don't have arguments object (use rest parameters instead)
- Great for callbacks and one-line functions
*/

// Destructuring in JavaScript

// Array destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"

// Skipping elements in array destructuring
const [primary, , tertiary] = colors;
console.log(primary); // "red"
console.log(tertiary); // "blue"

// Object destructuring
const person = {
  name: "Alex",
  age: 28,
  job: "Developer",
};
const { name, age, job } = person;
console.log(name); // "Alex"
console.log(age); // 28

// Renaming variables during destructuring
const { name: fullName, job: profession } = person;
console.log(fullName); // "Alex"
console.log(profession); // "Developer"

// Default values
const { salary = "Not specified" } = person;
console.log(salary); // "Not specified"

// Nested destructuring
const user = {
  id: 42,
  details: {
    firstName: "Jane",
    lastName: "Doe",
  },
};
const {
  details: { firstName, lastName },
} = user;
console.log(firstName); // "Jane"

// Function parameter destructuring
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayUser(person); // "Name: Alex, Age: 28"

/* 
Destructuring Explanation:
- Allows unpacking values from arrays or properties from objects into distinct variables
- Makes code more readable and concise
- Can provide default values for undefined properties
- Works with nested structures (arrays within arrays, objects within objects)
- Commonly used in function parameters and import statements
- Useful for working with API responses and complex data structures
*/

// Spread and Rest Operators in JavaScript

// Spread operator with arrays
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5]; // Spread elements of originalArray
console.log(newArray); // [1, 2, 3, 4, 5]

// Spread operator for array copying
const arrayCopy = [...originalArray];
console.log(arrayCopy); // [1, 2, 3]

// Spread operator to combine arrays
const array1 = [1, 2];
const array2 = [3, 4];
const combined = [...array1, ...array2];
console.log(combined); // [1, 2, 3, 4]

// Spread operator with objects
const baseObject = { x: 1, y: 2 };
const newObject = { ...baseObject, z: 3 }; // Spread properties of baseObject
console.log(newObject); // { x: 1, y: 2, z: 3 }

// Spread operator for object copying
const objectCopy = { ...baseObject };
console.log(objectCopy); // { x: 1, y: 2 }

// Rest operator in array destructuring
const [first, ...remaining] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(remaining); // [2, 3, 4, 5]

// Rest operator in object destructuring
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x); // 1
console.log(rest); // { y: 2, z: 3 }

// Rest parameters in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

/* 
Spread and Rest Operators Explanation:
- Both use the same ... syntax but with different purposes
- Spread operator "expands" arrays or objects into individual elements/properties
- Used to create shallow copies, combine arrays/objects, or pass multiple arguments
- Rest operator "collects" multiple elements into a single array or object
- Used in destructuring and function parameters to handle variable numbers of items
- Spread unpacks, Rest packs
- Introduced in ES6 and greatly simplifies many common operations
*/

// Template Literals in JavaScript

// Traditional string concatenation
const name = "Sarah";
const age = 29;
const oldWay = "My name is " + name + " and I am " + age + " years old.";
console.log(oldWay); // "My name is Sarah and I am 29 years old."

// Template literal with variable interpolation
const withTemplates = `My name is ${name} and I am ${age} years old.`;
console.log(withTemplates); // "My name is Sarah and I am 29 years old."

// Multi-line strings with template literals
const multiLine = `This is line one.
This is line two.
This is line three.`;
console.log(multiLine);

// Expressions in template literals
const a = 10;
const b = 5;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // "The sum of 10 and 5 is 15."

// Nested template literals
const isAdult = age >= 18;
console.log(`${name} is ${isAdult ? `an adult at ${age}` : "not an adult"}.`); // "Sarah is an adult at 29."

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}${values[i] ? `<strong>${values[i]}</strong>` : ""}`,
    ""
  );
}

const highlighted = highlight`My name is ${name} and I am ${age} years old.`;
console.log(highlighted); // "My name is <strong>Sarah</strong> and I am <strong>29</strong> years old."

/* 
Template Literals Explanation:
- Introduced in ES6 as an improved way to work with strings
- Use backticks (`) instead of quotes
- Allow embedded expressions with ${expression} syntax
- Support multi-line strings without escape characters
- Can be tagged with a function for custom string processing
- Make string interpolation more readable and concise
- Often used for HTML templates and complex string formatting
*/

// Higher Order Functions in JavaScript

// Example of map - transforms each element in an array
const prices = [10, 23, 15, 40, 8];
const taxedPrices = prices.map((price) => price * 1.2);
console.log(taxedPrices); // [12, 27.6, 18, 48, 9.6]

// Example of filter - creates new array with elements that pass the test
const expensiveItems = prices.filter((price) => price > 20);
console.log(expensiveItems); // [23, 40]

// Example of reduce - accumulates array to single value
const totalCost = prices.reduce((sum, price) => sum + price, 0);
console.log(totalCost); // 96

// Example of some - tests if at least one element passes the test
const hasAffordableItems = prices.some((price) => price < 10);
console.log(hasAffordableItems); // true

// Example of every - tests if all elements p
const allItemsAffordable = prices.every((price) => price < 50);
console.log(allItemsAffordable); // true

// Chaining higher order functions
const discountedExpensiveItems = prices
  .filter((price) => price > 20)
  .map((price) => price * 0.9)
  .reduce((total, price) => total + price, 0);
console.log(discountedExpensiveItems); // 56.7

/* 
Higher Order Functions Explanation:
- Functions that take other functions as arguments or return functions
- Built-in array methods like map, filter, reduce, some, every are higher order functions
- map: transforms each element and returns a new array of the same length
- filter: returns a new array with elements that pass a test function
- reduce: accumulates array values into a single result using a function
- some: returns true if at least one element passes the test function
- every: returns true if all elements pass the test function
- They are declarative alternatives to imperative for loops
- Enable functional programming patterns in JavaScript
- Can be chained together for complex data transformations
*/
