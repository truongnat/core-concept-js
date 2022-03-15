
### Implicit, Explicit, Nominal, Structuring and Duck Typing

> Javascript will coerce the styles for each type separately.

  *Three types of conversion:*

    1. to string
    2. to boolean
    3. to number


- The case for the + operator
  - 1. Mathematical addition

- Objects.
  - Most Javascript Object conversions usually result in `[object Object]`.
  - Every js Object inherit a `toString` method, that is called whenever an Object  is to be converted to a string.
- Array objects.
  - The inherit `toString` method of Arrays work abit differently, it works in a way similar to calling the `join` method of array without any arguments.
- True, False and ""
  ```
  Number(true) // 1
  Number(false) // 0
  Number("") // 0

  4 + true // 5
  3 * false // 0
  3 * "" // 0
  3 + "" // "3"

  ```
  - The `valueOf` method will be used by JavaScript whenever you pass an Object where it expects a string or numeric value.
  - *When both the `toString` and `valueOf` methods are defined on an Object, Javascript uses the `valueOf` method instead.*
- Falsy and Truthy 
  - Coercion into boolean `true` means the value is `truthy`.
  - Coercion into boolean `false` means the value is `falsy`.

  ```
  1. Falsy
    - false
    - 0
    - null
    - undefined
    - ""
    - NaN
    - -0
  2.Truthy
    - if (-1) // truthy
    - if ("0") // truthy
    - if ({}) // truthy


  ```

- NaN
  - `NaN` is a special numeric value that is not equal to itself.
  ```
  NaN === NaN // false

  const notANumber = 3 * "a" // NaN

  notANumber == notANumber // false
  notANumber === notANumber // false

  ```