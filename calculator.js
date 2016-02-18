```
  calc = {
  add:function(num1, num2) {
      console.log(num1 + num2);
      return num1 + num2;
    };
  sub:function (num1, num2) {
    console.log(num1 - num2);
    return num1 - num2;
  }
  mult:function ( num1, num2 ) {
    console.log( num1 * num2 );
    return num1 * num2;
  }
  div:function (num1, num2) {
    console.log(num1 / num2);
    return num1 / num2;
  }
  exp:function math.pow (4, 3);
    console.console.log(4,3);
    return 4,3
```

### Bonus 1

Give your calculator memory and allow it to persist the result of multiple operations.
* Store this result in a `value` property.
* Example: running `calculator.add(1,2)`, `calculator.add(2,2)` and `calculator.mutliply(2,2)` in sequence would result in a `value` of 10.
* Give your calculator a `clear` method that resets `value`.

### Bonus 2

Give your calculator a "master" method that can parse through a string of operations (e.g., `(2 - 1) * (5 ^ 2)`)
* Your calculator should still have memory.
