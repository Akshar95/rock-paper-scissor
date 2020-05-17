let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getCompChoice () {
    const choices = ['r', 'p', 's']; //the three choices comp can take in an array
    const randomNumber = Math.floor (Math.random() * 3 ); //returns a random whole number 0/1/2
    return choices[randomNumber];
}

function convertToWord (letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice) { //parameters given and defining the win function
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "USER".fontsize(3).sub();
    const smallCompWord = "COMP".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord} You Win!`; //EIS6 strings, ${} added to functions 
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "USER".fontsize(3).sub();
    const smallCompWord = "COMP".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(compChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord} You Lose!`; //EIS6 strings, ${} added to functions 

}

function draw(userChoice, compChoice) {
    userScore++;
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "USER".fontsize(3).sub();
    const smallCompWord = "COMP".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} and ${convertToWord(compChoice)}${smallCompWord} are the same! You draw!`; //EIS6 strings, ${} added to functions 

}

function game(userChoice) { //function defined for game with argument userChoice which is what the user clicks on and compare against the comp choice
   const compChoice = getCompChoice(); //uses above function to generate a choice and set as variable
   //time to start compare and put results (https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/ch04.html#if-else_versus_switch)
   switch (userChoice + compChoice) {
    //cover al the cases the user wins   
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, compChoice); // running win function and passing in what (argumetns) the choices are made
        break;
    //Comp wins
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, compChoice);
        break;
    // Draw
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, compChoice);
        break;
   } 
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r"); //game function with argument r when clicked on rock
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissor_div.addEventListener('click', function() {
        game("s");
    })
}

main(); //this runs the main function