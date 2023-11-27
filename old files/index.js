const createBook = document.querySelector(".createBook");
const modal = document.querySelector("#bookModal");
const saveBtn = document.querySelector(".saveBtn");
const closeBtn = document.querySelector(".closeBtn");
const bookList = document.querySelector(".bookList");
let books = [];

createBook.onclick = () => {
  openModal();
};

closeBtn.onclick = () => {
  closeModal();
};

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

class Book {
  constructor(title, author, publicationYear, genre) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
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
    return `Title: ${this.title}<br>Author: ${this.author}<br>Publication Year: ${this.publicationYear}<br>Genre: ${this.genre}`;
  }
}

function saveBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publicationYear = document.getElementById("publicationYear").value;
  const genre = document.getElementById("genre").value;
  const book = new Book(title, author, publicationYear, genre);
  books.push(book);
  displayBook();
  resetModal();
  closeModal();
}
saveBtn.onclick = () => {
  saveBook();
};
function displayBook() {
  bookList.innerHTML = "";
  for (let i = 0; i < book.length; i++) {
    const book = books[i];
    const bookInfo = book.getBookInfo();
  }
}
