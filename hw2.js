//Given an array of nested arrays. Write a recursive function that flattens it.
//(Hint create function that concats arrays).
function flattenArray(arr) {
  if (!arr) { return arr; }
  let newArray = [];
  for (let i in arr) {
    if (Array.isArray(arr[i])){
       newArray = newArray.concat(flattenArray(arr[i]));
    } else {
     newArray.push(arr[i]);
    }
  }
  return newArray;
}
