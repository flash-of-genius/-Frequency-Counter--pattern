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
}
