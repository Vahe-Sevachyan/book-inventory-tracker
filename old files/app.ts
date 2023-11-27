const createBook = document.querySelector<HTMLElement>(".createBook");
const modal = document.querySelector<HTMLElement>("#bookModal");
const saveBtn = document.querySelector<HTMLElement>(".saveBtn");
const closeBtn = document.querySelector<HTMLElement>(".closeBtn");
const bookList = document.querySelector<HTMLElement>(".bookList");
const books: Book[] = [];

if (createBook) {
  createBook.onclick = () => {
    openModal();
  };
}

if (closeBtn) {
  closeBtn.onclick = () => {
    closeModal();
  };
}

function openModal() {
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }
}

class Book {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;

  constructor(
    title: string,
    author: string,
    publicationYear: number,
    genre: string
  ) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
  }
  getTile() {
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
    return `Title:${this.title}<br>Author:${this.author}<br> Publication Year:${this.publicationYear}<br> Genre:${this.genre}`;
  }
}

if (saveBtn) {
  saveBtn.onclick = () => {
    saveBook();
  };
}

function saveBook() {
  const titleInput = document.getElementById("title") as HTMLInputElement;
  const authorInput = document.getElementById("author") as HTMLInputElement;
  const publicationYearInput = document.getElementById(
    "publicationYear"
  ) as HTMLInputElement;
  const genreInput = document.getElementById("genre") as HTMLInputElement;

  const title = titleInput.value;
  const author = authorInput.value;
  const publicationYear = parseInt(publicationYearInput.value);
  const genre = genreInput.value;

  const book = new Book(title, author, publicationYear, genre);
  books.push(book);
  displayBooks();
  // resetModal();
  closeModal();
}

function removeBook(index) {
  books.splice(index, 1);
  displayBooks();
}
function displayBooks() {
  if (bookList) {
    bookList.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      const bookInfo = book.getBookInfo();

      const bookItem = document.createElement("div");
      bookItem.innerHTML = bookInfo;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove Book";
      removeButton.onclick = function () {
        removeBook(i);
      };
      bookItem.appendChild(removeButton);
      bookList.appendChild(bookItem);
    }
  }
}
