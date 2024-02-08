
const body = document.querySelector('#body-class');

//Open a div with a form
//Create the form to add bookmarks
const formContainer = document.createElement('div');
formContainer.className = 'form-container';

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.className = 'text-input';

const urlInput = document.createElement('input');
urlInput.type = 'text';
urlInput.className = 'text-input';

formContainer.appendChild(titleInput);
formContainer.appendChild(urlInput);

const openForm = () => {
    body.appendChild(formContainer);
}

//Click add new bookmark button
//Access the value of both inputs and set it to the new bookmark
// const bookmarkContainer = document.createElement('div');
// const bookmarkTitle = document.createElement('h2');
// bookmarkTitle.innerHTML = 'Bookmark';

const createBookmark = () => {
    const bookmarkContainer = document.createElement('div');
    const bookmarkTitle = document.createElement('h2');
    bookmarkTitle.innerHTML = 'Bookmark';

    bookmarkContainer.appendChild(bookmarkTitle);
    body.appendChild(bookmarkContainer);
}


//Form has two inputs, one title and one URL
//use the title to create a h2 inside the new bookmark when submited
//use the url as a link to the website related with that div


const creatNewBookMark = () => {
    const newDiv = document.createElement('div');
    newDiv.className = 'bookmark';
    body.appendChild(newDiv);
}
const createNewBookmarkButton = document.querySelector('#create-bookmark');


changeColorButton.addEventListener('click', openForm);
createNewBookmarkButton.addEventListener('click', createBookmark);