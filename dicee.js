var str1="images/dice"+(Math.floor(Math.random()*6)+1)+".png";
var str2="images/dice"+(Math.floor(Math.random()*6)+1)+".png";
document.querySelector(".img1").src=str1;
document.querySelector(".img2").src=str2;
if(str1>str2){
    document.querySelector("h1").innerText="Player 1 Win";
}
else if(str1<str2){
    document.querySelector("h1").innerText="Player 2 Win";
}
else{
    document.querySelector("h1").innerText="Draw";

}