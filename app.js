var userScore = 0;
var cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
    const choices = ['r', 'p', 's'];
    randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
    
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}

function win(userChoice, cpuChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    // ((ES5)) result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(cpuChoice) + ". You win!";
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(cpuChoice)}. You win!`; //ES6
    document.getElementById(userChoice).classList.add('green-light');
    // ((ES5)) setTimeout(function() { document.getElementById(userChoice).classList.remove('green-light')}, 300);
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-light'), 300); //ES6
}

function lose(userChoice, cpuChoice) {
    cpuScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_div.innerHTML = `${convertToWord(cpuChoice)} beats ${convertToWord(userChoice)}. You lose!`; //ES6
    document.getElementById(userChoice).classList.add('red-light');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-light'), 300); // ES6
}

function draw(userChoice, cpuChoice) {
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_div.innerHTML = "It's a tie!";
    document.getElementById(userChoice).classList.add('grey-light');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-light'), 300); //ES6
}

function game(userChoice) {
    const cpuChoice = getCompChoice();
    switch (userChoice + cpuChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, cpuChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, cpuChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, cpuChoice);
            break;
    }
}

function main() {
rock_div.addEventListener('click', function(){
    game("r");
})

paper_div.addEventListener('click', function(){
    game("p");
})

scissors_div.addEventListener('click', function(){
    game("s");
})
}

main();










// Current time
// https://youtu.be/jaVNP3nIAv0?t=3336