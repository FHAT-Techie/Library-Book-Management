
export function replaceDateTime() {
    // Step 1: Select the HTML elements
    const yearElement = document.querySelector('.year');
    const timeElement = document.querySelector('.time');

    // Step 2: Get the current date and time
    const now = new Date(); // Get the current date and time
    
    // Format the date: "Month Day, Year" for West African Time
    const optionsDate = { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'Africa/Lagos' }; // WAT (Lagos)
    const formattedDate = now.toLocaleDateString('en-US', optionsDate); // e.g., "Feb 23, 2024"

    // Format the time: "Day, hh:mm AM/PM" for West African Time
    const optionsTime = { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Africa/Lagos' }; // WAT (Lagos)
    const formattedTime = now.toLocaleString('en-US', optionsTime); // e.g., "Friday, 2:45 PM"
    
    // Step 3: Replace the old content with new content
    yearElement.innerHTML = formattedDate;  // Replaces the year
    timeElement.innerHTML = formattedTime;  // Replaces the time
}