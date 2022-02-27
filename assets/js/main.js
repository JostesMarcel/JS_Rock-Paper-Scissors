let userScore = 0
let computerScore = 0
const userScoreSpan = document.getElementById('user-score')
const computerScoreSpan = document.getElementById('computer-score')
const scoreBoard = document.querySelector('.score-board')
const result = document.querySelector('.result > p')
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissors = document.getElementById('s')
let amoutOfTries = undefined
let removeRound = document.getElementById('removeRound')
let headQuest = document.getElementById('headQuest')
let showRound = document.getElementById('show-rounds')
let roundCount = 0

choseRound = (amount) => {
    amoutOfTries = amount
    console.log(amoutOfTries);
    removeRound.classList.add('invisible')
    removeRound.classList.remove('show-rounds')
    printGuessTries(roundCount)

}
printGuessTries = (number) => {
    winOrLose.innerHTML = `${number} / ${amoutOfTries}`
}
function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}
function convertWords(letter) {
    if (letter === 'r') return 'Rock'
    if (letter === 'p') return 'Paper'
    if (letter == 's') return 'Scissors'
}
function win(userChoise, computerChoice){
    roundCount++
    printGuessTries(roundCount)
    userScore++
    wOrL()
    userScoreSpan.innerHTML = userScore
    computerScoreSpan.innerHTML = computerScore
    let userColor = 'Your '.fontsize(4).fontcolor('green')
    let compColor = 'Comp '.fontsize(4).fontcolor('blue')
    result.innerHTML = `${userColor}${convertWords(userChoise)} beats ${compColor}${convertWords(computerChoice)}. You win 🏆`
    document.getElementById(userChoise).classList.add('green-glow')
    setTimeout(function() {
        document.getElementById(userChoise).classList.remove('green-glow')
    },500)
    console.log(userScore);
    console.log('WIN');
}
function lose(userChoise, computerChoice){
    computerScore++
    wOrL()
    userScoreSpan.innerHTML = userScore
    computerScoreSpan.innerHTML = computerScore
    let userColor = 'Your '.fontsize(4).fontcolor('green')
    let compColor = 'Comp '.fontsize(4).fontcolor('blue')
    result.innerHTML = `${userColor}${convertWords(userChoise)} loses to ${compColor}${convertWords(computerChoice)}. You lose 🤕`
    document.getElementById(userChoise).classList.add('red-glow')
    setTimeout(function() {
        document.getElementById(userChoise).classList.remove('red-glow')
    },500)
    console.log('LOSE');
}
function draw(userChoise, computerChoice){
    userScoreSpan.innerHTML = userScore
    computerScoreSpan.innerHTML = computerScore
    let userColor = 'Your '.fontsize(4).fontcolor('green')
    let compColor = 'Comp '.fontsize(4).fontcolor('blue')
    result.innerHTML = `${userColor}${convertWords(userChoise)} equals ${compColor}${convertWords(computerChoice)}. Its a Draw 🤝`
    document.getElementById(userChoise).classList.add('gray-glow')
    setTimeout(function() {
        document.getElementById(userChoise).classList.remove('gray-glow')
    },500)
    console.log('DRAW');
}
function game(userChoise) {
    const computerChoice = getComputerChoice()
    switch (userChoise + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoise, computerChoice)
            console.log('Wins');
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoise, computerChoice)
            console.log('Loose');
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoise, computerChoice)
            console.log('Draw');
            break;
    }
    console.log('CPU choise: ' + computerChoice);
    console.log('MY choise: ' + userChoise);
}
function main() {
    rock.addEventListener('click', function() {
        console.log('click: rock');
        game('r')
    })
    paper.addEventListener('click', function() {
        console.log('click: paper');
        game('p')
    })
    scissors.addEventListener('click', function() {
        console.log('click: scissors');
        game('s')
    })
}
main()
let winOrLose = document.getElementById('winOrLose')
function wOrL(){
    if (computerScore >= amoutOfTries) {
        winOrLose.innerHTML = `<h2>Game Over ☠️</h2>`
    } if (userScore >= amoutOfTries) {
        winOrLose.innerHTML = `<h2>Victory 🥇</h2>`
    }
}
function restart() {
    window.location.reload();
}