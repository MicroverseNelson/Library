/** work the modal */
const modal = document.getElementById("mymodal");
const btnmodal = document.getElementById("btnmodal");
const btnclosemodal = document.getElementsByClassName("close")[0];
//const ellipsisIcon= document.getElementById("ellipsisIcon");
//const utilitiesIcons = document.getElementById("icons");
const form = document.getElementById("form");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const InputCheckBox = document.getElementById("isRead");



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

const myLibrary = JSON.parse(localStorage.getItem('bookshelf')) || [];

function Book(title,author,pages, read){
    this.title = inputTitle.value,
    this.author = inputAuthor.value,
    this.pages =inputPages.value,
    this.read = InputCheckBox.value
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createBook();
    myBook = new Book();
    myLibrary.push(myBook);
    localStorage.setItem("bookshelf", JSON.stringify(myLibrary));
    form.reset();
});

const createBook = () => {
  Book();
  const booklistDiv = document.getElementById("book-list");
    /**`<div class="book-card">
    <span id="ellipsisIcon">&#8942;</span>
    <div class="icons" id="icons">
      <i class="fa fa-pencil" aria-hidden="true"></i>
      <i class="fa fa-trash" aria-hidden="true"></i>
    </div>
    <h4>${title}</h4>
    <h6>${author}</h6>
    <div class="pages"><h6>${pages}</h6></div>
  </div>`; **/

 const bookCardDiv= document.createElement('div');
 bookCardDiv.classList.add("book-card");
 const span = document.createElement("span");
 span.setAttribute('id', "ellipsisIcon");
 const iconsDiv = document.createElement("div")
 iconsDiv.classList.add("icons");
 iconsDiv.innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>
 <i class="fa fa-trash" aria-hidden="true"></i>`;
 
 const titleHeader = document.createElement('h4')
 titleHeader.innerHTML = "${this.title}";
 const authorHeader = document.createElement('h6')
 authorHeader.innerHTML = `${this.author}`;
 bookCardDiv.append(titleHeader, authorHeader);
 const pagesDiv = document.createElement('div')
 const pagesheader = document.createElement('h6');
 pagesheader.innerHTML = `${this.pages}`;
 pagesDiv.append(pagesheader);

 bookCardDiv.append(span, iconsDiv, titleHeader, authorHeader, pagesDiv);
 booklistDiv.append(bookCardDiv); 
}
console.log(createBook());

const displayBook = ()=> {
    createBook();
}

Book.prototype.editBook = function(){
    

}

Book.prototype.deleteBook = function(){

}
Book.prototype.readStatus = function(){

}

