function playRPS(){
    var user = document.getElementById("userInput");
    user = user.value.toLowerCase();
    document.getElementById("userOutput").innerHTML = "User chose " + user;
    var compchoice = computer();
    document.getElementById("computerOutput").innerHTML = "Computer chose " + compchoice;
    game(user, compchoice);
}
function computer(){
    var rps = "";
    var computerchoice = Math.floor(Math.random()*3)+1;
        if(computerchoice == 1){
            rps = "rock";
        }else if(computerchoice == 2){
            rps = "paper";
        }else{
            rps = "scissors";
        }
        return rps;
         
    
}
function game(computer,player){
    if(computer == player){
        document.getElementById("rpsOutput").innerHTML = " You tied";
    }else if(computer == "rock" && player == "scissors" || computer == "paper" && player == "rock" || computer == "scissors" && player == "paper"){
     document.getElementById("rpsOutput").innerHTML = " You lost";
    }else
    document.getElementById("rpsOutput").innerHTML = " You won!";
}
