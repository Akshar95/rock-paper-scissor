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

function win(userChoice, compChoice) { //parameters given and defining the win function
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = userChoice + " beats " + compChoice + ". You win!";
}

function lose() {
    console.log("Loses");
}

function draw() {
    console.log("draws");
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