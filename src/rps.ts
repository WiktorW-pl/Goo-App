const option = Array.from([...document.querySelectorAll(".option")]) as HTMLElement[];
const btn = document.querySelector('button');
const gamesDisplay = document.querySelector('#games');
const winsDisplay = document.querySelector('#wins');
const lossesDisplay = document.querySelector('#losess');
const drawsDisplay = document.querySelector('#draws');
const playerPickDisplay = document.querySelector('#player-pick');
const aiPickDisplay = document.querySelector('#ai-pick');
const winnerDisplay = document.querySelector('#winner');

const gameProps: {
    playerPick: string | null,
    aiPick: string | null,
    games: number,
    wins: number,
    losses: number,
    draws: number,
    winner: string,
} = {
    playerPick: '',
    aiPick: '',
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    winner: ''
}

const ai = () =>{
    const aiChoice : number = Math.floor(Math.random() * 3);
    gameProps.aiPick = option[aiChoice].getAttribute('alt')
}
    option.forEach((item) =>{
        item.addEventListener('click', ()=>{ 
            for (let picked of option ){
                picked.style.backgroundColor = 'red'
            }
            item.style.backgroundColor = 'green'
            gameProps.playerPick = item.getAttribute('alt')
        })
    })
const compareSelection = () =>{
    gameProps.games++;
    if(gameProps.playerPick === ''){
        gameProps.games--;
        alert('Wybierz łapkę mordko')
         return;
    } 
    if(gameProps.playerPick === gameProps.aiPick){
        gameProps.draws++;
        gameProps.winner = "Nobody :("
    }
    if(gameProps.playerPick === 'Rock' && gameProps.aiPick === 'Paper' || gameProps.playerPick === 'Paper' && gameProps.aiPick === 'Scissors' || gameProps.playerPick === 'Scissors' && gameProps.aiPick === 'Rock'){
        gameProps.losses++;
        gameProps.winner = "Computer"
    }
    if(gameProps.playerPick === 'Rock' && gameProps.aiPick === 'Scissors' || gameProps.playerPick === 'Paper' && gameProps.aiPick === 'Rock' || gameProps.playerPick === 'Scissors' && gameProps.aiPick === 'Paper'){
        gameProps.wins++;
        gameProps.winner = "You!"
    }
}

const displayStats = () =>{
    gamesDisplay && (gamesDisplay.textContent = gameProps.winner);
    winsDisplay && (winsDisplay.textContent = gameProps.wins.toString());
    lossesDisplay && (lossesDisplay.textContent = gameProps.losses.toString());
    drawsDisplay && (drawsDisplay.textContent = gameProps.draws.toString());
    playerPickDisplay && (playerPickDisplay.textContent = gameProps.playerPick);
    aiPickDisplay && (aiPickDisplay.textContent = gameProps.aiPick);
    winnerDisplay && (winnerDisplay.textContent = gameProps.winner);
}

const startGame = () =>{
    ai()
    compareSelection()
    displayStats()
}

btn?.addEventListener('click', startGame)