
function updateOrder() {
    const TAXRATE = 0.0925;
    const DONUTPRICE = 0.50;
    let numCakeDonuts = parseDonuts(document.getElementById("cakedonuts").value);
    let numGlazedDonuts = parseDonuts(document.getElementById("glazeddonuts").value);

    if (isNaN (numCakeDonuts))
    numCakeDonuts = 0;
    if (isNaN (numGlazedDonuts))
    numGlazedDonuts = 0;
    let subTotal = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
    let tax = subTotal - TAXRATE;
    let total = subTotal + tax;
    document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);
    document.getElementById("tax").value = "$" + tax.toFixed(2);
    document.getElementById("total").value = "$" + total.toFixed(2);
}

function placeOrder() {
    if ( document.getElementById("name").value == "" ) {
    alert("I'm sorry but you must provide your name before submitting an order.");
    } else if (document.getElementById("delivery").value == "" || 
    isNaN (document.getElementById("delivery").value) ) {
        alert("I'm sorry but you must provide the number of minutes delivery"
         + " before submiting an order.");
    } else {
        form.submit()
    }
}

function parseDonuts (donutString) {
    numDonuts = parseInt(donutString);
    if ( donutString.indexOf("dozen") != -1 ) 
        numDonuts *=12;
        return numDonuts;    
}
