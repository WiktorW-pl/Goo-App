"use strict";
const btnAdd = document.querySelector('#button-add');
const btnRemove = document.querySelector('#button-remove');
const btnPriority = document.querySelector('#priority-btn');
const app = document.querySelector('.app-todo');
const container = document.querySelector('.content-todo');
const btnAddNote = document.querySelector('.add-note');
const btnRemoveNote = document.querySelector('.remove-note');
const info = document.querySelector('.info');
const cursor = document.querySelector('.cursor');
const tl = new TimelineMax();
let flag = false;
const user = {
    task: [],
    check: [],
    textarea: [],
};
const sideNote = {
    note: [],
    text: [],
    checkNote: [],
};
const buildTask = () => {
    const taskContainer = document.createElement('div');
    app.appendChild(taskContainer);
    taskContainer.classList.add('task');
    tl.fromTo(taskContainer, 0.3, { opacity: 0 }, { opacity: 1 });
    user.task.push(taskContainer);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    taskContainer.appendChild(checkbox);
    checkbox.classList.add('task__checkbox');
    user.check.push(checkbox);
    const input = document.createElement('textarea');
    taskContainer.appendChild(input);
    input.classList.add('task__input');
    user.textarea.push(input);
    window.localStorage.getItem('zadanie', input);
    const color = document.createElement('div');
    taskContainer.appendChild(color);
    color.classList.add('color');
    color.classList.add('low');
    const prio = document.querySelectorAll('.color');
    priority(prio);
};
const colorArray = ['#BDFF00', '#00F0FF', 'red'];
let number = 0;
const priority = (prio) => {
    prio.forEach((item) => item.addEventListener('click', () => {
        item.style.borderRight = `5px solid ${colorArray[number++]}`;
        if (number === colorArray.length)
            number = 0;
    }));
};
const addTask = () => {
    buildTask();
};
const removeTask = () => {
    user.check.forEach((item, index) => {
        if (item.checked === true) {
            // dodać usuwanie z tablicy
            user.task[index].remove();
        }
    });
};
const addNote = () => {
    const noteContainer = document.createElement('div');
    container.appendChild(noteContainer);
    noteContainer.classList.add('note');
    tl.fromTo(noteContainer, 1, { opacity: 0 }, { opacity: 1 });
    sideNote.note.push(noteContainer);
    const inputNote = document.createElement('textarea');
    noteContainer.appendChild(inputNote);
    inputNote.classList.add('note__input');
    sideNote.text.push(inputNote);
    const checkboxNote = document.createElement('input');
    checkboxNote.type = 'checkbox';
    noteContainer.appendChild(checkboxNote);
    checkboxNote.classList.add('note__checkbox');
    sideNote.checkNote.push(checkboxNote);
    sideNote.note.forEach((item) => item.addEventListener('mousedown', catchElement));
};
const catchElement = (e) => {
    flag = !flag;
    e.target.classList.remove('done');
    e.target.classList.add('taken');
    window.addEventListener('mousemove', moveElement);
};
const moveElement = (e) => {
    sideNote.note.forEach((item) => {
        if (flag && !item.classList.contains('done')) {
            const x = Math.floor((e.clientX * 100) / innerWidth);
            const y = Math.floor((e.clientY * 100) / innerHeight);
            item.style.top = `${y - 7}%`;
            item.style.left = `${x - 5}%`;
            item.addEventListener('mouseup', cancelAction);
        }
    });
};
const cancelAction = () => {
    flag = false;
    sideNote.note.forEach((item, index) => {
        sideNote.note[index].classList.remove('taken');
        item.classList.add('done');
    });
};
const removeSideNote = () => {
    sideNote.checkNote.forEach((item, index) => {
        if (item.checked === true) {
            // dodać usuwanie z tablicy
            sideNote.note[index].remove();
        }
    });
};
btnAdd.addEventListener('click', addTask);
btnRemove.addEventListener('click', removeTask);
btnAddNote.addEventListener('click', addNote);
btnRemoveNote.addEventListener('click', removeSideNote);
