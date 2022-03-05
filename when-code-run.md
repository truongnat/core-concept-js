# When code javascript run?

 * When code javascript run, it creates:
   
   + a `Global Execution Context` ( execution function ): Initial this Execution Context will consist of two thins: a global object and a variable call `this`. `This` will reference the global object which will be window if you're running javascript in browser of global if you're running it in a Node Environment. It has two phases : ( `Creation`, `Execution` ).

     - `Global Execution Context`: This is the default or base execution context. The code that is not inside any function is in the global execution context. It performs two things: it creates a global object which is a window object( in the case  of browsers ) and sets the value of `this` to equal to the global object. There can only be one global execution context in a program. The Javascript engine will:
  
       (1). Create a global object.

       (2). Create an object call "this".

       (3). Setup memory space for variables and functions.

       (4). Assign variable declarations a default value of "undefined" while placing any function declarations in memory.
  
     - `Functional Execution Context`:  Every time a function is invoked, a brand new execution context is created for that function. Each function has its own execution context, but it's created when the function is invoked or called. There can be any number of function execution context.
  
       (1). Create a global object. => Only `Global Execution Context`.

       (1). Create an arguments object.

       (2). Create an object call "this".

       (3). Setup memory space for variables and functions.
       
       (4). Assign variable declarations a default value of "undefined" while placing any function declarations in memory.

     - `Eval Function Execution Context`: Code executed inside an `eval` function also gets its own execution context, but as `eval` isn't usually used by Javascript developers. 
     - >  This process of assigning variable declarations a default value of `undefined` during the creation phase is call `Hoisting`.
   + a `Global Memory` ( global variables, declare function )

 * When call a function in your code, yet another thing has to happen when you run a function javascript:
   
   + First, the function appears in the `Global Execution Context`.
   + Then, another mini-context appears alongside the function, that little new box is called : `Local Execution Context`
   + Notice, when declaring a variable and assigned with another function ( function return any value ), it has a value of undefined at first, then as soon as function appears in the `Global Execution Context` the function executes and return Value


> The Javascript engine creates an `Execution Context`, a `Global Memory` and a `Call stack`.
> [See Visualize code](https://ui.dev/)