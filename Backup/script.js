const modal = document.getElementById("bookModal");
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

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publicationYear = document.getElementById("publicationYear").value;
  const genre = document.getElementById("genre").value;

  const book = new Book(title, author, publicationYear, genre);

  const bookInfoDiv = document.getElementById("bookInfo");

  const button = document.createElement("button");
  button.innerText = "Can you click me?";
  bookInfoDiv.innerHTML += book.getBookInfo() + "<hr>";
  closeModal();
}
