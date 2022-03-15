# Value Type, Reference types

- Javascript has 5 data types that are passed by value:  Boolean, null, undefined, String, Number => `primitive types`.
- Javascript has 3 data types that are passed by reference: Array, Function, Object. `Objects`.


* When we assign these variables to other variables using `=`, we copy the value to the new variables. They are copied by value.

```
  var x = 10;
  var a = x;

  a = 5
```
=> We copied value from x and assign to a. now a has value is 10, but it not refer to x, a diff x


- Objects are created at some location in your computed's memory. When we write `arr = []`, we're created an array in memory.
  What the variable `arr` receives is the address, the location of that array.

> Let's pretend that `address` is a new data type that is passed by value, just like `number` or `string`. An `address` points to the location, in memory, of a value that is passed by reference. Just like a string is denoted by quotation marks ('' or ""), an address will denoted by arrow brackets <>.


| Variables | Values | Address | Objects | 
| --------- | ------ | ------- | ------- |
| arr       | <#111> | #111    | []      |
| arr       | <#111> | #111    | [1]     |

* Assigning by Reference:  When a reference type value, an object, is copied to another variable using `=`, the address of that value is what's actually copied over as if it were a primitive. Objects are copied by reference instead of by value.
  
| Variables | Values | Address | Objects | 
| --------- | ------ | ------- | ------- |
| reference | <#111> | #111    | []      |
| copyRef   | <#111> |         |         |

=> When change from `copyRef`, `reference` will be changed.

* Reassigning a Reference: Reassigning a reference variable replaces the old reference.
```
 var obj = { first : "reference" }
```

 *In memory:*

| Variables | Values | Address |        Objects         | 
| --------- | ------ | ------- | ---------------------- |
| obj       | <#234> | #234    | { first: "reference" } |


 When we have a second line:
 
 ```
 var obj = { first: 'reference' };
 
 obj = { second: 'ref2' }

 ```

 *In memory:*

| Variables | Values | Address |        Objects         | 
| --------- | ------ | ------- | ---------------------- |
| obj       | <#687> | #234    | { first: "reference" } |
| obj       |        | #687    | { first: "reference" } |

* When there are no references to an object remaining, as we see for the address #234 above, the JS engine can perform garbage collection.
* Now, we can't use the object any more. In this case, we can not access it and is available to the engine for garbage collection. 


* Using == and ===
  - When using ==, we are compare value between two variables ( often compare primitive type ).
  - When using ===, we are compare location and value between two variables. If variable is object, and first variable diff reference second variable => alway return false.


* Passing Parameters through Functions

  - When we pass primitive values into a function, the function copies the values into its parameters. It's effectively the same as using `=`.

```
 var hundred = 100;
 
 var two = 2;
 
 function multiply(x, y) {
 
 return x * y;

 }
 
 var twoHundred = multiply(hundred, two);
```

| Variables | Values | Address |        Objects         | 
| --------- | ------ | ------- | ---------------------- |
| hundred   | 100    | #333    | function(x,y)          |
| two       | 2      |         |                        |
| multiply  | #333   |         |                        |
| x         | 100    | #333    | function(x,y)          |
| y         | 2      |         |                        |


 - When we pass object into a function, it pass reference object, but it has two case
   + Modify reference

```
 function changeAgePure(person) {

    var newPersonObj = JSON.parse(JSON.stringify(person));

    newPersonObj.age = 25;
 
   return newPersonObj;

 }
 
 var alex = {
 
    name: 'Alex',

    age: 30

 };

 var alexChanged = changeAgePure(alex);

 console.log(alex); // -> { name: 'Alex', age: 30 }

 console.log(alexChanged); // -> { name: 'Alex', age: 25  }

```
   + Assign new value

```
 function changeAgePure(person) {

   person.age = 25;
   
   person = { 
     name: truong,
     age: 20
   }

   return person;

 }
 
 var alex = {
 
    name: 'Alex',

    age: 30

 };

 var alexChanged = changeAgePure(alex);

 console.log(alex); // -> { name: 'Alex', age: 30 }

 console.log(alexChanged); // -> { name: 'Alex', age: 25  }

```

