# When code javascript run ?

 * When code javascript run, it creates:
   
   + a `Global Execution Context` ( execution function )
   + a `Global Memory` ( global variables, declare function )

 * When call a function in your code, yet another thing has to happen when you run a function javascript:
   
   + First, the function appears in the `Global Execution Context`.
   + Then, another mini-context appears alongside the function, that little new box is called : `Local Execution Context`
   + Notice, when declaring a variable and assigned with another function ( function return any value ), it has a value of undefined at first, then as soon as function appears in the `Global Execution Context` the function executes and return Value


> The Javascript engine creates an `Execution Context`, a `Global Memory` and a `Call stack`.