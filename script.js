// Function OnClick Button Dice Randomally Generate Number Base on Number Picked Picked
function changeDiceNumber(){
    let player1=Math.floor(Math.random()*6+1) //Randome Number for Player 1 Gerenate
    let player2=Math.floor(Math.random()*6+1)  //Randome Number For Player 2 Generate

    document.querySelector(".firstPlayer").src=`./images/dice${player1}.png`; 
    document.querySelector(".secondPlayer").src=`./images/dice${player2}.png`;
    // Checking
    if(player1>player2)
        document.querySelector(".heading").innerHTML="🚩Player 1 Winner!"
    else if(player2>player1)
        document.querySelector(".heading").innerHTML="Player 2 Winner! 🚩"
    else
        document.querySelector(".heading").innerHTML=" 🚩 Draw ! 🚩"
}