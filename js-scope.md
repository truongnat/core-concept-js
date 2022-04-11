### Function Scope, Block Scope and Lexical Scope

- A function is a subprogram designed to perform a particular task.
- Function definitions are hoisted — expressions are not.
- Functions are executed when they are called. This is known as invoking a function.
- Values can be passed into functions and used within the function. The name of the value is called a parameter. The actual value itself is called an argument.
- Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined by default.
- Functions are objects.

`So, What is Block Scope?`
 > A block is a set of opening and closing curly brackets.

We have three declared variables:
 1. var
    
    - With var, it can be reassigned and updated.
    - Var is `function scope`, what does this mean? It mean they are only available inside the function they're created in
      of if not created inside the function => they are `global scoped`. If var defined inside the function and we are try call it outside the function, it won't work.


 2. let
    - Can not accessible outside of the opening and closing curly braces of the block.
    - Can reassigned value.

 3. const
    - Can not accessible outside of the opening and closing curly braces of the block.
    - declaration is, as the name implies, constant a read only reference to a value.
    - This does not mean the value is immutable, just that the variable identifier cannot be reassigned.
- 


`What is 'this' Context?`

    - Context is most often determined by how a function in invoked. When a function is called as a method of an object. `this` is set to the object the method is call on.
    - The same principle applies when invoking a function with the new operator to create an instance of an object. When invoked in this manner, the value of this within the scope of the function will be set to the newly created instance.
    - When called as an unbound function, this will default to the global context or window object in the browser. However, if the function is executed in strict mode, the context will default to undefined.

`Execution Context`

    - When Js interpreter initially execute code, it first enters into a global execution context by default. Each invocation of a function from this point on will result in the creation of a new execution context.
    - "Execution Context" is actually for all intents and purposes referring more to scope and not context as previously discussed.
    - Each time a new execution context is created it is appended to the top of the "execution stack". The browser will always execute the current execution context that is atop the execution stack. ONe completed, it will be revmoved from the top of the stack and control will return to the execution context below.
    - An execution context can be divided into a creation and execution phase.
      - In the creation phase, the interpreter will first create a variable object ( also called an activation object ) that is composed of all the variables, function declarations, and arguments defined inside the execution context. From there the scope chain is initialized next, and the value of this is determined last. Then the execution phase, code is interpreted and executed.

