const addBookBtn = document.querySelector(".create-book-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const saveBtn = document.querySelector(".save-btn");
const myLibrary = [];

function addBookToLibrary() {}

addBookBtn.onclick = () => {
  modal.style.display = "block";
};
closeBtn.onclick = () => {
  modal.style.display = "none";
};

saveBtn.onclick = () => {
  saveBook();
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

//next work on the functionality to save the information to the array
// take the info from the input element and pass it to the book constructor save it in a variable maybe and push it to the array

function saveBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publicationYear = document.getElementById("publicationYear").value;
  const genre = document.getElementById("genre").value;

  const newBook = new Book(title, author, publicationYear, genre);
  myLibrary.push(newBook);
  console.log(myLibrary);
}
