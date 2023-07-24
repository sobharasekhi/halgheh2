javascript
let b = 0;
for (let i = 1; i <= 4; i++) {
  let num = parseInt(prompt("لطفا عدد " + i + " را وارد کنید:"));
  b += num;
}
console.log("جمع اعداد وارد شده: " + b);