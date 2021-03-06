// Creating object to store order details
class Order {
    constructor(biryani, butterChicken, shahiPaneer, naan, roti, dal, rice, choleBhature, pizza, burger, cost) {
        this.biryani = biryani;
        this.butterChicken = butterChicken;
        this.shahiPaneer = shahiPaneer;
        this.naan = naan;
        this.roti = roti;
        this.dal = dal;
        this.rice = rice;
        this.choleBhature = choleBhature;
        this.pizza = pizza;
        this.burger = burger;
        this.cost = cost;
    }
}

// Creating order obejct and sending it for server.js
const prices = { "0": 200, "1": 240, "2": 180, "3": 35, "4": 20, "5": 150, "6": 120, "7": 110, "8": 220, "9": 190 }
const orderTaken = () => {
    let f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        f[i] = Number(document.getElementById(`i${i}`).innerText);
        sum += (f[i] * prices[i]);
    }

    // Creating order object
    const currentOrder = new Order(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], sum);

    // Posting order object in json format
    fetch('http://localhost:3000/order', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentOrder)
    })
        .then(res => {
            return res.json();
        })
}

// For the + button of quantity in menu section 
function plus1(ele) {
    const parent = ele.parentNode;
    const qty = parent.childNodes[3];
    const cart = document.getElementById('cart-value');
    let value = Number(cart.innerText);
    // updates cart value
    cart.innerText = `${value + prices[(qty.id)[1]]}`;
    // updates item quantity
    qty.innerText = `${Number(qty.innerText) + 1}`;
}

// For the - button of quantity in menu section 
function minus1(ele) {
    const parent = ele.parentNode;
    const qty = parent.childNodes[3];
    const cart = document.getElementById('cart-value');
    let value = Number(cart.innerText);
    if (Number(qty.innerText) > 0) {
        // updates cart value
        cart.innerText = `${value - prices[(qty.id)[1]]}`;
        // updates item quantity
        qty.innerText = `${Number(qty.innerText) - 1}`;
    }
}













