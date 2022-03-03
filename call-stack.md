# Call Stack

 * Concept: A Call stack is a mechanism for an interpreter ( like the Javascript interpreter in a web browser ) to keep track of its place in a script that calls multiple functions. What function is currently being run and what functions are called from within that functions,etc.
    - When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
    - Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
    - When the current function is finished, the interpreter takes it off the stack and resumes execution where it left of in the last code listing.
    - If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.


> *In summary,then, we start an empty Call Stack. Whenever we invoke a function, it is automatically added to the Call Stack. Once the function has executed all off its code, it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.*.

> [Demo](http://latentflip.com/loupe)