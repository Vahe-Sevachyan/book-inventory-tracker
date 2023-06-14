function searchBooks() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const bookItems = document.getElementsByClassName("book-item");

  for (let i = 0; i < bookItems.length; i++) {
    const bookInfo = bookItems[i].querySelector("p").innerHTML.toLowerCase();
    if (bookInfo.includes(searchInput)) {
      bookItems[i].style.display = "block";
    } else {
      bookItems[i].style.display = "none";
    }
  }
}
document.getElementById("searchInput").addEventListener("input", searchBooks);
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

class Category {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  getBooks() {
    return this.books;
  }

  getBookCount() {
    return this.books.length;
  }

  getBookInfo(index) {
    if (index >= 0 && index < this.books.length) {
      const book = this.books[index];
      return book.getBookInfo();
    }
    return null;
  }
}

class CategoryList {
  constructor() {
    this.categories = [];
  }

  createCategory(name) {
    const category = new Category(name);
    this.categories.push(category);
  }

  editCategory(index, newName) {
    if (index >= 0 && index < this.categories.length) {
      const category = this.categories[index];
      category.setName(newName);
    }
  }

  getCategory(index) {
    if (index >= 0 && index < this.categories.length) {
      return this.categories[index];
    }
    return null;
  }

  removeCategory(index) {
    if (index >= 0 && index < this.categories.length) {
      this.categories.splice(index, 1);
    }
  }

  displayCategories() {
    const categoryList = document.getElementById("categoryList");
    categoryList.innerHTML = "";

    for (let i = 0; i < this.categories.length; i++) {
      const category = this.categories[i];

      const categoryName = category.getName();
      const categoryItem = document.createElement("div");
      categoryItem.classList.add("category-item");

      const categoryHeader = document.createElement("h3");
      categoryHeader.textContent = categoryName;

      const bookList = document.createElement("div");
      bookList.classList.add("book-list");

      const addBookButton = document.createElement("button");
      addBookButton.textContent = "Add Book";
      addBookButton.onclick = function () {
        openModal("book", i);
        document.getElementById("addEditBookButton").textContent = "Add";
        resetBookModal();
      };

      const removeCategoryButton = document.createElement("button");
      removeCategoryButton.textContent = "Remove Category";
      removeCategoryButton.onclick = function () {
        if (confirm("Are you sure you want to remove this category?")) {
          removeCategory(i);
        }
      };

      const editCategoryButton = document.createElement("button");
      editCategoryButton.textContent = "Edit Category";
      editCategoryButton.onclick = function () {
        editCategory(i);
      };

      categoryItem.appendChild(categoryHeader);
      categoryItem.appendChild(addBookButton);
      categoryItem.appendChild(removeCategoryButton);
      categoryItem.appendChild(editCategoryButton);

      if (category.getBookCount() === 0) {
        const noBooksMsg = document.createElement("p");
        noBooksMsg.textContent = "No books in this category";
        bookList.appendChild(noBooksMsg);
      } else {
        const books = category.getBooks();
        for (let j = 0; j < books.length; j++) {
          const bookItem = document.createElement("div");
          bookItem.classList.add("book-item");

          const bookInfo = document.createElement("p");
          bookInfo.innerHTML = books[j].getBookInfo();

          const removeBookButton = document.createElement("button");
          removeBookButton.textContent = "Remove Book";
          removeBookButton.onclick = function () {
            if (confirm("Are you sure you want to remove this book?")) {
              removeBook(i, j);
            }
          };

          const editBookButton = document.createElement("button");
          editBookButton.textContent = "Edit Book";
          editBookButton.onclick = function () {
            openModal("book", i);
            document.getElementById("addEditBookButton").textContent = "Save";
            document.getElementById("bookTitle").value = category
              .getBooks()
              [j].getTitle();
            document.getElementById("bookAuthor").value = category
              .getBooks()
              [j].getAuthor();
            document.getElementById("bookPublicationYear").value = category
              .getBooks()
              [j].getPublicationYear();
            document.getElementById("bookGenre").value = category
              .getBooks()
              [j].getGenre();
            document.getElementById("bookIndex").value = j;
          };

          bookItem.appendChild(bookInfo);
          bookItem.appendChild(removeBookButton);
          bookItem.appendChild(editBookButton);
          bookList.appendChild(bookItem);
        }
      }

      categoryItem.appendChild(bookList);
      categoryList.appendChild(categoryItem);
    }
  }
}

const categoryModal = document.getElementById("categoryModal");
const bookModal = document.getElementById("bookModal");
const categoryList = new CategoryList();
let currentCategoryIndex;

function openModal(modalType, categoryIndex) {
  currentCategoryIndex = categoryIndex;
  const modalId = modalType === "category" ? "categoryModal" : "bookModal";
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(modalType) {
  const modalId = modalType === "category" ? "categoryModal" : "bookModal";
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

function createCategory() {
  const categoryName = document.getElementById("categoryName").value;
  categoryList.createCategory(categoryName);
  displayCategories();
  resetCategoryModal();
  closeModal("category");
}

function editCategory(index) {
  const newCategoryName = prompt("Enter the new category name:");
  if (newCategoryName !== null && newCategoryName !== "") {
    categoryList.editCategory(index, newCategoryName);
    displayCategories();
  }
}

function removeCategory(index) {
  categoryList.removeCategory(index);
  displayCategories();
}

function addEditBook() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const publicationYear = document.getElementById("bookPublicationYear").value;
  const genre = document.getElementById("bookGenre").value;

  const book = new Book(title, author, publicationYear, genre);
  const category = categoryList.getCategory(currentCategoryIndex);
  if (category) {
    if (document.getElementById("addEditBookButton").textContent === "Add") {
      category.addBook(book);
    } else {
      const bookIndex = document.getElementById("bookIndex").value;
      category.getBooks()[bookIndex] = book;
    }
    displayCategories();
    resetBookModal();
    closeModal("book");
  }
}

function removeBook(categoryIndex, bookIndex) {
  const category = categoryList.getCategory(categoryIndex);
  if (category) {
    category.removeBook(bookIndex);
    displayCategories();
  }
}

function displayCategories() {
  categoryList.displayCategories();
}

function resetCategoryModal() {
  document.getElementById("categoryName").value = "";
}

function resetBookModal() {
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookPublicationYear").value = "";
  document.getElementById("bookGenre").value = "";
}

function CategoryInput(event) {
  if (event.key === "Enter") {
    createCategory();
  }
}

function handleBookInput(event) {
  if (event.key === "Enter") {
    addEditBook();
  }
}

function handleCategoryInput(event) {
  if (event.key === "Enter") {
    createCategory();
  }
}

displayCategories();
