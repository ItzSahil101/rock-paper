let userScore = 0;
let comScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let user = document.querySelector("#user-score");
let computer = document.querySelector("#comp-score");




const genComChoice = () => {
    const options = ["paper", "scissors", "rock"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

// const genComChoice = ()=>{
// const options = ["paper", "scissors", "rock"]
// const ranIdx = Math.floor(Math.random() *3);
// return options[ranIdx];
// }


const drawGame = ()=>{
    console.log("Game was Draw.")
    msg.innerText = "Game was Darw. Play Again"
    msg.style.backgroundColor = "brown";

}


const showWinner = (userWin, userChoice, comChoice)=>{
    if(userWin){
      userScore++
      user.innerText = userScore;
        console.log("Congrats ! You Won")
        msg.innerText = `Congrtas! You Win! Your ${userChoice} beat ${comChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        comScore++;
      computer.innerText = comScore;
        console.log("Sad ! You Lost")
        msg.innerText = `Sad! You Lost! ${comChoice} beat your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}



const playGame = (userChoice)=>{
    console.log("user choose", userChoice)
    let comChoice = genComChoice();
    console.log("computer choose", comChoice)

    if(userChoice === comChoice){
        drawGame();
    }
    else{
        let userWin = true;
if(userChoice === "rock"){
    userWin = comChoice === "paper"? false : true;
}else if(userChoice === "paper"){
    userWin = comChoice === "scissors"? false : true;
}
else{
    userWin = comChoice === "rock"? false : true;
}
showWinner(userWin,userChoice,comChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
playGame(userChoice);
    })
})


