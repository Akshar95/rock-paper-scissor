const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const scoreboard_div = document.querySelector("score-board")
const result_div = document.querySelector("result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")

function game(userChoice) {
    console.log("boiboiboi    " + userChoice);
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissor_div.addEventListener('click', function() {
        game("s");
    })
}

main();