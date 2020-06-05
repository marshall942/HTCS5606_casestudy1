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

//this is the add to cart function
function addToCart(e) {
    cart = document.getElementById("cartContent");
    switch (e.id) {
        case "addBirdFood1":
            qty = document.getElementById("birdFood1Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Bird food 1: <input type="number" class="cartInput" ' +
                    'id = "cartBirdFood1" pName = "birdFood1" price="3.98" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 3.98)
                    + '</p>');
            break;
        case "addBirdFood2":
            qty = document.getElementById("birdFood2Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Bird food 2: <input type="number" class="cartInput" ' +
                    'id = "cartBirdFood2" pName = "birdFood2" price="4.5" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 4.5)
                    + '</p>');
            break;
        case "addCatFood1":
            qty = document.getElementById("catFood1Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Cat food 1: <input type="number" class="cartInput" ' +
                    'id = "cartCatFood1" pName = "catFood1" price="3" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 3)
                    + '</p>');
            break;
        case "addCatFood2":
            qty = document.getElementById("catFood2Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Cat food 2: <input type="number" class="cartInput" ' +
                    'id = "cartCatFood2" pName = "catFood2" price="5.49" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 5.49)
                    + '</p>');
            break;
        case "addDogFood1":
            qty = document.getElementById("dogFood1Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Dog food 1: <input type="number" class="cartInput" ' +
                    'id = "cartDogFood1" pName = "dogFood1" price="8.5" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 8.5)
                    + '</p>');
            break;
        case "addDogFood2":
            qty = document.getElementById("dogFood2Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Dog food 2: <input type="number" class="cartInput" ' +
                    'id = "cartDogFood2" pName = "dogFood2" price="5" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 5)
                    + '</p>');
            break;
        case "addLizardFood1":
            qty = document.getElementById("lizardFood1Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Lizard food 1: <input type="number" class="cartInput" ' +
                    'id = "cartLizardFood1" pName = "lizardFood1" price="2.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.99)
                    + '</p>');
            break;
        case "addLizardFood2":
            qty = document.getElementById("lizardFood2Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Lizard food 2: <input type="number" class="cartInput" ' +
                    'id = "cartLizardFood2" pName = "lizardFood2" price="2.45" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.45)
                    + '</p>');
            break;
        default:
    }
} //end of add to cart function


//this is the invoice function
function invoice() {

    voicePage = document.getElementById("voicePage");
    //Get the button that opens the modal
    var btn = document.getElementById("showInvoiceBut");

    //Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    //When the user clicks on the button, open the modal
    btn.onclick = function() {
        cart = document.getElementsByClassName("cartInput");
        voiceContent = document.getElementById("voice-content");
        Total = 0;
        var elems = document.getElementsByClassName("items");
        i = 0
        while (i<elems.length){
            elems[i].parentNode.removeChild(elems[i]);
        }


        i = 0;
        while (i < cart.length) {
            console.log(cart[i].id);
            qty = cart[i].value;
            switch (cart[i].id) {
                case "cartBread":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Bread: Qty:'+ qty +' Price:$' + (Number(qty) * 3.2)+ '</p>');
                    Total += (Number(qty) * 3.2);
                    break;
                case "cartCheese":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Cheese: Qty:'+ qty +' Price:$' + (Number(qty) * 2.9)+ '</p>');
                    Total += (Number(qty) * 2.9);
                    break;
                case "cartSpread":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Spread: Qty:'+ qty +' Price:$' + (Number(qty) * 9)+ '</p>');
                    Total += (Number(qty) * 9);
                    break;
                case "cartMilk1":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Spread: Qty:'+ qty +' Price:$' + (Number(qty) * 4.5)+ '</p>');
                    Total += (Number(qty) * 4.5);
                    break;
                case "cartMilk2":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Spread: Qty:'+ qty +' Price:$' + (Number(qty) * 2.32)+ '</p>');
                    Total += (Number(qty) * 2.32);
                    break;
                default:
                // code block
            }

            i++;

        }
        voiceContent.insertAdjacentHTML(
            'beforeend',
            '<p class = "items">Total: $'+ Total+'</p>');

        voicePage.style.display = "block";
    }

} //end of invoice function
