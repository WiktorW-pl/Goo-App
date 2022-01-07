const btnGames = document.querySelector('#info-games');
const btnTools = document.querySelector('#info-tools');
const btnInfo = document.querySelector('#info-info');
const containerInfo = document.querySelector('.container-info');
const mainContent = document.querySelector('.content');
const logoGit = document.querySelector('.logo-git');
const titleInfo = document.querySelector('.title-info');
const movedLogoGit = logoGit;
const movedTitleInfo = titleInfo;
const movedContent = mainContent;
const movedGames = btnGames;
const movedTools = btnTools;
const movedInfo = btnInfo;
const tl = new TimelineMax();

window.onload = function() {
    tl.fromTo(movedLogoGit, 1, {opacity: 0.1}, {opacity: 1})
    containerInfo.style.display = "block";
    containerInfo.style.display = "flex";
    tl.to(movedInfo, 0.1, {y: 18, borderTop: "none", lineHeight: 30 + "px"})
    tl.to(movedTools, 0.1, {y: -18, lineHeight: 80 + "px"})
    tl.to(movedGames, 0.1, {y: 2, lineHeight: 44 + "px"})
    tl.fromTo(movedContent, 0.5, {y:500}, {y: -300});
    tl.to(movedTitleInfo, 0.1, {opacity: 1})
}

const changePage = () =>{
    tl.fromTo(movedLogoGit, 0.5, {opacity: 1}, {opacity: 0})
    tl.to(movedTools, 0.1, {y: 18, borderTop: "none", lineHeight: 30 + "px"})
    tl.to(movedInfo, 0.1, {y: 2, lineHeight: 60 + "px"})
    tl.fromTo(movedContent, 0.5, {y:-300}, {y: 600});
    setTimeout(()=>{
        location.href = 'index.html';
    }, 1000);
}
const changePageGames = () =>{
    tl.fromTo(movedLogoGit, 0.5, {opacity: 1}, {opacity: 0})
    tl.to(movedGames, 0.1, {y: 18, borderTop: "none", lineHeight: 30 + "px"})
    tl.to(movedInfo, 0.1, {y: 2, lineHeight: 60 + "px"})
    tl.fromTo(movedContent, 0.5, {y:-300}, {y: 800});
    setTimeout(()=>{
        location.href = 'games.html';
    }, 1000);
}

 btnTools.addEventListener('click', changePage)
 btnGames.addEventListener('click', changePageGames)

