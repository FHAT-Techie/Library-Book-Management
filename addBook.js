export function addbook(bookshelf) {
   let newbook ={
bookName : document.querySelector("[name='Title']").value ,
bookAuthor : document.querySelector("[name='Author']").value ,
bookLink : document.querySelector("[name= 'Link']").value ,
bookGenre : document.querySelector(`#Genre`).value
   }
    bookshelf.push(newbook)
}
 
export function displayBOOK(bookShelf) {
    // Select the table and tbody elements
    let table = document.querySelector(`table`);
    let tbody = table.querySelector(`tbody`);

    // Clear existing rows from tbody if it exists
    if (tbody) {
        tbody.innerHTML = ''; // This will clear all rows
    } else {
        // If tbody doesn't exist, create it and append to the table
        tbody = document.createElement(`tbody`);
        table.appendChild(tbody);
    }

    // Loop through each book in the bookShelf array
    bookShelf.forEach((item) => {
        // Create a new row for each book
        let tr = document.createElement(`tr`);
        tbody.appendChild(tr);

        // Create table data elements for each property of the book
        let td1 = document.createElement(`td`);
        let td2 = document.createElement(`td`);
        let td3 = document.createElement(`td`);
        let td4 = document.createElement(`td`);
        let td5 = document.createElement(`td`);
        
        // Assign text content to each cell
        td1.textContent = item.bookName;
        td2.textContent = item.bookAuthor;
        td3.textContent = item.bookGenre; // Corrected from bookLink to bookGenre
        td4.textContent = item.bookLink;

        // Add delete functionality
        td5.textContent = `Delete`;
        td5.style.cursor = 'pointer'; // Change cursor to pointer
        td5.onclick = function() {
            // Call the delete function (you need to implement the logic)
            deleteBook(item);
            // Optionally, refresh the book list after deletion
            displayBOOK(bookShelf.filter(b => b !== item)); // Update bookShelf as per your logic
        };

        // Append all data cells to the row
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
    });

    // Optional: Log the final table structure for debugging
    console.log(table);
}

// A hypothetical delete function for demonstration
function deleteBook(item) {
    console.log(`Deleting book: ${item.bookName}`);
    // Implement deletion logic here
}


