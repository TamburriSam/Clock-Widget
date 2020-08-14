//Name Prompt
let sign = prompt("What's your name?");

document.getElementById('name-container').innerHTML = "Hello, " + sign;

//New day of the week
function dateNew(){
  let d = new Date();
  let n = d.getDay();
  if (n === 1){
    return n = 'Monday'
  } else if (n === 2){
    return n = 'Tuesday'
  } else if (n === 3){
    return n = 'Wednesday'
  } else if (n === 4){
    return n = 'Thursday'
  } else if (n === 5){
    return n = 'Friday'
  } else if (n === 6){
    return n = 'Saturday'
  } else {
    return n = 'Sunday'
  };
 let result = 'Today is: ' + n ;
}

document.getElementById('day-container').innerHTML = dateNew();

//Current time
 function timeNew() {
  var d = new Date();
  var n = d.getHours();
  var x = d.getMinutes();
  var r = d.getSeconds();
   //Using toLocaleString for 12hour conversion
  var w = d.toLocaleString('en-US', { hour: 'numeric', hour12: true });

  var time = (w + ' : '+ x +' : ' + r);
   
  document.getElementById("minute-container").innerText = time;
   
    document.getElementById("minute-container").textContent = time;
   
   setTimeout(timeNew, 1000);
}


timeNew();

//New Date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("date-container").innerText = date;

//Media Queries

