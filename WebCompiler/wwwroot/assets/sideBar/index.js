const sidebar = document.getElementById('sidebar');
let isMouseOverSidebar = false;

// Track mouse enter and leave events
sidebar.addEventListener('mouseenter', () => {
    isMouseOverSidebar = true;
});

sidebar.addEventListener('mouseleave', () => {
    isMouseOverSidebar = false;
});

// Enable scrolling of the sidebar when using the mouse wheel
sidebar.addEventListener('wheel', (event) => {
    if (isMouseOverSidebar) {
        sidebar.scrollBy({
            top: event.deltaY,
            behavior: 'smooth' // Smooth scrolling
        });
        event.preventDefault(); // Prevent default scrolling behavior
    }
});

// Get elements
const selectBox = document.getElementById("selectBox");
const selectOptions = document.getElementById("selectOptions");
const selectedIcon = document.getElementById("selectedIcon");

// Toggle the dropdown on click
selectBox.addEventListener("click", () => {
    const isVisible = selectOptions.style.display === "block";
    selectOptions.style.display = isVisible ? "none" : "block";
});

// Update icon and close dropdown on option click
const options = document.querySelectorAll(".option");
options.forEach(option => {
    option.addEventListener("click", (e) => {
        // Get the SVG element from the selected option
        const newSVG = option.querySelector("svg").cloneNode(true); // Clone the SVG from the selected option

        // Remove old SVG image
        const oldImage = selectBox.querySelector("svg");
        if (oldImage) {
            selectBox.removeChild(oldImage);
        }

        // Append the new SVG to the select box
        selectBox.appendChild(newSVG);

        selectOptions.style.display = "none"; // Hide the options
    });
});

// Hide the dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!selectBox.contains(event.target)) {
        selectOptions.style.display = "none"; // Hide the options if click is outside
    }
});

