const createBook = document.querySelector(".createBook");
const modal = document.querySelector("#bookModal");
const saveBtn = document.querySelector(".saveBtn");
const closeBtn = document.querySelector(".closeBtn");
const bookList = document.querySelector(".bookList");
let books = [];
class Book {
  constructor(title, author, publicationYear, genre, read) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
    this.read = read;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  getPublicationYear() {
    return this.publicationYear;
  }
  getGenre() {
    return this.genre;
  }

  getBookInfo() {
    return `Tile: ${this.title} <br> Author: ${this.author} <br> Publication Year: ${this.publicationYear} <br> Genre: ${this.genre} <br> `;
  }
}

function saveBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publicationYear = document.getElementById("publicationYear").value;
  const genre = document.getElementById("genre").value;
  const book = new Book(title, author, publicationYear, genre);
  books.push(book);
  displayBooks();
  resetModal();
  closeModal();
}

function removeBook(index) {
  books.splice(index, 1);
  displayBooks();
}

function displayBooks() {
  bookList.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookInfo = book.getBookInfo();
    const bookItem = document.createElement("div");
    bookItem.innerHTML = bookInfo;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Button";
    removeButton.onclick = () => {
      removeBook(i);
    };
    bookItem.appendChild(removeButton);
    bookList.appendChild(bookItem);
  }
}

function resetModal() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("publicationYear").value = "";
  document.getElementById("genre").value = "";
}
createBook.onclick = () => {
  openModal();
};
closeBtn.onclick = () => {
  closeModal();
};
saveBtn.onclick = () => {
  saveBook();
};
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
