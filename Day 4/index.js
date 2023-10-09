//for in loop
// const number =[45,8,9,16,3];
// for(let x in number){
//     console.log(number[x]);
// }

//FUNCTION
// function mult(a,b){
//     console.log(a*b);
// }
// mult(2,3);
// function tocelcius(f){
//     return (5/9)*(f-32);
// }
// let value = tocelcius(35);
// console.log(value);

//calling a function button
// var click = flase;
// function clickMe()
// {
//     if(!click){
//     document.getElementById("elm").style.color="red";
//     document.getElementById("elm").style.fontSize="30px";
//     click = true;
//  }
//     else{
//          document.getElementById("elm").style.color="black";
//          document.getElementById("elm").style.fontSize="10px";
//          click = flase;
//          }
// }
//other way to write a function
// const fun=()=>{
//     console.log("arrow function");
// }
// fun();
//hoisting
// var x=7;
// function getname(){
//     console.log("namaste js");
// }
// getname()
// console.log(x);
// getname()
// console.log(getname);
// var x=7;
// console.log(x);
// function getname(){
//     console.log("namaste js");
// }
//to access documents from html file
// document.getElementById("elem");
// document.getElementById("elem").innerHTML="hello world";//manipulate things written in html(div)
// document.getElementById("elem").style.color="red";//change the color of the text present in div
// document.getElementById("elem").style.fontSize="50px";//to change the font size
//accessing  anchor tag from index.html
// var d=document.getElementsByTagName("a");
// for(var i=0;i<d.length;i++){
//     d[i].style.color="green";
// }
// console.log(d);
//onkeydown
// function myFunction(){
//     alert("fnlsknlkdfns");
// }
//onemouseandonmouseoverevents
// function onmouseoverpara(){
//     var d=document.getElementById("para");
//     d.style.color="red";
//     d.style.fontSize="50px";
// }
// function onmouseoutpara(){
//     var d=document.getElementById("para");
//     d.style.color="black";
//     d.style.fontSize="10px";
// }

// document.getElementById("tryit").addEventListener("click",displaydate())
// event listener
// function displaydate(){
//     document.getElementById("demo").innerHTML=Date();
//     console.log("clicked");
//     document.getElementById("demo").removeEventListener("click",displaydate())
// }