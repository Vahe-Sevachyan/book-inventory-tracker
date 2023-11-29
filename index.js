const addBookBtn = document.querySelector(".create-book-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const saveBtn = document.querySelector(".save-btn");
const bookList = document.querySelector(".book-list");
const books = [];

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

function saveBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publicationYear = document.getElementById("publicationYear").value;
  const genre = document.getElementById("genre").value;
  const newBook = new Book(title, author, publicationYear, genre);
  books.push(newBook);
}

function displayBooks() {
  bookList.innerHTML = "";
  books.forEach((book, i) => {
    const bookInfo = book.getInfo();
    const bookItem = document.createElement("div");
    bookItem.innerHTML = bookInfo;
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove Button";
    removeButton.onclick = () => {
      removeBook(i);
    };
    bookItem.appendChild(removeButton);
    bookList.appendChild(bookItem);
  });
}

bookList.appendChild(addedBook);
// `<ul>
//   <li>Title: ${book.title}</li>
//   <li>Author: ${book.author}</li>
//   <li>PublicationYear: ${book.publicationYear}</li>
//   <li>Genre: ${book.genre}</li>
//   </ul>`;
