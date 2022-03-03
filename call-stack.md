# Call Stack

 * `Concept`: A Call stack is a mechanism for an interpreter ( like the Javascript interpreter in a web browser ) to keep track of its place in a script that calls multiple functions. What function is currently being run and what functions are called from within that functions,etc.
    - When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
    - Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
    - When the current function is finished, the interpreter takes it off the stack and resumes execution where it left of in the last code listing.
    - If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.

 
 *  `LIFO`: a call stack is a data structure that uses the Last In, First Out ( LIFO ) principle to temporarily store and manage function invocation ( call ).
    - When we say that the call stack, operates by the data structure principle of Last In, Fist Out, it means that the last function that gets pushed into the task is the first to be pop out, when the function returns.
    - `Temporarily Store`: When a function is invoked ( called ), the function, its parameters, and variables are pushed into the call stack to form a stack frame. This task frame is a memory location in the stack. The memory is cleared when the function returns as it is pop out of the stack.
    - `Manage function invocation ( call )`:  The call stack maintains a record of the position of each stack frame. It knows the next function to be executed ( and will remove it after execution ). This is what makes code execution in Javascript synchronous.

> *In summary,then, we start an empty Call Stack. Whenever we invoke a function, it is automatically added to the Call Stack. Once the function has executed all off its code, it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.*.

> [Demo](http://latentflip.com/loupe)

```

  > Summary

  1. It is single-threaded. Meaning it can only do one thing at a time.
  2. Code execution is synchronous.
  3. A function invocation creates a stack frame that occupies a temporary memory.
  4. It works as a LIFO - Last In, First Out data structure. 


```