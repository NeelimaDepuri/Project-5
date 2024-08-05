var images = ["image1.jpg", "image2.jpg", "image3.jpg"];
var x = 0; // Initialize the index for the current image

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}
function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}
setInterval(displayNextImage, 2000); 