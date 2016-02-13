var x = 10;
var y = 20;

var a = x + y;
var b = x - y;
var c = x * y;
var d = x / y;


document.getElementById("add").innerHTML = "When I add " + x + " to " + y  + " I get: " + a;
document.getElementById("subtract").innerHTML = "When I subtract " + x + " from " + y + " I get: " + b;
document.getElementById("multiply").innerHTML = "When I multiply " + x + " by " + y + " I get: " + c; 
document.getElementById("divide").innerHTML = "When I divide " + x + " by " + y  + " I get: " + d;


document.getElementById("add").style.fontFamily = "Verdana"; 
document.getElementById("subtract").style.fontFamily = "Verdana"; 
document.getElementById("multiply").style.fontFamily = "Verdana"; 
document.getElementById("divide").style.fontFamily = "Verdana"; 

document.getElementById("add").style.color = "blue"; 
document.getElementById("subtract").style.color = "green"; 
document.getElementById("multiply").style.color = "red"; 
document.getElementById("divide").style.color = "orange"; 



