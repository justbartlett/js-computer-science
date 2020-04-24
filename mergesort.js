/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers
  
  To read the approach, refer to the class materials at 
  https://btholt.github.io/four-semesters-of-cs/
  
  As always, you can rename describe to be xdescribe to prevent the
  unit tests from running while you're working
  
  There is no visualization mechanism for this algorithm. Use your own
  preferred method of introspection like console.log().
*/

// basically divide in two all the way down and then stitch it together

// mergeSort we recursively split the array in the middle until array has length 1 - one member
const mergeSort = (nums) => {
  // first thing with recursion is base case
  if (nums.length < 2) { // if length 1 its sorted if 0 nothing there
    return nums
  }
  
  const length = nums.length;
  const middle = Math.floor(length / 2) // floor rounds down for you
  const left = nums.slice(0, middle) // left side of the array, 0 to the middle
  const right = nums.slice(middle) // length is always going to get you the end of the array
  
  return stitch(mergeSort(left), mergeSort(right))
}

const stitch = (left, right) => {
  const results = [];
  
  while(left.length && right.length) { // as long as there are items left in left or left in right, continue
    if (left[0] <= right[0]) {
      // compare the first elements of each array 
      results.push(left.shift()); // shift pops it off the front and then it is pushed into results
    } else {
      results.push(right.shift());
    }
  }
  
  // this handles if there is one element in the array left
  return results.concat(left, right); // same as return [...results, ...left, ...right]
}

var nums = [10,5,3,8,2,6,4,7,9,1];
var ans = mergeSort(nums);


// unit tests
// do not modify the below code
describe('insertion sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    var ans = mergeSort(nums);
    expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});