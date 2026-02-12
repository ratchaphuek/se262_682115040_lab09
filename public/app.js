async function loadBooks(search = "") {
  // TODO 13: fetch("/books") and convert to JSON
  const res = await fetch(`/books?search=${encodeURIComponent(search)}`);
  const books = await res.json();

  // TODO 14: render books into #book-list
  const el = document.getElementById("book-list");

  el.innerHTML = books
    .map(
      (b) => `
  <div>
    ${b.bookNo}. ${b.bookName}
    <button onclick="deleteBook(${b.bookNo})">Delete</button>
  </div>
`)
    .join("");
}
window.addEventListener("DOMContentLoaded", () => {
  loadBooks();

  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (e) => {
    loadBooks(e.target.value);
  });
});

async function deleteBook(bookNo) {
  await fetch(`/books/${bookNo}`, {
    method: "DELETE",
  });

  loadBooks();
}
