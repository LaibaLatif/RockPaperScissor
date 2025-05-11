let compScore = 0;
let userScore = 0;

let Choices = document.querySelectorAll(".choice");
let showStatus = document.querySelector("#msg");
let userScorePara = document.querySelector(".pScore");
let compScorePara = document.querySelector(".cScore");

const GenerateCompChoice = () => {
    option = ["rock","paper","scissor"]
    //generation of choice
    chIndx = Math.floor(Math.random() * 3);
    //console.log(option[chIndx]);
    return option[chIndx];
}


const showWinner = (userWin) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("user won!");
        showStatus.style.color = "#0f0fb0";
        showStatus.innerText = "You won!";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("computer won!");
        showStatus.style.color = "red";
        showStatus.innerText = "You Lost!";
    }
}

const drawGame = () => {
    //console.log("Game was draw");
    showStatus.innerText = "Game Was Draw!";
    showStatus.style.color = "#bb9457";
}

const playgame = (userChoice) => {
    compChoice = GenerateCompChoice();
    //console.log(compChoice);
    
    let userWin = true;

    if (userChoice === compChoice)
    {
        drawGame();
    }
    else{
        if(userChoice === "paper")
        {
            userWin = compChoice === "rock" ? true : false;
        }
        else if(userChoice === "rock")
        {
            userWin = compChoice === "scissor" ? true : false;
        }
        else {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }
}

Choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        //console.log(userChoice);
        playgame(userChoice);
    });
});