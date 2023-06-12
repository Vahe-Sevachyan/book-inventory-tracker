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
}

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
// modal.addEventListener("click", openModal());
// function addRemoveBtn() {
//   const btn = document.createElement("BUTTON");
//   btn.innerHTML = "Delete";
//   bookInfoDiv.appendChild(btn);
//   //
// }

// removeBtn.forEach((btn) => {
//   btn.addEventListener("click", removeBookBtn());
// });

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
  bookInfoDiv.innerHTML += book.getBookInfo() + "<hr>";
  const removeBtn = document.createElement("BUTTON");
  removeBtn.setAttribute("ID", "removeBtn");
  removeBtn.innerHTML = "Delete";
  bookInfoDiv.appendChild(removeBtn);
  closeModal();
}
