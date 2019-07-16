/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let time = parseInt(string, 10)
  if (time < 12) {
    return "Good Morning"
  } else if (time >= 12 && time < 17) {
    return "Good Afternoon"
  } else if (time > 17) {
    return "Good Evening"
  } else if  (time === "undefined") {
    return "TEST"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string){
  let hello = document.querySelector("#greeting")
  hello.innerText = string
}