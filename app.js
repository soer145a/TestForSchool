function fireCheck() { // Fired from button
  const int1 = input1.value;
  const int2 = input2.value;
  const int3 = input3.value;
  calcTotal(int1, int2, int3);
}
function calcTotal(a, b, c) { // Calculator for product
  const display = a + b + c;
  const target = document.querySelector("#target");
  target.textContent = display;
  return display;
}
// output to test performance
module.exports = calcTotal;
