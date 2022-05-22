const boldBtn = document.querySelector('#bold-btn');
const italicBtn = document.querySelector('#italic-btn');
const underlineBtn = document.querySelector('#underline-btn');
const colorBtn = document.querySelector('#color-btn');

const newBtn = document.querySelector('#new-btn');
const pdfBtn = document.querySelector('#pdf-btn');
const txtBtn = document.querySelector('#txt-btn');

const content = document.querySelector('#content');

boldBtn.addEventListener('click', ()=>{
    document.execCommand("bold");
})
italicBtn.addEventListener('click', ()=>{
    document.execCommand("italic");
})
underlineBtn.addEventListener('click', ()=>{
    document.execCommand("underline");
})
colorBtn.addEventListener('input', ()=>{
    document.execCommand("forecolor", false, colorBtn.value);
})

newBtn.addEventListener('click', ()=>{
    content.innerHTML = "";
})