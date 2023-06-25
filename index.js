const createBook = document.querySelector(".createBook");
const modal = document.querySelector("#bookModal");
const saveBtn = document.querySelector(".saveBtn");
const closeBtn = document.querySelector(".closeBtn");
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
