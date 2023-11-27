const addBookBtn = document.querySelector(".create-book-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

const myLibrary = [];

function Book() {}

function addBookToLibrary() {}

addBookBtn.onclick = () => {
  modal.style.display = "block";
};
closeBtn.onclick = () => {
  modal.style.display = "none";
};
