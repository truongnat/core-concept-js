# Primary Types.

  * Concept: Javascript is a loosely typed and dynamic language. Variables in Javascript are not directly associated with any particular value type, and any variable can be assigned ( and re-assigned ) values of all types. The set of types in the Javascript language consists of `primitive values` and `objects`.
    - `Primitive types`: immutable datum represented directly at the lowest level of the language.
      + `Boolean type`: Boolean represents a logical entity and can have two values: `true` and `false`. With `Boolean` it is a function, you can pass arguments and it convert and return primitive boolean.
  
      + `Null type`: The `Null` types has exactly one value: `null`. In computer science, a `null` value presents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations.
      In Js, null is marked as one of as `primitive values`, because its behavior is seemingly primitive. `typeof null === 'object'`


      + `Undefined type`: A variable that has not been assigned a value has the value `undefined`.


      + `Number type`: is a double-precision 64-bit binary format IEEE 754 value.  In addition to representing floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN ("Not a Number").
  
      + `BigInt type`: The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.
  
      + `String type`: JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.


      + `Symbol type`: ymbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms".
  
    - `Objects` ( collection of properties ): In computer science, an object is a value in memory which is possibly referenced by an identifier - [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects).
    - `Dates`: When representing dates, the best choice is to use the built-in Date utility in JavaScript.
    - `Arrays`: Arrays are regular objects for which there is a particular relationship between integer-keyed properties and the length property.
    - `Keyed collections: Maps, Sets, WeakMaps, WeakSets`: These data structures, introduced in ECMAScript Edition 6, take object references as keys. Set and WeakSet represent a set of objects, while Map and WeakMap associate a value to an object.
    - `Typed Arrays`: are new to JavaScript with ECMAScript 2015, and present an array-like view of an underlying binary data buffer.
    - `JSON`: ON (JavaScript Object Notation) is a lightweight data-interchange format, derived from JavaScript, but used by many programming languages. JSON builds universal data structures.