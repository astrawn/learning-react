import logo from './logo.svg';
import './App.css';

class Car{
  constructor(name){
    this.brand = name;
  }

  present(){
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}

const mycar = new Model("Ford", "Mustang");
mycar.show();

var hello = function() { // long
  return "Hello World!";
}

var hello1 = () => "Hello World!"; // short with no parameter
var hello2 = (val) => "Hello " + val; // short with one parameters
var hello3 = val => "Hello" + val; // only one parameter
var hello4 = (val, val2) => "Hello " + val + " " + val2; // short with two parameters

// var has function scope, let has block scope, const has block scope
// all have global scope if declared outside function/class
// const defines a constant reference
// cannot reassign a constant value, array, or object
// can change elements of constant array or properties of constant object

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

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
