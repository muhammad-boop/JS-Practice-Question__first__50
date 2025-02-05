// Question__44
function sumAray(arr) {
  let result = arr.reduce(function (a, b) {
    return a + b;
  });

  console.log(result);
}
sumAray([1, 2, 3, 4, 5]);
