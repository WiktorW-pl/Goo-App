const btnStart = document.querySelector('.game-panel__button');
const app = document.querySelector('.app');
const scoreText = document.querySelector('#score');
const radio = [...document.querySelectorAll('.game-panel__input')];
const reset = document.querySelector('#reset');
let score = 0;

const startGame = () =>{
    if(!radio[0].checked && !radio[1].checked && !radio[2].checked){
        alert('Wybierz poziom trudności');
        return;
    }
    score = 0;
    startInterval = setInterval(createDot, 1000);
    StartTimer();
}

let difficulty;
const createDot = () =>{

    const dot = document.createElement('div');
    dot.classList.add('dot')
    app.appendChild(dot);

    if(radio[0].checked){
        difficulty = 1000;
        myInterval = setInterval(moveDot(dot), difficulty);}

    else if(radio[1].checked){
        difficulty = 800;
        myInterval = setInterval(moveDot(dot), difficulty);}
        
    else if (radio[2].checked){
            difficulty = 600;
            myInterval = setInterval(moveDot(dot), difficulty);}

}

const moveDot = (dot) =>{
    let minTop = Math.ceil(200);
    let maxTop = Math.floor(app.clientHeight - 100);
    const top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
    let minLeft = Math.ceil(0);
    let maxLeft = Math.floor(window.innerWidth - 100);
    const left = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;

    dot.style.top = `${top}px`;
    dot.style.left = `${left}px`;
    dot.addEventListener('click', ()=>{
        scoreText.textContent = ++score;
        dot.remove();
    })
    removeInterval = setInterval(()=>{
        dot.remove();
    }, difficulty);
}

const StartTimer = function(){
    const timer = document.querySelector('#timer');
    let miliSeconds=0;
    let seconds = 0;
    const timerInterval = setInterval(()=>{
        miliSeconds++;
        if(miliSeconds < 10) miliSeconds = `0${miliSeconds}`;
        if(miliSeconds == 99){
        seconds++;
        miliSeconds = 0;
        if(seconds < 10) seconds =  `0${seconds}`;
    }
        if(seconds==30){
            clearInterval(timerInterval);
            clearInterval(startInterval);
            scoreText.textContent = `Twój wynik to: ${score}`
        }
        timer.textContent = `${seconds} : ${miliSeconds}`;
    }, 10 )
}

const resetPage = () =>{
    location.reload();
}

reset.addEventListener('click', resetPage);
btnStart.addEventListener('click', startGame);

