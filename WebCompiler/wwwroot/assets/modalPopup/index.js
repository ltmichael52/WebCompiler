
document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("saveButton");
    const closeModalBtn = document.getElementById("closeCustomModal");
    const closeModalFooterBtn = document.getElementById("closeCustomModalFooter");
    const customModal = document.getElementById("customModal");

    // Function to open the modal
    openModalBtn.addEventListener("click", function () {
        customModal.style.display = "flex";
    });

    // Function to close the modal (close button and footer button)
    closeModalBtn.addEventListener("click", function () {
        customModal.style.display = "none";
    });
    closeModalFooterBtn.addEventListener("click", function () {
        customModal.style.display = "none";
    });

    // Close the modal when clicking outside the content area
    window.addEventListener("click", function (event) {
        if (event.target === customModal) {
            customModal.style.display = "none";
        }
    });
});