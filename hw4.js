//Given an object. Invert it (keys become values and values become keys).
//If there is more than key for that given value create an array. 
function invert(obj) {

  var new_obj = {};

  for(let key in obj){
    if(!new_obj.hasOwnProperty(obj[key])){
      new_obj[obj[key]] = key;
    }
    else{
      let arr = Array.from(new_obj[obj[key]]);
      arr.push(key);
    }
  }
  return new_obj;
};
