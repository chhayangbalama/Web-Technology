// document.getElementById("p1").innerHTML="hey this week 10";
// document.getElementById("p1").style.backgroundColor="plum";
// document.getElementsByClassName('p1')[0].innerHTML="Hey this week 10";
document.getElementsByTagName("h1")[1].innerHTML="getElementsByTagName";
var select = document.getElementsByClassName("p1");
for(var i=0; i<=select.length; i++){
    select[i].innerHTML="Hey this is week 10";
    select[i].style.cssText="background-color:plum; color:white; font-size:30px;";
}