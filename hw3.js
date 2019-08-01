function sumOfDigits(num){
  let sum = 0;
    while(num != 0){
      let d = num % 10;
      sum += d;
      num = Math.floor(num / 10);
    }
    if(sum > 10){
    return sumOfDigits(sum);
  }
  else return sum;
}
