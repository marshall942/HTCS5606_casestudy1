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

//above is the javascript animation



//array for products - "name", "price"
// var items = [["Dog food brand 1", "16.49"], ["Dog food brand 2", "5.99"],
//     ["Cat food brand 1", "14.99"], ["Cat food brand 2", "12.99"],
//     ["Bird food brand 1", "33.49"], ["Bird food brand 2", "12.99"],
//     ["Reptile food brand 1", "2.49"], ["Reptile food brand 2", "11.99"]];



//
// function invoicePrice() {
//     var price = document.getElementsByClassName("productPrice")
//     price = parseFloat(productPrice.value)
//     var result=
// }
//
// function add() {
//     num1Input = document.getElementById("num1Input");
//     num2Input = document.getElementById("num2Input");
//     num1 = parseFloat(num1Input.value);
//     num2 = parseFloat(num2Input.value);
//     var result = num1+num2;
//     resultPara = document.getElementById("showCalculationResult");
//     resultPara.innerText = result;
// }
//
//
// function subtract() {
//     num1Input = document.getElementById("num1Input");
//     num2Input = document.getElementById("num2Input");
//     num1 = parseFloat(num1Input.value);
//     num2 = parseFloat(num2Input.value);
//     var result = num1-num2;
//     resultPara = document.getElementById("showCalculationResult");
//     resultPara.innerText = result;
// }
//
//
// function discount() {
//     if invoicePrice >= 300
//     invoicePrice =
// }