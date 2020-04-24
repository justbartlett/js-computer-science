// Set
// The Set object lets you store unique values of any type, whether primitive values or object references.
const set1 = new Set([1, 2, 3, 4, 5]);

// Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
let myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (let [key, value] of myMap) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one


// Stack
// last in first out
// this is where push and pop terms come from
// true stack will only allow you to take things off the top
// peek is let me see whats on the top without pulling it off

// Queue is first in, first out

