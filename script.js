const modal = document.getElementById("bookModal");
const bookInfoDiv = document.getElementById("bookInfo");
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
  getBookItem() {
    const bookItem = document.createElement("div");
    bookItem.setAttribute("class", "bookItem");

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Delete";

    bookItem.innerHTML = this.getBookInfo() + "<br>";
    bookItem.appendChild(removeBtn);

    removeBtn.addEventListener("click", () => this.removeBookItem(bookItem));

    return bookItem;
  }

  removeBookItem(bookItem) {
    bookItem.remove();
  }
}

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function removeBookBtn() {
  bookInfoDiv.innerHTML = "";
  book = null;
}

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publicationYear = document.getElementById("publicationYear").value;
  const genre = document.getElementById("genre").value;
  const book = new Book(title, author, publicationYear, genre);
  // const bookItem = document.createElement("div");
  bookItem.setAttribute("class", "bookItem");
  const removeBtn = document.createElement("BUTTON");
  removeBtn.setAttribute("ID", "removeBtn");
  removeBtn.innerHTML = "Delete";
  bookItem.innerHTML = book.getBookInfo() + "<br>";
  bookItem.appendChild(removeBtn);
  bookInfoDiv.append(bookItem);
  const bookItem = book.getBookItem();
  bookInfoDiv.append(bookItem);
  closeModal();
}
