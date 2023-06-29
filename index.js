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
  title;
  author;
  publicationYear;
  genre;
  getTile() {
    return title;
  }
  getAuthor() {
    return author;
  }
  getPublicationYear() {
    return publicationYear;
  }
  getGenre() {
    return genre;
  }
  getBookInfo() {
    return `Title:${title}<br>Author:${author}<br> Publication Year:${publicationYear}<br> Genre:${genre}`;
  }
}
saveBtn.onclick = () => {
  saveBook();
};
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
