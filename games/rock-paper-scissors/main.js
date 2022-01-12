const btn = document.querySelector('.btn');
const backgroundForOption = [...document.querySelectorAll('.app__option')];
const userOption = [...document.querySelectorAll('.option__img')];
const [rock, paper, scissors] = userOption;
const displayScorePlayerOption = document.querySelector('.summary__player-selection')
const displayScoreAiOption = document.querySelector('.summary__computer-selection')
const displayScoreWinner = document.querySelector('.summary__game-winner')
const displayScoreGamesNumber = document.querySelector('.stats__number-of-games')
const displayScoreNumberOfWins = document.querySelector('.stats__number-of-wins')
const displayScoreNumberOfLoses = document.querySelector('.stats__number-of-losses')
const displayScoreNumberOfDraws = document.querySelector('.stats__number-of-draws')

const score = {
    numberOfGames: 0,
    numberOfWins: 0,
    numberOfLoses: 0,
    numberOfDraws: 0,
}
const gamePanel = {
    playerChoice:'',
    aiChoice: ' ',
    winner: ' ',
}

userOption.forEach(item => item.addEventListener('click', (e)=>{
    backgroundForOption.forEach(item => item.addEventListener('click', (e)=>{
        for (one of backgroundForOption ){
            one.classList.remove('taken')
        }
        item.classList.add('taken');
    }))
    for (one of userOption ){
        one.classList.remove('chosen');
    }
    item.classList.add('chosen');
    if(item.classList.contains('chosen')){
        gamePanel.playerChoice = item;
    }
}))

const ai = () =>{
    const index = Math.floor(Math.random() * userOption.length);
    const computer = userOption[index];
    gamePanel.aiChoice = computer;
}

const checkWinner = () =>{
    score.numberOfGames++;
    if(gamePanel.playerChoice === ''){
        score.numberOfGames--;
        alert('Wybierz łapkę mordko')
         return;
    } 
    if(gamePanel.playerChoice === gamePanel.aiChoice){
        score.numberOfDraws++;
        gamePanel.winner = "Nobody :("
    }
    if(gamePanel.playerChoice === rock && gamePanel.aiChoice === paper || gamePanel.playerChoice === paper && gamePanel.aiChoice === scissors || gamePanel.playerChoice === scissors && gamePanel.aiChoice === rock){
        score.numberOfLoses++;
        gamePanel.winner = "Computer"
    }
    if(gamePanel.playerChoice === rock && gamePanel.aiChoice === scissors || gamePanel.playerChoice === paper && gamePanel.aiChoice === rock || gamePanel.playerChoice === scissors && gamePanel.aiChoice === paper){
        score.numberOfWins++;
        gamePanel.winner = "You!"
    }
}
const startGame = () =>{
    ai();
    checkWinner();
    summary();
}

const summary = () =>{
    displayScoreGamesNumber.textContent = `Number of games played: ${score.numberOfGames}`;
    displayScoreNumberOfDraws.textContent = `Number of games draws: ${score.numberOfDraws}`;
    displayScoreNumberOfWins.textContent = `Number of games wins: ${score.numberOfWins}`;
    displayScoreNumberOfLoses.textContent = `Number of games losses: ${score.numberOfLoses}`;

    displayScoreWinner.textContent = `Game winner: ${gamePanel.winner}`;
    displayScorePlayerOption.textContent = `Player's choice: ${gamePanel.playerChoice.alt}`;
    displayScoreAiOption.textContent = `Computer's choice: ${gamePanel.aiChoice.alt}`;
}

btn.addEventListener('click', startGame);