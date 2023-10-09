//conditional statements in javascript

// let greeting;
// let hour = 4;
// if (hour < 18) {
//   greeting = "Good day";
// } else  {
//   greeting = "Good evening";
// }
// console.log(greeting);

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// console.log(day);

// let text = "";

// for (let i = 0; i < 5; i++) {
//   text = "The number is " + i;
//   console.log(text);
// }

// let text = "";
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let text = "";
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// const numbers = [45, 4, 9, 16, 25];

// for (let x in numbers) {
//   console.log(numbers[x]);
// }

// console.log("Hello World");

// function myFunction(a, b) {
//   console.log(a * b);
// }
// myFunction(4, 3);

// function toCelsius(f) {
//   return (5 / 9) * (f - 32);
// }
// let value = toCelsius(77);
// console.log(value);

// const fun = () => {
//   console.log("arrow function");
// };
// fun();

//Hoisting

// var x = 7;

// function getName() {
//   console.log("Namaste Javascript");
// }
// getName();
// console.log(x);
// console.log(getName);

document.getElementById("elm").innerHTML = "Hello World";

var click = false;
function clickMe() {
  if (!click) {
    document.getElementById("elm").style.color = "red";
    document.getElementById("elm").style.fontSize = "30px";
    click = true;
  } else {
    document.getElementById("elm").style.color = "black";
    document.getElementById("elm").style.fontSize = "10px";
    click = false;
  }
}

var d = document.getElementsByTagName("a");
for (var i = 0; i < d.length; i++) {
  d[i].style.color = "green";
}
console.log(d);
function myFunction() {
  alert("hdscdhcehcvhde");
}

function onMouseOverPara() {
  var d = document.getElementById("para");
  d.style.color = "red";
  d.style.fontSize = "30px";
}
function onMouseOutPara() {
  var d = document.getElementById("para");
  d.style.color = "black";
  d.style.fontSize = "10px";
}

document.getElementById("tryit").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
  console.log("clicked");
  document.getElementById("tryit").removeEventListener("click", displayDate);
  document.getElementById("tryit").addEventListener("click", myFun);
}

function myFun() {
  alert("Hello World");
}
