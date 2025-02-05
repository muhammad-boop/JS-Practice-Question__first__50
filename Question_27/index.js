// Question_27
var hold = 1;
for (let i = 1; i < 4; i++) {
  let str = "";
  for (let j = 1; j < 4; j++) {
    str = str + `${hold}`;
    hold++;
  }
  console.log(str);
}
