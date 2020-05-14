//setup for loops
var ind = 0;
//array of images
var categoryImages = ["./image/dog.jpg", "./image/cat.jpg", "./image/bird.jpg", "./image/lizard.jpg"];

//function for carousel
function carousel() {
    var change = document.getElementById("dogCategory");
    change.src = categoryImages[ind];
    ind++;
    if(ind>=categoryImages.length)
    { ind = 0; }
    setTimeout (carousel, 3000);
}
setTimeout (carousel, 3000);

//