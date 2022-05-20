const btnStart = document.querySelector('.game-panel__button');
const app = document.querySelector('.app');

const startGame = () =>{
    startInterval = setInterval(createDot, 1000);
}
const createDot = () =>{
    const dot = document.createElement('div');
    dot.classList.add('dot')
    app.appendChild(dot);

    moveInterval = setInterval(moveDot(dot), 1000);
}
const moveDot = (dot) =>{
    let minTop = Math.ceil(200);
    let maxTop = Math.floor(app.clientHeight - 100);
    const top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
    let minLeft = Math.ceil(0);
    let maxLeft = Math.floor(window.innerWidth - 100);
    const left = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;

    dot.style.top = top+'px';
    dot.style.left = left+'px';

    removeInterval = setInterval(()=>{
        dot.remove();
    }, 1000);
}
btnStart.addEventListener('click', startGame);


