function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: any): number {
  if (typeof b === 'number') {
    return a + b;
  } else {
    return a; // or throw an error: throw new Error('b must be a number');
  }
}

let result1 = add(1, 2); // Works correctly
let result2 = addSafe(1, '2'); // Handles the string input gracefully
let result3 = addSafe(1, 3); // works correctly
console.log(result1, result2, result3); // 3 1 4