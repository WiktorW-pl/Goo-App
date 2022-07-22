const rockBtn = document.querySelector('#go-to-rock-paper-scissors');
const aimBtn = document.querySelector('#go-to-aim');

rockBtn.addEventListener('click', ()=>{
window.location.href = "./games/rock-paper-scissors/index.html";
})

aimBtn.addEventListener('click', ()=>{
window.location.href = "./games/aim/index.html";
})
