// Question_46
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(fact);
}

factorial(9);
