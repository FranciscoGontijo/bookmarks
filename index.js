// Select body element
const body = document.querySelector('#body-class');

// Create form container
const formContainer = document.createElement('div');
formContainer.className = 'form-container';

// Create form header
const formHeader = document.createElement('div');
formHeader.className = 'form-header';

// Create form title
const formHeaderTitle = document.createElement('h2');
formHeaderTitle.className = 'form-title';
formHeaderTitle.innerHTML = 'Add Bookmark';

// Append form title to form header
formHeader.appendChild(formHeaderTitle);

// Create close button for the form
const closeButton = document.createElement('button');
closeButton.className = 'close-button';

// Create close icon
const closeIcon = document.createElement('i');
closeIcon.className = 'close-icon';
closeIcon.setAttribute('data-feather', 'x');

// Append close icon to close button
closeButton.appendChild(closeIcon);
// Append close button to form header
formHeader.appendChild(closeButton);

// Create title input and label
const titleInput = document.createElement('input');
const titleInputLabel = document.createElement('label');
titleInputLabel.innerHTML = 'Website Name';
titleInput.type = 'text';
titleInput.className = 'text-input';

// Create url input and label
const urlInput = document.createElement('input');
const urlInputLabel = document.createElement('label');
urlInputLabel.innerHTML = 'Website Url';
urlInput.type = 'text';
urlInput.className = 'text-input';

// Create submit button
const submitButton = document.createElement('button');
submitButton.className = 'save-bookmark-btn';
submitButton.innerHTML = 'Save';

// Append elements to form container
formContainer.appendChild(formHeader);
formContainer.appendChild(titleInputLabel);
formContainer.appendChild(titleInput);
formContainer.appendChild(urlInputLabel);
formContainer.appendChild(urlInput);
formContainer.appendChild(submitButton);

// Open form functionality
const openForm = () => {
    body.appendChild(formContainer);
    feather.replace();
}

// Close form functionality
const closeForm = () => {
    body.removeChild(formContainer);
    titleInput.value = ''
    urlInput.value = ''
}

// Select open form button
const openFormButton = document.querySelector('#openFormBtn');

// Add function to open form button
openFormButton.addEventListener('click', openForm);

// Add function to close form button
closeButton.addEventListener('click', closeForm);

// Create new bookmark function
const createBookmark = () => {
    // Create delete bookmark button
    const deleteBookmarkButton = document.createElement('button');
    deleteBookmarkButton.className = 'close-button';

    // Create close bookmark icon
    const closeBookmarkIcon = document.createElement('i');
    closeBookmarkIcon.className = 'close-icon';
    closeBookmarkIcon.setAttribute('data-feather', 'x');

    // Append close icon to delete button
    deleteBookmarkButton.appendChild(closeBookmarkIcon);

    // Create link
    const link = document.createElement('a');
    link.className = 'site-link';
    link.target = '_blank';
    link.href = urlInput.value;

    // Create bookmark container
    const bookmarkContainer = document.createElement('div');
    bookmarkContainer.className = 'bookmark';

    // Create bookmark title
    const bookmarkTitle = document.createElement('h3');
    bookmarkTitle.className = 'bookmark-title';
    bookmarkTitle.innerHTML = titleInput.value;

    // Append title to link
    link.appendChild(bookmarkTitle);

    // Append delete button and link to bookmark container
    bookmarkContainer.appendChild(deleteBookmarkButton);
    bookmarkContainer.appendChild(link);

    // Append bookmark container to body
    body.appendChild(bookmarkContainer);

    // Replace feather icons
    feather.replace();

    // Close the form
    body.removeChild(formContainer);

    // Clear form inputs
    titleInput.value = '';
    urlInput.value = '';

    const deleteBookmark = () => {
        body.removeChild(bookmarkContainer);
        saveBookmarks();
    }

    deleteBookmarkButton.addEventListener('click', deleteBookmark);

    // Save bookmark array to local storage
    saveBookmarks();
}

submitButton.addEventListener('click', createBookmark);

// Use local storage to save and retrieve the bookmarks

const saveBookmarks = () => {
    const bookmarksArray = Array.from(document.querySelectorAll('.bookmark')).map(bookmarkElement => ({
        title: bookmarkElement.querySelector('.bookmark-title').innerHTML,
        url: bookmarkElement.querySelector('.site-link').href,
    }));

    localStorage.setItem('bookmarks', JSON.stringify(bookmarksArray));
};

const loadBookmarks = () => {
    const bookmarksArray = JSON.parse(localStorage.getItem('bookmarks')) || [];

    bookmarksArray.forEach(bookmarkElement => createBookmarkElement(bookmarkElement.title, bookmarkElement.url));
}

const createBookmarkElement = (title, url) => {
    // Create delete bookmark button
    const deleteBookmarkButton = document.createElement('button');
    deleteBookmarkButton.className = 'close-button';

    // Create close bookmark icon
    const closeBookmarkIcon = document.createElement('i');
    closeBookmarkIcon.className = 'close-icon';
    closeBookmarkIcon.setAttribute('data-feather', 'x');

    // Append close icon to delete button
    deleteBookmarkButton.appendChild(closeBookmarkIcon);

    // Create link
    const link = document.createElement('a');
    link.className = 'site-link';
    link.href = url;

    // Create bookmark container
    const bookmarkContainer = document.createElement('div');
    bookmarkContainer.className = 'bookmark';

    // Create bookmark title
    const bookmarkTitle = document.createElement('h3');
    bookmarkTitle.className = 'bookmark-title';
    bookmarkTitle.innerHTML = title;

    // Append title to link
    link.appendChild(bookmarkTitle);

    // Append delete button and link to bookmark container
    bookmarkContainer.appendChild(deleteBookmarkButton);
    bookmarkContainer.appendChild(link);

    // Append bookmark container to body
    body.appendChild(bookmarkContainer);

    // Replace feather icons
    feather.replace();

    const deleteBookmark = () => {
        body.removeChild(bookmarkContainer);
    }

    deleteBookmarkButton.addEventListener('click', deleteBookmark);

    // Save bookmark array
    saveBookmarks();
}

// Load bookmarks on page load
loadBookmarks();

// Add function to save bookmarks when the page is unloaded or refreshed
window.addEventListener('beforeunload', saveBookmarks);

