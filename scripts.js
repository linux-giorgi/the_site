
// Function to open an image in full screen
function openFullscreen(imgElement) {
    var modal = document.getElementById("fullscreenModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

// Function to close the full-screen modal
function closeFullscreen() {
    var modal = document.getElementById("fullscreenModal");
    modal.style.display = "none";
}

// Add event listeners for gallery images
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
        openFullscreen(this);
    });
});
