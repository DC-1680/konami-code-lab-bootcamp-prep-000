const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.which);

  let index = 0;

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
/*
const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  console.log(e.which)
})
*/
