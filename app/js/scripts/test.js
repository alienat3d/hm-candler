export function testFunction() {
  function sayHi() {
    return (() => 0)();
  }
}
console.log(typeof sayHi());