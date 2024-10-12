import { addbook, displayBOOK } from "./addBook.js"
import { replaceDateTime } from "./time.js"

let addBTN = document.querySelector(`.addButton`)
let popup = document.querySelector(`.popup`)
let saveBTN = document.querySelector(`.savebtn`)
let form = document.querySelector(`form`)

let bookshelf = []







addBTN.addEventListener(`click`,(event)=>{
event.preventDefault()
popup.style.display = `flex`


})


popup.addEventListener(`click`, (event)=>{
    event.preventDefault()
    if (event.target === popup){
        popup.style.display =`none`
    }
})

saveBTN.addEventListener(`click`, (event)=>{
    event.preventDefault()
    addbook(bookshelf)
    displayBOOK(bookshelf)
    popup.style.display =`none`
  form.reset()
})


replaceDateTime() 

document.addEventListener('DOMContentLoaded', function () {
    const tableContainer = document.querySelector('.table');

    // Check if the content exceeds the max width and enable horizontal scroll
    function checkHorizontalOverflow() {
        if (tableContainer.scrollWidth > tableContainer.clientWidth) {
            tableContainer.style.overflowX = 'auto'; // Add horizontal scrollbar if content exceeds max width
        } else {
            tableContainer.style.overflowX = 'hidden'; // Remove horizontal scrollbar if content fits
        }
    }

    // Run the check when the page loads
    checkHorizontalOverflow();

    // Run the check whenever the window is resized
    window.addEventListener('resize', checkHorizontalOverflow);
});
