/* Given Code, don't edit */
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr) {
  const hour = parseInt(timeStr);
  if ( hour < 12) return "Good Morning"

  if ( hour > 17) return "Good Evening"
  else return "Good Afternoon"
} 

// this should wrk but ¯\_(ツ)_/¯
// function greet(string){
//   let returnedGreeting = ''; 
//   let refactoredString = parseInt(string);
//   debugger
//     console.log(refactoredString);
    
//   if(refactoredString < 1200){
//     return returnedGreeting  ="Good Morning";
//   }else if(refactoredString >= 1200 && refactoredString <= 1700){
//     return returnedGreeting  ="Good Afternoon";
//   }else{
//     return returnedGreeting  = "Good Evening";
//   }
// }

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
