// First, using the function keyword, we create a function with the identifier sameSquared

// Our function sameSquared needs two parameters, a first array and a second array.

function sameSquared(firstArr, secondArr) {
  // check that both parameters have truthy values, that is not null, undefined, and so on.

  // We can check for a falsy value by using the ! operator. If firstArr or secondArr is falsy, we return false.
  if (!firstArr || !secondArr) {
    return false;
  }

  // ensure that the length of both arrays are the same. If they are different, we know that they can not contain an equal amount of shared values.

  // By checking the length property on both parameters, we can determine if they are the same. If they are not, we return false.
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  // We need to keep track of all values in at least one of the arrays. To do this, and to avoid a nested loop, we can store these values in a hash table (object). I’ll call mine lookup.
  const lookup = {};

  // Using a for of loop, we iterate through the firstArr. Inside of the for of block, we assign the key to the result of value * value.

  // The value in this key/value pair will be a frequency counter that reflects how many times a specific value is “seen” in the firstArr.

  // First, we check if lookup contains an entry for value * value, if it does, we add 1 to it. If it does not, we assign the value to 0 and then add 1.

  for (value of firstArr) {
    lookup[value * value] = (lookup[value * value] || 0) + 1;
  }

  // We start by creating another for of loop. On the first line inside of our new for of block, we write a conditional statement to check if the current value from our secondArr is not inside of our lookup. If it is not, we stop looping and return false.

  // If the value from the secondArr is in our lookup, we want to decrement the value of that entry. We can do so by using the -= assignment operator.

  for (secondValue of secondArr) {
    if (!lookup[secondValue]) {
      return false;
    }
    lookup[secondValue] -= 1;
  }
  // If we finish iterating through the secondArr without returning false, that means that our firstArr contains all values that are in a squared state in the secondArr. Therefore, we return true outside of for of loop.
  return true;
}

console.log(sameSquared([1, 2, 3], [4, 1, 9]));
