var mountains = [];
var m1 = { name: "Kilimanjaro", height: 19314 };
mountains.push(m1);
var m2 = { name: "Everest", height: 29029 };
mountains.push(m2);
var m3 = { name: "Denali", height: 20310 };
mountains.push(m3);
var products = [];
var p1 = { name: "laptop", price: 700 };
products.push(p1);
var p2 = { name: "keyboard", price: 100 };
products.push(p2);
var p3 = { name: "mouse", price: 30 };
products.push(p3);
function calcAverageProductPrice(products) {
    var totalPrice = 0;
    for (var i = 0; i < products.length; i++) {
        totalPrice += products[i].price;
    }
    var average = totalPrice / products.length;
    return average;
}
var avg = calcAverageProductPrice(products);
console.log(avg);
var pr1 = { name: "motor", price: 10.00 };
var pr2 = { name: "sensor", price: 12.50 };
var pr3 = { name: "LED", price: 1.00 };
var item1 = { product: pr1, quantity: 10 };
var item2 = { product: pr2, quantity: 4 };
var item3 = { product: pr3, quantity: 20 };
var inventory = [];
inventory.push(item1);
inventory.push(item2);
inventory.push(item3);
function calcInventoryValue(inventory) {
    var value = 0;
    for (var i = 0; i < inventory.length; i++) {
        value += inventory[i].product.price * inventory[i].quantity;
    }
    return value;
}
var val = calcInventoryValue(inventory);
console.log(val);
