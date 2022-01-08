const btnGames = document.querySelector('#games-games');
const btnTools = document.querySelector('#games-tools');
const btnInfo = document.querySelector('#games-info');
const mainContent = document.querySelector('.content');
const btnGame3 = document.querySelector('#game-3');
const logo = document.querySelector('.logo');
const movedLogo = logo;
const movedContent = mainContent;
const movedGames = btnGames;
const movedTools = btnTools;
const movedInfo = btnInfo;
const tl = new TimelineMax();

window.onload = function() {
    mainContent.style.display = "block";
    mainContent.style.display = "flex";
    tl.to(movedGames, 0.1, {y: 18, borderTop: "none", lineHeight: 30 + "px"})
    tl.to(movedTools, 0.1, {y: -18, lineHeight: 80 + "px"})
    tl.fromTo(movedContent, 0.5, {y:500}, {y: -300});
}

const changePage = (e) =>{
    tl.to(movedTools, 0.1, {y: 18, borderTop: "none", lineHeight: 60 + "px"})
    tl.to(movedGames, 0.1, {y: 0, lineHeight: 60 + "px"})
    tl.fromTo(movedContent, 0.5, {y:-300}, {y: 500});
    setTimeout(()=>{
        location.href = 'index.html';
    }, 1000);
}
const changePageInfo = () =>{
    tl.to(movedLogo, 0.2, {x: -400})
    tl.to(movedGames, 0.1, {y: 2, lineHeight: 60 + "px", lineHeight: 50 + "px"})
    tl.to(movedInfo, 0.1, {y: 18, borderTop: "none", lineHeight: 30 + "px"})
    tl.fromTo(movedContent, 0.5, {y:-300}, {y: 500});
    setTimeout(()=>{
       location.href = 'info.html';
    }, 1000);
}
const game3 = () =>{
    tl.to(movedTools, 0.1, {y: 18, borderTop: "none", lineHeight: 60 + "px"})
    tl.to(movedGames, 0.1, {y: 0, lineHeight: 60 + "px"})
    tl.fromTo(movedContent, 0.5, {y:-300}, {y: 500});
    setTimeout(()=>{
        location.href = './projektRockpaperScisors/index.html';
    }, 1000);
}

btnTools.addEventListener('click', changePage)
btnInfo.addEventListener('click', changePageInfo)
btnGame3.addEventListener('click', game3)

