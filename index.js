const addBookBtn = document.querySelector(".create-book-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

const myLibrary = [];

function addBookToLibrary() {}

addBookBtn.onclick = () => {
  modal.style.display = "block";
};
closeBtn.onclick = () => {
  modal.style.display = "none";
};

function Book(title, author, publicationYear, genre) {
  this.title = title;
  this.author = author;
  this.publicationYear = publicationYear;
  this.genre = genre;
  this.getInfo = function () {
    return `Title: ${this.title} Author:${this.author} Publication Year: ${this.publicationYear} Genre: ${this.genre}`;
  };
}
const newBook = new Book("atomic habits", "James Clear", 2012, "kaizen");
console.log(newBook);
