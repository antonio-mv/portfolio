


let cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(follow){
    let x = follow.clientX;
    let y = follow.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})



let anchor = document.querySelector('a');

anchor.addEventListener('mouseenter', ()=> {
    cursor.style.width = '100px';
    cursor.style.height = '100px';

    cursor.style.border = '5px dotted black';
})

anchor.addEventListener('mouseleave', ()=> {
    cursor.style.width = '50px';
    cursor.style.height = '50px';
    cursor.style.border = '2px solid black';
})

let card = document.querySelector('.card');

card.addEventListener('mouseenter', ()=> {
    cursor.style.width = '0px';
    cursor.style.height = '0px';
})

card.addEventListener('mouseleave', ()=> {
    cursor.style.width = '50px';
    cursor.style.height = '50px';
    cursor.style.border = '2px solid black';
})