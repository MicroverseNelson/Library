/** work the modal */
let modal = document.getElementById("mymodal");
let btnmodal = document.getElementById("btnmodal");
let btnclosemodal = document.getElementsByClassName("close")[0];
let ellipsisIcon= document.getElementById("ellipsisIcon");
let utilitiesIcons = document.getElementById("icons");
let form = document.getElementById("form");
let inputTitle = document.getElementById("title");
let inputAuthor = document.getElementById("author");
let inputPages = document.getElementById("pages");
let InputCheckBox = document.getElementById("isRead");
let booklistDiv = document.getElementById("book-list");


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
   if( utilitiesIcons.style.display == "none"){
       utilitiesIcons.style.display = "block";
   }else{
    utilitiesIcons.style.display = "none";
   }
  };

let myLibrary = JSON.parse(localStorage.getItem('bookshelf')) || [];

function Book(title,author,pages, read){
    this.title = inputTitle.value,
    this.author = inputAuthor.value,
    this.pages =inputPages.value,
    this.read = InputCheckBox.value
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    myBook = new Book();
    myLibrary.push(myBook);
    localStorage.setItem("bookshelf", JSON.stringify(myLibrary));
    form.reset();
});

Book.prototype.createBook = function(){
   Book();
    booklistDiv = document.createElement('div');
    booklistDiv.classList.add('book-list');
    booklistDiv.innerHTML = `<div class="book-card">
    <span id="ellipsisIcon">&#8942;</span>
    <div class="icons" id="icons">
      <i class="fa fa-pencil" aria-hidden="true"></i>
      <i class="fa fa-trash" aria-hidden="true"></i>
    </div>
    <h4>${this.title}</h4>
    <h6>${this.author}</h6>
    <div class="pages"><h6>${this.pages}</h6></div>
  </div>`;
    //const BookCardDiv = document.createElement('div');
    //BookCardDiv.classList.add('book-card');
    //const ellipsisIcon = document.createElement('span');
    //const utilicons = doucment.createElement('div');
    //utilicons.classList.add('icons');
    //utilicons.innerHtml = `<i class="fa fa-pencil" aria-hidden="true"></i>
    //<i class="fa fa-trash" aria-hidden="true"></i>`;
    //ellipsisIcon.append(utilicons);
    //const bookTitle = document.createElement('h4');
    //bookTitle.textContent ="${this.title}";
    //const bookAuthor = document.createElement('h6');
    //bookAuthor.textContent ="${this.author}";
    //const bookPagesDiv = document.createElement('div');
    //bookPagesDiv.classList.add('pages');
    //bookPagesDiv.innerHtml = `<h6>${this.pages}</h6>`

    //booklistDiv.append(ellipsisIcon,bookTitle,bookAuthor,bookPagesDiv);

}

Book.prototype.displayBook = function(){
    createBook()
    myLibrary.forEach(element => {
        console.log(myLibrary);
    });
    

}

Book.prototype.editBook = function(){
    

}

Book.prototype.deleteBook = function(){

}
Book.prototype.readStatus = function(){

}

