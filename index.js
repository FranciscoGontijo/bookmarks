
const changeColorButton = document.querySelector('#changeColorButton');
const body = document.querySelector('#body-class');

const changeColor = () => {
    changeColorButton.style.backgroundColor = '#FF1100';
    body.style.backgroundColor = '#FFF';
}

const creatNewBookMark = () => {
   const newDiv = document.createElement('div');
   newDiv.className = 'bookmark';
   body.appendChild(newDiv);
}

changeColorButton.addEventListener('click', creatNewBookMark);
