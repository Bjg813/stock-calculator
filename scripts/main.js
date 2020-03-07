// View
const view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById('calculatorOutput');
        messageArea.innerHTML = msg;
    }
}

// Controller
const controller = {
    percentage: 100,
    processStockDiscount: function(maxStockPrice, currentStockPrice) {
        let stockDifference = maxStockPrice - currentStockPrice;
        let stockDiscount =  stockDifference / maxStockPrice;
        let stockDiscountPercentage = Math.floor(stockDiscount * this.percentage);
        view.displayMessage('You get a ' + stockDiscountPercentage + '%' + ' discount, invest now!');
    }
}

// Discount Stock process
function discountStock() {
    let currentStockPriceInput = document.getElementById('currentStockPrice');
    let currentStockPrice = currentStockPriceInput.value;
    let maxStockPriceInput = document.getElementById('maxPrice');
    let maxStockPrice = maxStockPriceInput.value;
    controller.processStockDiscount(maxStockPrice, currentStockPrice);
}

// init
function init() {
    let submitButton = document.getElementById('submitDiscount');
    submitButton.onclick = discountStock;
}

window.onload = init;