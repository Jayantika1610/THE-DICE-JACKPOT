var m=Math.floor(Math.random()*6)+1;
var n=Math.floor(Math.random()*6)+1;
var p=Math.floor(Math.random()*6)+1;

if (m===n && n===p){
    document.querySelector(".title").innerHTML="JACKPOTT!!";
}
else{
    document.querySelector(".title").innerHTML="TRY AGAIN!";
}

var randomImgsrc1="/images/dice"+m+".png";
var randomImgsrc2="/images/dice"+n+".png";
var randomImgsrc3="/images/dice"+p+".png";
document.querySelector(".dicem img").src=randomImgsrc1;
document.querySelector(".dicen img").src=randomImgsrc2;
document.querySelector(".dicep img").src=randomImgsrc3;