var n =(Math.floor(Math.random()*6)+1);
var m =(Math.floor(Math.random()*6)+1);
switch(n)
{
    case 1 :
        document.getElementsByClassName("img1")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice1.png");
        break;
    case 2 :
        document.getElementsByClassName("img1")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice2.png");
        break;
    case 3 :
        document.getElementsByClassName("img1")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice3.png");
        break;
    case 4 :
        document.getElementsByClassName("img1")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice4.png");   
        break;
    case 5 :
        document.getElementsByClassName("img1")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice5.png");        
        break;
    case 6 :
        document.getElementsByClassName("img1")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice6.png");        
        break;    
}
switch(m)
{
    case 1 :
        document.getElementsByClassName("img2")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice1.png");
        break;
    case 2 :
        document.getElementsByClassName("img2")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice2.png");
        break;
    case 3 :
        document.getElementsByClassName("img2")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice3.png");
        break;
    case 4 :
        document.getElementsByClassName("img2")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice4.png");   
        break;
    case 5 :
        document.getElementsByClassName("img2")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice5.png");        
        break;
    case 6 :
        document.getElementsByClassName("img2")[0].setAttribute("src","E:/My Space/Web Dev/Dicey Section12/images/dice6.png");        
        break;    
}
if(n>m)
{
    document.querySelector("h1").textContent="⭐Player 1Wins";
}
else if(m>n)
{
    document.querySelector("h1").textContent="Player 2Wins⭐";
}
else if(m===n)
{
    document.querySelector("h1").textContent="⭐DRAW⭐";
}