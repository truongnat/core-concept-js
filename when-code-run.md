# When code javascript run ?

 * When code javascript run, it creates:
   
   + a `Global Execution Context` ( execution function )

     - `Global Execution Context`: This is the default or base execution context. The code that is not inside any function is in the global execution context. It performs two things: it creates a global object which is a window object( in the case of browsers ) and sets the value of `this` to equal to the global object. There can only be one global execution context in a program.
  
     - `Functional Execution Context`:  Every time a function is invoked, a brand new execution context is created for that function. Each function has its own execution context, but it's created when the function is invoked or called. There can be any number of function execution context.
     - `Eval Function Execution Context`: Code executed inside an `eval` function also gets its own execution context, but as `eval` isn't usually used by Javascript developers. 
   + a `Global Memory` ( global variables, declare function )

 * When call a function in your code, yet another thing has to happen when you run a function javascript:
   
   + First, the function appears in the `Global Execution Context`.
   + Then, another mini-context appears alongside the function, that little new box is called : `Local Execution Context`
   + Notice, when declaring a variable and assigned with another function ( function return any value ), it has a value of undefined at first, then as soon as function appears in the `Global Execution Context` the function executes and return Value


> The Javascript engine creates an `Execution Context`, a `Global Memory` and a `Call stack`.