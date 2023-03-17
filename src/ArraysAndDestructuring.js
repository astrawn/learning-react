// construct list of items from array of items
const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>{item}</p>)

// destructuring
// old way
const vehicles = ['mustang', 'f-150', 'expedition']
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// new way
const[car1, truck1, suv1] = vehicles;

// or only 1st and third
const[car2, , suv2] = vehicles;

// good for when a function returns an array
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);