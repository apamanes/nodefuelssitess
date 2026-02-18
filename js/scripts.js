console.log("the page is working");

const header = document.getElementById("short-header");

// Define the scroll limit (in pixels)
// The header will appear after scrolling this far down
const scrollLimit = 390; 

// The function that runs whenever the user scrolls
function handleScroll() {
    // Check the current scroll position (vertical offset)
    if (window.scrollY >= scrollLimit) {
        // If past the limit, add the 'sticky' class
        header.classList.add("sticky");
    } else {
        // Otherwise, remove the 'sticky' class
        header.classList.remove("sticky");
    }
}

// Attach the handleScroll function to the 'scroll' event
window.addEventListener("scroll", handleScroll);






