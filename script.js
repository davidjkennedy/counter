// Pseudo Code
// 1
// Set up the variables
let base = document.getElementById('base');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');

// 2
// On page load set the value of base is reset to 0
function reset() {
  base = 0;
  // console.log(base);
}

// 3
// when plus button is clicked 1 is added to base and new value is assigned to base
function plus1() {
  base += 1;
  console.log(base);
  document.getElementById("base").innerHTML = base;
}

// 4
// When minus button  is clicked 1 is subtracted from base new value is assigned to base
function minus1() {
  base -= 1;
  console.log(base);
  document.getElementById("base").innerHTML = base;
}
