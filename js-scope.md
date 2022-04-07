### Function Scope, Block Scope and Lexical Scope

- A function is a subprogram designed to perform a particular task.
- Function definitions are hoisted — expressions are not.
- Functions are executed when they are called. This is known as invoking a function.
- Values can be passed into functions and used within the function. The name of the value is called a parameter. The actual value itself is called an argument.
- Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined by default.
- Functions are objects.


`var` — function scope

```
function myFunc() {  
  var name = 'Luke'
  console.log(name); // 'Luke'
}

myFunc();

console.log(name); // name is not defined  
```

=> As you can see, the variable declared with var inside the function, is not reachable from outside the function.

=> With that said, other types of blocks — like if-statements, loops etc — will not be considered as a scope.

```
if(true) {  
  var name = 'Luke'
}

console.log(name); // 'Luke' 

```

`let, const ` — block scope