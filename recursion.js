let wr = (msg='--------') => document.write(`<br>${msg}`);

function basicRecursion(max, current) {
  // the base case 
  if (current > max) return; // if you dont write this first you get stack overflow (when do i stop)
  wr(current);
  basicRecursion(max, current+1);
}

basicRecursion(5,1);
wr();
wr();

function fibonacci(n) {
    if(n <= 2) { // base case if its less than or equal to 2. thats a given number. 1
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

for (var i = 1; i <= 20; i++) {
  wr(`${i}. ${fibonacci(i)}`);
}


/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 
*/

function factorial (n) {
  if (n < 2) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}
  
// unit tests
// do not modify the below code
describe('factorial', function() {
  it('should do factorials', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
  });
});


