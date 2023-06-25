
var r1 = Math.floor(Math.random()*6)+1;
var s1 = "images/dice"+ r1+".png";
var r2 = Math.floor(Math.random()*6)+1;
var s2 = "images/dice"+ r2+".png";
var h1 = document.querySelectorAll("img")[0];
var h2 = document.querySelectorAll("img")[1];
h1.setAttribute("src",s1);
h2.setAttribute("src",s2);
if(r1>r2){
    document.querySelector("h1").innerHTML=("Player1 Won");
}
else if(r1<r2){
    document.querySelector("h1").innerHTML=("Player2 Won");
}
else{
    document.querySelector("h1").innerHTML=("Inkosari Refresh kottu...");
}