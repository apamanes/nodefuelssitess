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



/*let scrolled = window.scrollY;
console.log("Pixels scrolled: " + scrolled);

let totalHeight = document.documentElement.scrollHeight;
console.log("Total height: " + totalHeight);

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("shrink1", window.scrollY > 25);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("shrink2", window.scrollY > 50);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("shrink3", window.scrollY > 75);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("shrink4", window.scrollY > 100);
});*/


