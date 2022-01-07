const tl = new TimelineMax();
const btnGames = document.querySelector('#tools-games');
const btnTools = document.querySelector('#tools-tools');
const btnInfo = document.querySelector('#tools-info');
const mainContent = document.querySelector('.content');
const logo = document.querySelector('.logo');
const movedLogo = logo;
const movedContent = mainContent;
const movedGames = btnGames;
const movedTools = btnTools;
const movedInfo = btnInfo;

window.onload = function() {
    mainContent.style.display = "block";
    mainContent.style.display = "flex";
    tl.fromTo(movedContent, 0.5, {y:500}, {y: -300});
}

const changePage = () =>{
    tl.to(movedGames, 0.1, {y: 18, borderTop: "none", lineHeight: 30 + "px"})
    tl.to(movedTools, 0.1, {y: -18, lineHeight: 80 + "px"})
    tl.fromTo(movedContent, 0.5, {y:-300}, {y: 500});
    setTimeout(()=>{
        location.href = 'games.html';
    }, 1000);
}
const changePageInfo = () =>{
    tl.to(movedLogo, 0.2, {x: -400})
    tl.to(movedTools, 0.1, {y: -20, lineHeight: 90 + "px"})
    tl.to(movedInfo, 0.1, {y: 18, borderTop: "none", lineHeight: 30 + "px"})
    tl.fromTo(movedContent, 0.5, {y:-300}, {y: 500});
    setTimeout(()=>{
        location.href = 'info.html';
    }, 1000);
}
btnGames.addEventListener('click', changePage)
btnInfo.addEventListener('click', changePageInfo)