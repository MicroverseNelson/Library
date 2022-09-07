

window.onload = ()=>{
  /** work the modal */
  const modal = document.getElementById("mymodal");
  const btnmodal = document.getElementById("btnmodal");
  const btnclosemodal = document.getElementsByClassName("close")[0];
  const ellipsisIcon = document.getElementById("ellipsisIcon");
  const utilitiesIcons = document.getElementById("icons");
  const form = document.getElementById("form");
  const inputTitle = document.getElementById("title");
  const inputAuthor = document.getElementById("author");
  const inputPages = document.getElementById("pages");
  const InputCheckBox = document.getElementById("isRead");
  const AddBook = document.getElementById("btnAddBook");
  const bookListDiv = document.getElementById("book-list");


  function createBookContainer(){
    const bookCardDiv = document.createElement("div");
      bookCardDiv.classList.add("book-card");
      //add a span
      const elipseSpan = document.createElement("span");
      elipseSpan.setAttribute("id", "ellipsisIcon");
      elipseSpan.innerHTML = "&#8942;";
      bookCardDiv.append(elipseSpan);
      const utilitiesIcons = document.createElement("div");
      utilitiesIcons.classList.add("icons");
      utilitiesIcons.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"></i>';
      bookCardDiv.append(utilitiesIcons);
      const titleHeader = document.createElement("h4");
      titleHeader.innerHTML = "Title";
      bookCardDiv.append(titleHeader);
      const authorHeader = document.createElement("h6");
      authorHeader.innerHTML = "author";
      bookCardDiv.append(authorHeader);
      const pagesDiv = document.createElement("div");
      pagesDiv.classList.add("pages");
      pagesDiv.innerHTML = '<h6>577</h6>';
      bookCardDiv.append(pagesDiv);
      bookListDiv.append(bookCardDiv);
  }



  AddBook.addEventListener('click', (e) => {
    e.preventDefault();
    createBookContainer();
    let book = Book();
    saveBookToLocalStorage(book);
    

  });

  btnmodal.onclick = () => {
      modal.style.display = "block";
  };

  btnclosemodal.onclick = () => {
      modal.style.display = "none";
      
  };

 window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  ellipsisIcon.onclick = () => {
    if( icons.style.display == "none"){
        icons.style.display = "block";
    }else{
     icons.style.display = "none";
    }
   }
  
   const myLibrary = JSON.parse(localStorage.getItem('bookshelf')) || [];

  function Book(title,author,pages, read){
    this.title = inputTitle.value,
    this.author = inputAuthor.value,
    this.pages =inputPages.value,
    this.read = InputCheckBox.value
  }

  function saveBookToLocalStorage(myBook) {
    myBook = new Book();
    myLibrary.push(myBook);
    localStorage.setItem("bookshelf", JSON.stringify(myLibrary));
    form.reset();
  }

  
}
