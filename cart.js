function showcart() {
    document.getElementById('c').classList.add("cart");
    if (document.getElementById('c').childElementCount == 0) {
        document.getElementById('c').innerHTML = "no items added in the cart";
    }
    if (document.getElementById('c').childElementCount != 0) {
        document.getElementById('c').classList.add("cart");
        document.getElementById
    }
}
function updatecart(elem) {
    var x = document.createElement("h4");
    var id = elem.id;
    x.textContent = document.getElementById(id).getAttribute("name");
    document.getElementById("c").appendChild(x);
    
}
