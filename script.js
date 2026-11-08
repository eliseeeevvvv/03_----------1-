
"use strict";
let elem = document.querySelector('body');
elem.style.backgroundImage = "url('./images/bg1.png')";
let gallery1 = document.getElementById('gallery');
gallery1.style.cssText = `
    border: 4px solid #5D9A90;
    margin: 30px 0;
`;

let child = gallery1.children;

for (let i = 0; i < child.length; i++) {
    child[i].style.opacity = '0.5';
}

let header = document.querySelector('h1');
header.innerHTML = 'ЗАГОЛОВОК СТОРІНКИ';
let header2 = document.querySelector('h2');
header2.style.display = 'none';
let elem2 = document.querySelectorAll('article');

for (let i = 0; i < elem2.length; i++) {
    elem2[i].style.marginBottom = '30px';
}


elem2[elem2.length - 1].style.color = '#fff';
elem2[elem2.length - 1].style.backgroundColor = '#7F4196';

for (let i = 0; i < elem2.length; i++) {
    if (i % 2 === 0) {
        elem2[i].style.backgroundColor = '#A3CFD8';
    } else {
        elem2[i].style.backgroundColor = '#D8A3D5';
    }
}
let current = document.querySelector('.current');
let parent = current.parentElement;
parent.style.borderLeft = '2px dotted red';
