const tl = gsap.timeline();
const contentTools = document.querySelector('.content');
const contentGames = document.querySelector('.content-games');
const contentInfo = document.querySelector('.content-info');
const btnToGames = document.querySelector('#games-button');
const btnToTools = document.querySelector('#tools-button');
const btnToInfo = document.querySelector('#info-button');

const loadAnimation = () => {
    tl.fromTo(contentTools, {opacity: 0}, {opacity: 1, duration: 0.5});
    contentGames.style.display = "none";
    contentInfo.style.display = "none";
}
loadAnimation()

let currentView = "tools";
const navigateToGames = () =>{
    btnToGames.classList.add('nav-list__element--active');
    if(currentView === "tools"){
        btnToTools.classList.remove('nav-list__element--active');
        tl.fromTo(contentTools, {opacity: 1}, {opacity: 0, display: "none", duration: 0.5});
    }
    else if(currentView === "info"){
        btnToInfo.classList.remove('nav-list__element--active');
        tl.fromTo(contentInfo, {opacity: 1}, {opacity: 0, display: "none", duration: 0.5});
    }
    tl.fromTo(contentGames, {opacity: 0}, {opacity: 1, display: "flex", duration: 0.5});
    currentView = "games";
}

const navigateToTools = () =>{
    btnToTools.classList.add('nav-list__element--active');
    if(currentView === "games"){
        btnToGames.classList.remove('nav-list__element--active');
        tl.fromTo(contentGames, {opacity: 1}, {opacity: 0, display: "none", duration: 0.5});
    }
    else if(currentView === "info"){
        btnToInfo.classList.remove('nav-list__element--active');
        tl.fromTo(contentInfo, {opacity: 1}, {opacity: 0, display: "none", duration: 0.5});
    }
    tl.fromTo(contentTools, {opacity: 0}, {opacity: 1, display: "flex", duration: 0.5});
    currentView = "tools";
}

const navigateToInfo = () =>{
    btnToInfo.classList.add('nav-list__element--active');
    if(currentView === "games"){
        btnToGames.classList.remove('nav-list__element--active');
        tl.fromTo(contentGames, {opacity: 1}, {opacity: 0, display: "none", duration: 0.5});
    }
    else if(currentView === "tools"){
        btnToTools.classList.remove('nav-list__element--active');
        tl.fromTo(contentTools, {opacity: 1}, {opacity: 0, display: "none", duration: 0.5});
    }
    tl.fromTo(contentInfo, {opacity: 0}, {opacity: 1, display: "flex", duration: 0.5});
    currentView = "info";
}

btnToGames.addEventListener('click', navigateToGames);
btnToTools.addEventListener('click', navigateToTools);
btnToInfo.addEventListener('click', navigateToInfo);
