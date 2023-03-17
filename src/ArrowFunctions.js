var hello = function() { // long
    return "Hello World!";
  }
  
  var hello1 = () => "Hello World!"; // short with no parameter
  var hello2 = (val) => "Hello " + val; // short with one parameters
  var hello3 = val => "Hello" + val; // only one parameter
  var hello4 = (val, val2) => "Hello " + val + " " + val2; // short with two parameters