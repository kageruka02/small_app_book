const myLibrary = [];
const formDiv = document.querySelector(".form");
const submitbutton = document.querySelector(".submit");
const newBookbutton = document.querySelector(".newBook");
const crossButton = document.querySelector(".cross");
const title = document.querySelector("#title");

const author = document.querySelector("#author");
const numberOfPages = document.querySelector("#number");
const form = document.querySelector("#form");
// const unreadButtonArray = document.querySelectorAll("#unreadButton");

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

newBookbutton.addEventListener("click", function (event) {
  event.stopPropagation();
  formDiv.classList.toggle("visible");
  console.log("hello");
});

document.addEventListener("click", function (event) {
  //   console.log("this is document.addEventListener");
  event.stopPropagation();
  if (
    formDiv.classList.contains("visible") &&
    !formDiv.contains(event.target)
  ) {
    formDiv.classList.remove("visible");
  }
});
crossButton.addEventListener("click", function () {
  form.reset();
  formDiv.classList.remove("visible");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let book = new Book(title.value, author.value, numberOfPages.value, true);
  addToMyLibrary(book);
  formDiv.classList.remove("visible");
  form.reset();
});

function addToMyLibrary(book) {
  myLibrary.push(book);
  displayTheCreated(book);
}
function displayTheCreated(book) {
  const bookList = document.querySelector(".booklist");
  const bookid = document.createElement("div");
  bookid.classList.add("book");
  const title = document.createElement("div");

  title.textContent = book.title;
  title.id = "title-";
  const author = document.createElement("div");
  author.textContent = book.author;
  author.id = "author-";
  const pages = document.createElement("div");
  pages.textContent = `${book.pages} pages`;
  pages.id = "pages-";
  const firstDiv = document.createElement("div");

  // Create the span element and set its ID and text content
  const statusSpan = document.createElement("span");
  statusSpan.id = "status-";
  statusSpan.textContent = book.status ? `Status:read` : `Status:unread`;

  // Create the unread button
  const unreadButton = document.createElement("button");
  unreadButton.textContent = book.status ? `read` : `unread`;
  unreadButton.id = "unreadButton";

  // Append the span and button to the first div
  firstDiv.appendChild(statusSpan);
  firstDiv.appendChild(unreadButton);
  const secondDiv = document.createElement("div");

  // Create the delete button and set its class and text content
  const deleteButton = document.createElement("button");
  deleteButton.className = "deletebook";
  deleteButton.textContent = "delete";

  // Append the delete button to the second div
  secondDiv.appendChild(deleteButton);

  bookList.appendChild(bookid);
  bookid.appendChild(title);
  bookid.appendChild(author);
  bookid.appendChild(pages);
  bookid.appendChild(firstDiv);
  bookid.appendChild(secondDiv);

  deleteButton.addEventListener("click", function () {
    bookList.removeChild(bookid);
  });
  unreadButton.addEventListener("click", function () {
    const unreadArray = unreadButton.textContent;
    const statusSpantext = statusSpan.textContent;
    if (unreadArray.includes("unread") && statusSpantext.includes("unread")) {
      unreadButton.textContent = "read";
      statusSpan.textContent = "Status:read";
    } else {
      unreadButton.textContent = "unread";
      statusSpan.textContent = "Status:unread";
    }
  });
}
