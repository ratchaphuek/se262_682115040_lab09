async function loadBooks() {
  // TODO 13: fetch("/books") and convert to JSON
  const res = await fetch("/books");
  const books = await res.json();

  // TODO 14: render books into #book-list
  const el = document.getElementById("book-list");

  el.innerHTML = books
    .map((b) => `<div>${b.bookNo}. ${b.bookName}</div>`)
    .join("");
}

window.addEventListener("DOMContentLoaded", loadBooks);
