const addButton = document.querySelector('.addButton');
const addForm = document.querySelector('.addForm');


// Event Listeners

addButton.addEventListener('click', () => {
    addForm.classList.remove("hide-add-form");
});