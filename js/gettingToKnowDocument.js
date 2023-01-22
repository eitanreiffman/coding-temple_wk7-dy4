console.log("Let's get to know the document")

console.log(document)

let body = document.body;
console.dir(body);

let children = body.children;
console.log(children);

let navBar = children[0];
console.log(navBar);
console.dir(navBar);

navBar.className = 'navbar bg-primary-subtle'

// Popular Document Object Methods

// Document Get Methods

// document.getElementById(id);
// return the first element with an id that matches the string id
let myHeader = document.getElementById('top-header');
console.log(myHeader)
console.dir(myHeader)

myHeader.innerHTML = 'This is the new string inside of the H1'

// document.getElementByTagName('tagName');
// return an HTMLCollection (Array-like) of all elements that match tag name

let myButtons = document.getElementsByTagName('button')
console.log(myButtons)
console.dir(myButtons)

myButtons[0].className = 'bg-primary'
myButtons[1].className = 'bg-success'
myButtons[2].className = 'bg-warning'
myButtons[3].className = 'bg-secondary'
myButtons[4].className = 'bg-danger'
myButtons[5].className = 'bg-light'

let myRows = document.getElementsByClassName('row')
console.log(myRows)

// Document Query Selector
// Return the FIRST element that matches the specified selector
let firstCol = document.querySelector('.col-2')
console.log(firstCol);

let divInNav = document.querySelector('nav > div')
console.log(divInNav)

// document.querySelectorAll

// return NodeLike
let firstGroupButtons = document.querySelectorAll('.row button');
console.log(firstGroupButtons)

// Create Elements with the document

let newHeader = document.createElement('h4');
newHeader.innerHTML = 'Header Created By JavaScript';
newHeader.className = 'text-center text-primary';
newHeader.style.backgroundColor = 'aquamarine';
console.log(newHeader);

// Add element to our HTML
// Element.append(elementToAppend)
// Append element as last child of element

let container = document.querySelector('.container')
container.append(newHeader)

let newButton = document.createElement('button');
newButton.innerHTML = 'New Button';

myRows[0].append(newButton)