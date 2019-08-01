//Given an array. Write a recursive function that removes the first element and returns the given array.
//(without using arr.unshift(),assign second element to first, third element to second...)
function removeFirstElement(arr = [], ind = 0){
  if(ind >= arr.length-1){
    if (typeof arr == "undifined" || arr.length == 0){
      arr = [];
    }
    else{
      arr.length -= 1;
    }

    return arr;
  }
  else{
    arr[ind] = arr[ind +1];
    removeFirstElement(arr, ind+1);
  }
return arr;
}
