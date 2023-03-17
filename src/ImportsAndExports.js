
// imports and exports
// Named Exports
export const name = "Jesse"
export const age = 40

// ^inline^ or all at once
const name = "Jesse"
const age = 40
export {name, age}

// Default Exports
// can only have one default export in a file
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
}

export default message;

// import named exports from person.js
// import {name, age} from "./person.js"

// import a default export from the file message.js
// import message from "./message.js"