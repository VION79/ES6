/*
Set Default Parameters for Your Functions
In order to help us create more flexible functions, ES6 introduces default parameters for functions.

Check out this code:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
The console will display the strings Hello John and Hello Anonymous.

The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will 
receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

The result of increment(5, 2) should be 7.
The result of increment(5) should be 6.
A default parameter value of 1 should be used for value.

// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line

*/

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line


console.log((5,2));


/*
Problem.
I cannot not have the code above to display via console.log().

C:\Users\Acer-aspire-es1\githubrepo_acer\ES6>node defaultParameters.js
node:internal/modules/cjs/loader:998
  throw err;
  ^

Error: Cannot find module 'C:\Users\Acer-aspire-es1\githubrepo_acer\ES6\defaultParameters.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:995:15)
    at Module._load (node:internal/modules/cjs/loader:841:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v18.12.1

C:\Users\Acer-aspire-es1\githubrepo_acer\ES6>
*/