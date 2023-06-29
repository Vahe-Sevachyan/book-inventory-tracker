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
saveBtn.onclick = () => {
  saveBook();
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
